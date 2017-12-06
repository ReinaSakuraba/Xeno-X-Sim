$(document).ready(function() {
    simulator.init();
});


var simulator = {
    currentClass: "drifter",
    currentLevel: 60,

    init: function() {
        var self = this;

        $("#class-selector").html("");
        for (var c in classes) {
            if (classes.hasOwnProperty(c)) {
                var name = classes[c].name;
                if (name == "Elma") {
                    $("#class-selector").append("<option disabled>&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;</option>");
                }
                $("#class-selector").append('<option value="' + c + '">' + name + ' </option>');
            }
        }

        $("#class-selector").change(function() {
            self.changeClass($("#class-selector").val());
        });

        this.setStats(this.currentClass, this.currentLevel);

        $("#level-selector").change(function() {
            self.changeLevel($("#level-selector").val());
        });
    },

    setStats: function(c, level) {
        var base;
        var thing;
        var stats = ["hp", "rangedAccuracy", "meleeAccuracy", "rangedAttack", "meleeAttack", "evasion", "potential"];
        for (var stat of stats) {
            switch (stat) {
                case "hp":
                    base = 99.48 * level + 150.52;
                    thing = "hp";
                    break;
                case "rangedAccuracy":
                    base = 2.593 * level + 103.407;
                    thing = "racc";
                    break;
                case "meleeAccuracy":
                    base = 2.72 * level + 101.28;
                    thing = "macc";
                    break;
                case "rangedAttack":
                    base = 0.67 * level + 13.33;
                    thing = "ratk";
                    break;
                case "meleeAttack":
                    base = 1.035 * level + 17.01;
                    thing = "matk";
                    break;
                case "evasion":
                    base = 1.735 * level + 8.265;
                    thing = "eva";
                    break;
                case "potential":
                    base = 0.92 * level + 9.08;
                    thing = "pot";
            }

            var final = Math.floor(classes[c][stat] * Math.floor(base));
            $("#stat-" + thing).html(final);
        }
        $("#stat-tp").html(3000);
    },

    changeClass: function(className) {
        this.currentClass = className;
        this.setStats(this.currentClass, this.currentLevel);
    },

    changeLevel: function(level) {
        this.currentLevel = level;
        this.setStats(this.currentClass, this.currentLevel);
    }
}
