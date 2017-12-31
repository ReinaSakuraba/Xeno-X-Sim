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
    $("#class-selector").change(function() {
        simulator.changeClass($(this).val());
    });

    $("#level-selector").change(function() {
        simulator.changeLevel($(this).val());
    });
});


var simulator = {
    currentClass: "drifter",
    currentLevel: 60,
    currentSkills: new Set(),
    skillLevels: new Map(),

    init: function() {
        $("#class-selector").html("");
        $("#level-selector").html("");

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

        $("#class-selector").val(this.currentClass);
        $("#level-selector").val(this.currentLevel);
        this.updateStats();
        this.setSkills(this.currentClass);
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

    setSkills: function(className) {
        var validSkills = classes[className].skills || skills;
        $("#skill-selector").html("");
        $("#skills").html("");
        $(".skill-level-node").attr("style", "");
        this.currentSkills.clear();
        Object.entries(validSkills).forEach(([key, value]) => {
            $('#skill-selector').append(this.createSkillNode(key, value, className));
        });

        $(".skill-node").click(function() {
            simulator.changeSkill($(this).attr("id"));
        });

        for (var i of range(classes[this.currentClass].skillSlots)) {
            $("#skills").append(`<div class="skill-levels"><img height="80" width="80" border="1px solid black"></div>`);
        }

        for (var i of range(5)) {
            $(".skill-levels").append(`<div class="skill-level-node skill-level-node-${i}"></div>`);
        }

        $(".skill-level-node").click(function() {
            var newLevel = $(this).parent().find(".skill-level-node").index(this) + 1;
            var skillName = $(this).parent().find("img").attr("class");
            simulator.skillLevels.set(skillName, newLevel);
            $(this).parent().find("div").attr("style", "");
            for (i in range(newLevel)) {
                $($(this).parent().find("div")[i]).attr("style", "background-color: #0000FF;");
            }
            simulator.updateStats();
        });

        $("#skills").append(`<input type="submit" value="Edit Skills">`);
        $("#skills input").click(function() {
            $("#skill-layer").removeClass("hidden");
            $("body").append(`<div class="mask"></div>`);
            $(".mask").click(function() {
                $("#skill-layer").addClass("hidden");
                $(".mask").remove();
            });
        });
    },

    changeClass: function(className) {
        this.currentClass = className;
        this.setSkills(this.currentClass);
        this.updateStats();
    },

    changeLevel: function(level) {
        this.currentLevel = level;
        this.updateStats();
    },

    changeSkill: function(skillName) {
        var node = $(`#${skillName}`)
        if (this.currentSkills.has(skillName)) {
            node.removeClass("selected");
            this.currentSkills.delete(skillName);
        } else if (this.currentSkills.size < classes[this.currentClass].skillSlots) {
            node.addClass("selected");
            this.currentSkills.add(skillName);
        }

        $("#skills img").attr("src", "");
        $("#skills img").attr("class", "");
        $(".skill-level-node").attr("style", "");
        var i = 0;
        this.currentSkills.forEach(key => {
            $("#skills img")[i].src = `images/skills/${skills[key].name}.png`;
            $($("#skills img")[i]).addClass(key);
            for (var ii of range(this.skillLevels.get(key))) {
                $($($(`.skill-levels`)[i]).find(".skill-level-node")[ii-1]).attr("style", "background-color: #0000FF;");
            }
            i += 1
        });

        this.updateStats();
    },

    changeSkillLevel: function(skillName, skillLevel) {
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
    }
}
