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

    init: function() {
        $("#class-selector").html("");
        $("#level-selector").html("");

        for (var c in classes) {
            if (classes.hasOwnProperty(c)) {
                var name = classes[c].name;
                if (name == "Elma") {
                    $("#class-selector").append("<option disabled>&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;</option>");
                }
                $("#class-selector").append('<option value="' + c + '">' + name + ' </option>');
            }
        }

        var levelRange = Array.from({length: 60}, (v, i) => i + 1);
        for (var i of levelRange) {
            $("#level-selector").append('<option value"' + i + '">' + i + ' </option>');
        }

        $("#class-selector").val(this.currentClass);
        $("#level-selector").val(this.currentLevel);
        this.setStats(this.currentClass, this.currentLevel);
    },

    setStats: function(className, level) {
        for(var stat in stats) {
            if (stats.hasOwnProperty(stat)) {
                var base = Math.floor(stats[stat].multiplier * level + stats[stat].multiplier);
                var final = Math.floor(classes[className][stat] * base);
                $("#stat-" + stats[stat].short).html(final);
            }
        }
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
