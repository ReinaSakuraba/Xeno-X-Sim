function range(start, stop, step=1) {
    if (stop === undefined) {
        stop = start;
        start = 1;
    }

    var result = [];
    for (var i = start; step > 0 ? i <= stop : i >= stop; i += step) {
        result.push(i);
    }

    return result;
}


$(function() {
    simulator.init();
});

var simulator = {
    get currentClass() {
        return $("#class-selector").val();
    },
    set currentClass(value) {
        $("#class-selector").val(value);
        this.setSkills();
        this.updateStats();
    },

    get currentLevel() {
        return $("#level-selector").val();
    },
    set currentLevel(value) {
        $("#level-selector").val(value);
        this.updateStats();
    },

    get currentMeleeWeapon() {
        return $("#melee-weapon-selector").val();
    },
    set currentMeleeWeapon(value) {
        $("#melee-weapon-selector").val(value);
    },

    get currentRangedWeapon() {
        return $("#ranged-weapon-selector").val();
    },
    set currentRangedWeapon(value) {
        $("#ranged-weapon-selector").val(value);
    },

    currentSkills: new Set(),
    skillLevels: new Map(),

    init: function() {
        $("#class-selector").html("");
        $("#level-selector").html("");
        $("#melee-weapon-selector").html("");
        $("#ranged-weapon-selector").html("");

        Object.entries(classes).forEach(([key, value]) => {
            if (value.name == "Elma") {
                $("#class-selector").append("<option disabled>&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;</option>");
            }
            $("#class-selector").append(`<option value="${key}">${value.name}</option>`);
        });

        Object.keys(skills).forEach(key => {
            this.skillLevels.set(key, 1);
        });

        for (var i of range(60)) {
            $("#level-selector").append(`<option value"${i}">${i}</option>`);
        }

        Object.entries(weapons).forEach(([key, value]) => {
            $(`#${value.type.toLowerCase()}-weapon-selector`).append(`<option value="${key}">${value.name}</option>`);
        });

        this.currentClass = "drifter";
        this.currentLevel = 60;
        this.currentMeleeWeapon = "longsword";
        this.currentRangedWeapon = "assaultRifle";
    },

    updateStats: function() {
        Object.entries(stats).forEach(([stat, value]) => {
            var statBase = Math.floor(value.multiplier * this.currentLevel + value.base);
            var classBase = Math.floor((classes[this.currentClass][stat] || 1) * statBase);
            var skillBonus = 0;

            this.currentSkills.forEach(key => {
                var skillLevel = this.skillLevels.get(key);

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

            var finalStats = Math.floor(classBase + skillBonus);
            $(`#stat-${value.short}`).html(finalStats);
        });
    },

    setSkills: function() {
        var validSkills = classes[this.currentClass].skills || skills;
        $("#skill-selector").html("");
        $("#skills").html("");
        this.currentSkills.clear();

        Object.entries(validSkills).forEach(([key, value]) => {
            $('#skill-selector').append(this.createSkillNode(key, value, this.currentClass));
        });

        for (var i of range(classes[this.currentClass].skillSlots)) {
            $("#skills").append(`<div class="selected-skill"><img class="skill-icon"></div>`);
        }

        for (var i of range(5)) {
            $(".selected-skill").append(`<div class="skill-level-node"></div>`);
        }

        $("#skills").append(`<input type="submit" id="edit-skills" value="Edit Skills">`);

        $(".skill-node").click(function() {
            simulator.changeSkill($(this).attr("id"));
        });

        $(".skill-level-node").click(function() {
            var nodeID = $(this).parent().attr("id");
            if (!nodeID) return;

            var skillName = nodeID.replace("selected-skill-", "")
            var newLevel = $(this).parent().find(".skill-level-node").index(this) + 1;
            simulator.changeSkillLevel(skillName, newLevel);
        });

        $(".selected-skill").on("wheel", function(event) {
            var nodeID = $(this).attr("id");
            if (!nodeID) return;

            var skillName = nodeID.replace("selected-skill-", "")
            var oldLevel = simulator.skillLevels.get(skillName);
            var newLevel = event.originalEvent.deltaY < 0 ? oldLevel + 1 : oldLevel - 1;
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
    },

    changeSkill: function(skillName) {
        var node = $(`#${skillName}`)

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

        var i = 0;
        this.currentSkills.forEach(key => {
            var selectedSkill = $(`.selected-skill:eq(${i})`);
            selectedSkill.attr("id", `selected-skill-${key}`);
            selectedSkill.find(".skill-icon").attr("src", `images/skills/${skills[key].name}.png`);

            var skillLevel = this.skillLevels.get(key);
            selectedSkill.find(".skill-level-node").slice(0, skillLevel).css("background-color", "#0000FF");

            i += 1
        });

        this.updateStats();
    },

    changeSkillLevel: function(skillName, skillLevel) {
        if (skillLevel > 5 || skillLevel < 1) return;

        var skillLevelNodes = $(`#selected-skill-${skillName} .skill-level-node`);

        skillLevelNodes.css("background-color", "");
        skillLevelNodes.slice(0, skillLevel).css("background-color", "#0000FF");

        this.skillLevels.set(skillName, skillLevel);
        this.updateStats();
    },

    createSkillNode: function(skill, skillData, className) {
        var node = `
            <div class="skill-node no-highlight" id="${skill}">
                <div class="top">
                    <img src="images/skills/${skills[skill].name}.png">
                    ${skills[skill].name}
                    <br />
                    Learned: ${skillData.class || classes[className].class + " " + skillData}
                </div>
                Description: ${skills[skill].effect}
            </div>
        `
        return node;
    },

    searchSkill: function(query) {
        regex = new RegExp(query, "i");
        $(".skill-node").addClass("hidden");

        for (var [key, value] of Object.entries(skills)) {
            if (value.name.search(regex) != -1) {
                $(`#${key}`).removeClass("hidden");
            }
        }
    }
}
