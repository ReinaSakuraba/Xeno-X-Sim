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

    $(".skill-selector").change(function() {
        simulator.changeSkill($(this).val(), $(this).attr("id").slice(-1));
    });

    $(".skill-level-selector").change(function() {
        simulator.changeSkillLevel($(this).val(), $(this).attr("id").slice(-1));
    });
});


var simulator = {
    currentClass: "drifter",
    currentLevel: 60,
    currentSkills: new Map(),
    skillLevels: new Map(),

    init: function() {
        $("#class-selector").html("");
        $("#level-selector").html("");
        $(".skill-level-selector").html("");

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

        for (var i of range(5)) {
            $(".skill-level-selector").append(`<option value"${i}">${i}</option>`);
        }

        $("#class-selector").val(this.currentClass);
        $("#level-selector").val(this.currentLevel);
        this.setStats(this.currentClass, this.currentLevel);
        this.setSkills(this.currentClass);
    },

    setStats: function(className, level) {
        Object.entries(stats).forEach(([stat, value]) => {
            var statBase = Math.floor(value.multiplier * level + value.base);
            var classBase = Math.floor((classes[className][stat] || 1) * statBase);
            var skillBonus = 0;
            this.currentSkills.forEach((value, key) => {
                var skillLevel = this.skillLevels.get(value);
                switch (`${value} | ${stat}`) {
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
        $(".skill-selector").html('<option value="None">None</option>');
        $(".skill-selector,.skill-level-selector,th").removeAttr("disabled");
        this.currentSkills.clear();
        $(".skill-level-selector").val("1");
        var ignored = range(classes[className].skillSlots, 5).map((v, i) => `.skill-${v + 1}`).join(",");
        $(ignored).attr("disabled", "disabled");
        Object.entries(validSkills).forEach(([key, value]) => {
            $(`.skill-selector:not(${ignored})`).append(`<option value="${key}">${skills[key].name}</option>`);
            $('#skills').append(this.createSkillNode(key, value, className));
        });
    },

    changeClass: function(className) {
        this.currentClass = className;
        this.setSkills(this.currentClass);
        this.setStats(this.currentClass, this.currentLevel);
    },

    changeLevel: function(level) {
        this.currentLevel = level;
        this.setStats(this.currentClass, this.currentLevel);
    },

    changeSkill: function(skillName, skillPosition) {
        $(`.skill-selector option[value=${this.currentSkills.get(skillPosition)}]`).removeAttr("disabled");
        this.currentSkills.set(skillPosition, skillName);
        if (skillName != "None") {
            $(`.skill-selector:not(#skill-selector-${skillPosition}) option[value=${skillName}]`).attr("disabled", "disabled");
        }
        this.setStats(this.currentClass, this.currentLevel);
    },

    changeSkillLevel: function(skillLevel, skillPosition) {
        var skillName = this.currentSkills.get(skillPosition);
        this.skillLevels.set(skillName, skillLevel);
        this.setStats(this.currentClass, this.currentLevel);
    },

    createSkillNode: function(skill, skillData, className) {
        var node = `
            <div class="skill-node">
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
