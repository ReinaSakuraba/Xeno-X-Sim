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
        $(".skill-level-selector").html("");

        Object.entries(classes).forEach(([key, value]) => {
            if (value.name == "Elma") {
                $("#class-selector").append("<option disabled>&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;</option>");
            }
            $("#class-selector").append(`<option value="${key}">${value.name}</option>`);
        });

        for (var i of range(1, 60)) {
            $("#level-selector").append(`<option value"${i}">${i}</option>`);
        }

        for (var i of range(1, 5)) {
            $(".skill-level-selector").append(`<option value"${i}">${i}</option>`);
        }

        $("#class-selector").val(this.currentClass);
        $("#level-selector").val(this.currentLevel);
        this.setStats(this.currentClass, this.currentLevel);
        this.setSkills(this.currentClass);
    },

    setStats: function(className, level) {
        Object.entries(stats).forEach(([key, value]) => {
            var base = Math.floor(value.multiplier * level + value.base);
            var final = (key != "tp" ? Math.floor(classes[className][key] * base) : base);
            $(`#stat-${value.short}`).html(final);
        });
    },

    setSkills: function(className) {
        var validSkills = classes[className].skills || skills;
        $(".skill-selector").html('<option value="None">None</option>');
        Object.entries(validSkills).forEach(([key, value]) => {
            $(".skill-selector").append(`<option value="${key}">${value.name}</option>`);
        });
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
