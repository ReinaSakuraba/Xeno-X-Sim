function range(start, stop, step=1) {
    if (stop === undefined) {
        stop = start;
        start = 1;
    }

    let result = [];
    for (let i = start; step > 0 ? i <= stop : i >= stop; i += step) {
        result.push(i);
    }

    return result;
}


class Simulator {
    constructor() {
        this.currentSkills = new Set();
        this.skillLevels = new Map();

        $("#class-selector").html("");
        $("#level-selector").html("");

        for (let [className, classData] of Object.entries(classes)) {
            if (className == "elma") {
                $("#class-selector").append("<option disabled>&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;</option>");
            }
            $("#class-selector").append(`<option value="${className}">${classData.name}</option>`);
        }

        for (let skill in skills) {
            this.skillLevels.set(skill, 1);
        }

        for (let i of range(60)) {
            $("#level-selector").append(`<option value"${i}">${i}</option>`);
        }

        this.currentClass = "drifter";
        this.currentLevel = 60;
        this.currentMeleeWeapon = "longsword";
        this.currentRangedWeapon = "assaultRifle";
    }

    get currentClass() {
        return this._currentClass;
    }
    set currentClass(value) {
        this._currentClass = value;
        $("#class-selector").val(value);
        this.setSkills();
        this.updateStats();
    }

    get currentLevel() {
        return this._currentLevel;
    }
    set currentLevel(value) {
        this._currentLevel = value;
        $("#level-selector").val(value);
        this.updateStats();
    }

    get currentMeleeWeapon() {
        return this._currentMeleeWeapon;
    }
    set currentMeleeWeapon(value) {
        this._currentMeleeWeapon = value;
        $("#melee-weapon-selector").val(value);
    }

    get currentRangedWeapon() {
        return this._currentRangedWeapon;;
    }
    set currentRangedWeapon(value) {
        this._currentRangedWeapon = value;
        $("#ranged-weapon-selector").val(value);
    }

    updateStats() {
        for (let [stat, statData] of Object.entries(stats)) {
            let statBase = Math.floor(statData.multiplier * this.currentLevel + statData.base);
            let classBase = Math.floor((classes[this.currentClass][stat] || 1) * statBase);
            let skillBonus = 0;

            this.currentSkills.forEach(key => {
                let skillLevel = this.skillLevels.get(key);

                switch (`${key} | ${stat}`) {
                    case "steelFlesh | hp":
                    case "mightyMuscle | meleeAttack":
                    case "boostedBullets | rangedAttack":
                        skillBonus += classBase * (0.05 + 0.05 * skillLevel);
                        break;

                    case "fortifiedFlesh | hp":
                        skillBonus += classBase * (0.25 + 0.05 * skillLevel);
                        break;

                    case "mindscape | tp":
                    case "highTension | tp":
                    case "knightsSoul | tp":
                        skillBonus += 250 + 250 * skillLevel;
                        break;

                    case "steadyHand | rangedAccuracy":
                    case "unwaveringCourage | meleeAccuracy":
                    case "innerSearch | potential":
                        skillBonus += classBase * (0.1 + 0.02 * skillLevel);
                }
            });

            let finalStats = Math.floor(classBase + skillBonus);
            $(`#stat-${statData.short}`).html(finalStats);
        }
    }

    setSkills() {
        let validSkills = classes[this.currentClass].skills || skills;
        $("#skill-selector").html("");
        $("#skills").html("");
        this.currentSkills.clear();

        for (let skill in validSkills) {
            $('#skill-selector').append(`
                <div class="skill-node no-highlight" id="${skill}">
                    <img src="images/skills/${skills[skill].name}.png">
                    ${skills[skill].name}
                </div>
            `);
        }

        for (let i of range(classes[this.currentClass].skillSlots)) {
            $("#skills").append(`<div class="selected-skill"><img class="skill-icon"></div>`);
        }

        for (let i of range(5)) {
            $(".selected-skill").append(`<div class="skill-level-node"></div>`);
        }

        $("#skills").append(`<input type="submit" id="edit-skills" value="Edit Skills">`);

        $(".skill-node").click(function() {
            simulator.changeSkill($(this).attr("id"));
        });

        $(".skill-level-node").click(function() {
            let nodeID = $(this).parent().attr("id");
            if (!nodeID) return;

            let skillName = nodeID.replace("selected-skill-", "")
            let newLevel = $(this).parent().find(".skill-level-node").index(this) + 1;
            simulator.changeSkillLevel(skillName, newLevel);
        });

        $(".selected-skill").on("wheel", function(event) {
            let nodeID = $(this).attr("id");
            if (!nodeID) return;

            let skillName = nodeID.replace("selected-skill-", "")
            let oldLevel = simulator.skillLevels.get(skillName);
            let newLevel = event.originalEvent.deltaY < 0 ? oldLevel + 1 : oldLevel - 1;
            simulator.changeSkillLevel(skillName, newLevel);
        });

        $("#edit-skills").click(function() {
            $("#skill-layer").removeClass("hidden");
            $("body").append(`<div class="mask"></div>`);

            $(".mask").click(function() {
                $("#skill-layer").addClass("hidden");
                $(".mask").remove();
                $(".skill-node").removeClass("hidden");
                $("#skill-search").val("");
            });
        });
    }

    changeSkill(skillName) {
        let node = $(`#${skillName}`)

        if (this.currentSkills.has(skillName)) {
            node.removeClass("selected");
            this.currentSkills.delete(skillName);
        } else if (this.currentClass == "striker") {
            $(".selected").removeClass("selected");
            this.currentSkills.clear();
            node.addClass("selected");
            this.currentSkills.add(skillName);
        } else if (this.currentSkills.size < classes[this.currentClass].skillSlots) {
            node.addClass("selected");
            this.currentSkills.add(skillName);
        }

        $(".skill-icon").attr("src", "");
        $(".selected-skill").attr("id", "");
        $(".skill-level-node").css("background-color", "");

        let i = 0;
        this.currentSkills.forEach(key => {
            let selectedSkill = $(`.selected-skill:eq(${i})`);
            selectedSkill.attr("id", `selected-skill-${key}`);
            selectedSkill.find(".skill-icon").attr("src", `images/skills/${skills[key].name}.png`);

            let skillLevel = this.skillLevels.get(key);
            selectedSkill.find(".skill-level-node").slice(0, skillLevel).css("background-color", "#0000FF");

            i += 1
        });

        this.updateStats();
    }

    changeSkillLevel(skillName, skillLevel) {
        if (skillLevel > 5 || skillLevel < 1) return;

        let skillLevelNodes = $(`#selected-skill-${skillName} .skill-level-node`);

        skillLevelNodes.css("background-color", "");
        skillLevelNodes.slice(0, skillLevel).css("background-color", "#0000FF");

        this.skillLevels.set(skillName, skillLevel);
        this.updateStats();
    }

    searchSkill(query) {
        let regex = new RegExp(query, "i");
        $(".skill-node").addClass("hidden");

        for (let [key, value] of Object.entries(skills)) {
            if (value.name.search(regex) != -1) {
                $(`#${key}`).removeClass("hidden");
            }
        }
    }
}
