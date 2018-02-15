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

document.addEventListener("DOMContentLoaded", () => {
  simulator = new Simulator();

  let mask = document.createElement("div");
  let skillLayer = document.getElementById("skill-layer");
  let editSkills = document.getElementById("edit-skills");
  mask.classList.add("mask");

  editSkills.addEventListener("click", () => {
    skillLayer.classList.remove("hidden");
    document.body.appendChild(mask);
  });

  mask.addEventListener("click", () => {
    skillLayer.classList.add("hidden");

    let skillNodes = document.getElementsByClassName("skill-node");
    for (let node of skillNodes) {
      node.classList.remove("hidden");
    }

    document.getElementById("skill-search").value = "";
    document.body.removeChild(mask);
  });

  document.addEventListener("click", (event) => {
    let target = event.target;
    if (target.tagName == "IMG") {
      target = target.parentElement;
    }

    if (target.classList.contains("skill-node")) {
      simulator.changeSkill(target.id);
    }
  });

  document.getElementById("clipboard").addEventListener("click", () => {
    let textArea = document.createElement("textarea");
    let text = "";

    text += `Class: ${classes[simulator.currentClass].name}\n`
    text += `Level: ${simulator.currentLevel}\n`
    if (simulator.currentSkills.size != 0) {
      text += `Skills:\n  `
      text += [...simulator.currentSkills].map(skill => `${skills[skill].name} Lv. ${simulator.skillLevels.get(skill)}`).join('\n  ');
    }

    textArea.textContent = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
    }
    catch(e) {}
    document.body.removeChild(textArea);
  });
});

class Simulator {
  constructor() {
    this.currentSkills = new Set();
    this.skillLevels = new Map();

    let levelSelect = document.getElementById("level-selector");
    while (levelSelect.lastChild) {levelSelect.removeChild(levelSelect.lastChild)};

    for (let i of range(60)) {
      let option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      levelSelect.appendChild(option);
    }

    for (let skill in skills) {
      this.skillLevels.set(skill, 1);
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
    document.getElementById("class-selector").value = value;
    this.setSkills();
    this.updateStats();
  }

  get currentLevel() {
    return this._currentLevel;
  }
  set currentLevel(value) {
    this._currentLevel = value;
    document.getElementById("level-selector").value = value;
    this.updateStats();
  }

  get currentMeleeWeapon() {
    return this._currentMeleeWeapon;
  }
  set currentMeleeWeapon(value) {
    this._currentMeleeWeapon = value;
    document.getElementById("melee-weapon-selector").value = value;
  }

  get currentRangedWeapon() {
    return this._currentRangedWeapon;;
  }
  set currentRangedWeapon(value) {
    this._currentRangedWeapon = value;
    document.getElementById("ranged-weapon-selector").value = value;
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
      document.getElementById(`stat-${statData.short}`).innerText = finalStats;
    }
  }

  setSkills() {
    let validSkills = classes[this.currentClass].skills || skills;
    let skillSelector = document.getElementById("skill-selector");
    let skillIcons = document.getElementsByClassName("skill-palette-icon");

    while (skillSelector.lastChild) {skillSelector.removeChild(skillSelector.lastChild)};
    this.currentSkills.clear();

    for (let node of skillIcons) {
      node.style.backgroundImage = "";
    }

    for (let skill in validSkills) {
      let node = document.createElement("div");
      node.id = skill;
      node.classList.add("skill-node");
      node.classList.add("no-highlight");

      let img = document.createElement("img");
      img.src = `images/skills/${skills[skill].name}.png`;
      node.appendChild(img);

      let text = document.createTextNode(skills[skill].name);
      node.appendChild(text);

      skillSelector.appendChild(node);
    }

    let skillSlots = classes[this.currentClass].skillSlots;
    document.getElementById("skill-palette").style.backgroundPosition = `0px ${(skillSlots - 1) * -74}px`;
  }

  changeSkill(skillName) {
    let node = document.getElementById(skillName);

    if (this.currentSkills.has(skillName)) {
      node.classList.remove("selected");
      this.currentSkills.delete(skillName);
    } else if (this.currentClass == "striker") {
      document.querySelector(".selected").classlist.remove("selected");
      this.currentSkills.clear();
      node.classList.add("selected");
      this.currentSkills.add(skillName);
    } else if (this.currentSkills.size < classes[this.currentClass].skillSlots) {
      node.classList.add("selected");
      this.currentSkills.add(skillName);
    }

    let skillIcons = document.getElementsByClassName("skill-palette-icon");
    for (let node of skillIcons) {
      node.style.backgroundImage = "";
    }

    let i = 0;
    this.currentSkills.forEach(key => {
      skillIcons[i].style.backgroundImage = `url("images/skills/${skills[key].name}.png")`;
      i += 1
    });

    this.updateStats();
  }

  searchSkill(query) {
    let regex = new RegExp(query, "i");

    let skillNodes = document.getElementsByClassName("skill-node");
    for (let node of skillNodes) {
      node.classList.add("hidden");
    }

    for (let [key, value] of Object.entries(skills)) {
      if (value.name.search(regex) != -1) {
        document.getElementById(key).classList.remove("hidden");
      }
    }
  }
}
