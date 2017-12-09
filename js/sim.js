function range(start, stop, step) {
    if (typeof(stop) == "undefined") {
        stop = start;
        start = 0;
    }

    if (typeof(step) == "undefined") {
        step = 1;
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

        for (var i of range(1, 60)) {
            $("#level-selector").append('<option value"' + i + '">' + i + ' </option>');
        }

        var frag = "";
        for (var i of range(1, 5)) {
            frag += '<option value="' + i +'">' + i + '</option>';
        }

        for (var i of range(1, 5)) {
            $("#skill-" + i + "-level").html(frag);
        }

        $("#class-selector").val(this.currentClass);
        $("#level-selector").val(this.currentLevel);
        this.setStats(this.currentClass, this.currentLevel);
        this.setSkills(this.currentClass);
    },

    setStats: function(className, level) {
        for (var stat in stats) {
            if (stats.hasOwnProperty(stat)) {
                var base = Math.floor(stats[stat].multiplier * level + stats[stat].base);
                var final = (stat != "tp" ? Math.floor(classes[className][stat] * base) : base);
                $("#stat-" + stats[stat].short).html(final);
            }
        }
    },

    setSkills: function(className) {
        var validSkills = classes[className].skills || skills;
        for (var i of range(1, 5)) {
            $("#skill-" + i).html('<option value="None">None</option>');
            for (var skill in validSkills) {
                $("#skill-" + i).append('<option value="' + skill + '">' + skills[skill].name + '</option>');
            }
        }
    },

    changeClass: function(className) {
        this.currentClass = className;
        this.setStats(this.currentClass, this.currentLevel);
        this.setSkills(this.currentClass);
    },

    changeLevel: function(level) {
        this.currentLevel = level;
        this.setStats(this.currentClass, this.currentLevel);
    }
}
