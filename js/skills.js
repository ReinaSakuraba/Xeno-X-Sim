var skills = {
    steelFlesh: {
        name: "Steel Flesh",
        class: "Striker 2",
        effect: "Boosts maximum HP by [10/15/20/25/30]%."
    },
    unwaveringCourage: {
        name: "Unwavering Courage",
        class: "Striker 3",
        effect: "Boosts melee accuracy by [12/14/16/18/20]%."
    },
    flameTrigger: {
        name: "Flame Trigger",
        class: "Striker 5",
        effect: "Boosts Blaze Damage by [12/14/16/18/20]%."
    },
    mightyMuscle: {
        name: "Mighty Muscle",
        class: "Striker 7",
        effect: "Boosts melee attack by [10/15/20/25/30]%."
    },
    combatPresence: {
        name: "Combat Presence",
        class: "Striker 9",
        effect: "Extends Taunt effects by [10/12/14/16/18] seconds."
    },
    dismantler: {
        name: "Dismantler",
        class: "Striker 10",
        effect: "Grants a [25/30/35/40/45]% chance of dealing [50/75/100/125/150]% more damage to appendage with Melee Arts."
    },
    cqcMaster: {
        name: "CQC Master",
        class: "Samurai Gunner 2",
        effect: "Boosts critical chance by [30/35/40/45/50]% when triggering a melee combo."
    },
    autoMeleeBoost: {
        name: "Auto Melee Boost",
        class: "Samurai Gunner 3",
        effect: "Boosts melee auto-attack damage by [30/35/40/45/50]%."
    },
    ironKnuckle: {
        name: "Iron Knuckle",
        class: "Samurai Gunner 4",
        effect: "Boosts physical damage by [30/35/40/45/50]%."
    },
    healingAura: {
        name: "Healing Aura",
        class: "Samurai Gunner 5",
        effect: "Recovers [12/14/16/18/20]% of your HP when you use an aura."
    },
    weaponGuard: {
        name: "Weapon Guard",
        class: "Samurai Gunner 6",
        effect: "Boosts physical resistance by [12/14/16/18/20] when wielding a melee weapon."
    },
    blazingAuto: {
        name: "Blazing Auto",
        class: "Samurai Gunner 7",
        effect: "Grants a [10/12/14/16/18]% chance to inflict Blaze [I/I/II/II/III] when melee auto-attacking."
    },
    theroidSlayer: {
        name: "Theroid Slayer",
        class: "Samurai Gunner 9",
        effect: "Boosts damage to theroid enemies by [30/35/40/45/50]%."
    },
    yamatoSpirit: {
        name: "Yamato Spirit",
        class: "Samurai Gunner 10",
        effect: "Boosts TP by [20/30/40/50/60] when using a Melee Art; double that if you have an aura active."
    },
    conflagrantEdge: {
        name: "Conflagrant Edge",
        class: "Duelist 2",
        effect: "Boosts thermal damage by [10/20/30/40/50]%."
    },
    aggroBoost: {
        name: "Aggro Boost",
        class: "Duelist 3",
        effect: "Boosts damage to taunted enemies by [20/40/60/80/100]%."
    },
    fortifiedFlesh: {
        name: "Fortified Flesh",
        class: "Duelist 5",
        effect: "Boosts maximum HP by[30/35/40/45/50]%."
    },
    grandProcession: {
        name: "Grand Procession",
        class: "Duelist 7",
        effect: "Boosts entire party's TP by [300/350/400/450/500] when activating Overdrive."
    },
    thermalShield: {
        name: "Thermal Shield",
        class: "Shield Trooper 2",
        effect: "Boosts thermal resistance by [12/14/16/18/20] when wielding a melee weapon."
    },
    toppleToppler: {
        name: "Topple Toppler",
        class: "Shield Trooper 3",
        effect: "Reduces enemy Topple resistance by [10/15/20/25/30]%."
    },
    shieldScreen: {
        name: "Shield Screen",
        class: "Shield Trooper 4",
        effect: "Reduces damage by [10/15/20/25/30]% when wielding a shield."
    },
    risingRenewal: {
        name: "Rising Renewal",
        class: "Shield Trooper 5",
        effect: "Boosts HP recovery by [10/15/20/25/30]% when revived."
    },
    longTopple: {
        name: "Long Topple",
        class: "Shield Trooper 6",
        effect: "Extends Topple effects by [1/2/3/4/5] second(s)"
    },
    traumaTension: {
        name: "Trauma Tension",
        class: "Shield Trooper 8",
        effect: "Grants a 15% chance of receiving [50/75/100/125/150] TP when taking damage."
    },
    dirtyFighter: {
        name: "Dirty Fighter",
        class: "Shield Trooper 9",
        effect: "Boosts Melee Art damage by [20/40/60/80/100]% to enemies inflicted with Topple."
    },
    standStrong: {
        name: "Stand Strong",
        class: "Shield Trooper 10",
        effect: "Boosts resistance to Stagger, Topple, Knockback, and Launch by [20/40/60/80/100] when wielding a shield."
    },
    machineGunner: {
        name: "Machine Gunner",
        class: "Bastion Warrior 2",
        effect: "Boosts ranged damage by [20/40/60/80/100]% when fighting two or more enemies."
    },
    heatseeker: {
        name: "Heatseeker",
        class: "Bastion Warrior 5",
        effect: "Boosts critical chance by [50/60/70/80/100]% when attacking enemies inflicted with Blaze."
    },
    doubleSpike: {
        name: "Double Spike",
        class: "Bastion Warrior 9",
        effect: "Boosts spike damage by [20/40/60/80/100]%."
    },
    doubleReflect: {
        name: "Double Reflect",
        class: "Bastion Warrior 10",
        effect: "Boosts reflect damage by [20/40/60/80/100]%."
    },
    agileGunslinger: {
        name: "Agile Gunslinger",
        class: "Commando 2",
        effect: "Boosts evasion by [12/14/16/18/20]% when wielding a ranged weapon."
    },
    steadyHand: {
        name: "Steady Hand",
        class: "Commando 3",
        effect: "Boosts ranged accuracy by [12/14/16/18/20]%."
    },
    boostedBullets: {
        name: "Boosted Bullets",
        class: "Commando 4",
        effect: "Boosts ranged attack by [10/15/20/25/30]%."
    },
    backgroundNoise: {
        name: "Background Noise",
        class: "Commando 5",
        effect: "Boosts damage by [25/50/75/100/125]% when using Melee Arts from behind."
    },
    comboGunner: {
        name: "Combo Gunner",
        class: "Commando 7",
        effect: "Boosts damage by [25/50/75/100/125]% when triggering ranged combos."
    },
    thirdRye: {
        name: "Third Eye",
        class: "Commando 8",
        effect: "Boosts TP by [20/30/40/50/60] when using a Ranged Art; double that if you have an aura active."
    },
    masterEdge: {
        name: "Master Edge",
        class: "Commando 9",
        effect: "Boosts critical chance by [5/6/7/8/10]% when wielding a melee weapon."
    },
    auraBurst: {
        name: "Aura Burst",
        class: "Commando 10",
        effect: "Extends Aura effects by [4/5/6/7/8] seconds"
    },
    deepFang: {
        name: "Deep Fang",
        class: "Winged Viper 2",
        effect: "Reduces enemy debuff resistance by [10/15/20/25/30]% when attacking from the side."
    },
    mortalEnemy: {
        name: "Mortal Enemy",
        class: "Winged Viper 3",
        effect: "Boosts damage to humanoid enemies by [30/35/40/45/50]%."
    },
    triggerHappy: {
        name: "Trigger Happy",
        class: "Winged Viper 5",
        effect: "Reduces an Art's cooldown by [30/35/40/45/50]% when triggering a ranged combo."
    },
    lifeline: {
        name: "Lifeline",
        class: "Winged Viper 7",
        effect: "Recovers [10/15/20/25/30]% of your HP when HP is at 50% or less and you use an aura."
    },
    mindscape: {
        name: "Mindscape",
        class: "Winged Viper 9",
        effect: "Boosts maximum TP by [500/750/1000/1250/1500]."
    },
    hellhound: {
        name: "Hellhound",
        class: "Winged Viper 10",
        effect: "Extends Overdrive duration by [5/6/7/8/10] seconds."
    },
    nightVision: {
        name: "Night Vision",
        class: "Full Metal Jaguar 2",
        effect: "Boosts damage by [20/40/60/80/100]% during the nighttime."
    },
    zeroLapse: {
        name: "Zero Lapse",
        class: "Full Metal Jaguar 3",
        effect: "Reduces cooldown for melee auto-attacks by [30/35/40/45/50]%."
    },
    redZone: {
        name: "Red Zone",
        class: "Full Metal Jaguar 5",
        effect: "Boosts critical chance by [20/25/30/35/40]% during Overdrive."
    },
    crisisCatalyst: {
        name: "Crisis Catalyst",
        class: "Full Metal Jaguar 7",
        effect: "Boosts critical chance by [10/15/20/25/30]% when HP is 50% or less. Effect doubles when HP is 25% or less."
    },
    bloodCarnival: {
        name: "Blood Carnival",
        class: "Full Metal Jaguar 9",
        effect: "Grants a [5/10/15/20/25]% chance of converting [4/6/8/10/12]% of damage dealt to HP when melee auto-attacking."
    },
    phantomCounter: {
        name: "Phantom Counter",
        class: "Full Metal Jaguar 10",
        effect: "Boosts your Overdrive count by [4/6/8/10/12] when activating Overdrive."
    },
    killshot: {
        name: "Killshot",
        class: "Partisan Eagle 2",
        effect: "Boosts critical chance for ranged auto-attacks by [5/6/7/8/10]%."
    },
    electricGuard: {
        name: "Electric Guard",
        class: "Partisan Eagle 3",
        effect: "Boosts electric resistance by [12/14/16/18/20] when wielding a melee weapon."
    },
    electricBoost: {
        name: "Electric Boost",
        class: "Partisan Eagle 5",
        effect: "Boosts electric damage by [30/35/40/45/50]%."
    },
    knockNShock: {
        name: "Knock 'n' Shock",
        class: "Partisan Eagle 7",
        effect: "Grants a [10/12/14/16/18]% chance of inflicting Shock [I/I/II/II/III] when using Melee Arts."
    },
    fleetFeet: {
        name: "Fleet Feet",
        class: "Partisan Eagle 9",
        effect: "Boosts evasion by [10/15/20/25/30]% when wielding a melee weapon."
    },
    piscinoidSlayer: {
        name: "Piscinoid Slayer",
        class: "Partisan Eagle 10",
        effect: "Boosts damage to piscinoid enemies by [30/35/40/45/50]%."
    },
    longShot: {
        name: "Long Shot",
        class: "Astral Crusader 2",
        effect: "Boosts ranged weapon range by [5/10/15/20/25]m."
    },
    unstoppable: {
        name: "Unstoppable",
        class: "Astral Crusader 3",
        effect: "Boosts resistances to Stagger, Topple, Knockback, and Launch by [20/40/60/80/100] when sprinting."
    },
    quickReload: {
        name: "Quick Reload",
        class: "Astral Crusader 5",
        effect: "Reduces cooldown for ranged auto-attacks by [30/35/40/45/50]%."
    },
    conductiveStrike: {
        name: "Conductive Strike",
        class: "Astral Crusader 7",
        effect: "Boosts electric damage by [200/225/250/275/300]% to enemies inflicted with Shock."
    },
    electricFlesh: {
        name: "Electric Flesh",
        class: "Astral Crusader 9",
        effect: "Grants a [10/15/20/25/30]% chance of dealing electric spike damage when taking a hit."
    },
    tpOverdrive: {
        name: "TP Overdrive",
        class: "Astral Crusader 10",
        effect: "Boosts TP by [100/110/120/130/150] when using an Art while in Overdrive."
    },
    innerSearch: {
        name: "Inner Search",
        class: "Enforcer 2",
        effect: "Boosts potential by [12/14/16/18/20]%."
    },
    beamBoost: {
        name: "Beam Boost",
        class: "Enforcer 4",
        effect: "Boosts beam damage by [30/35/40/45/50]%."
    },
    beamGuard: {
        name: "Beam Guard",
        class: "Enforcer 6",
        effect: "Boosts beam resistance by [12/14/16/18/20] when wielding a ranged weapon."
    },
    buffHeal: {
        name: "Buff Heal",
        class: "Enforcer 8",
        effect: "Recovers [100/200/300/400/500] HP when receiving a buff."
    },
    healingTouch: {
        name: "Healing Touch",
        class: "Enforcer 9",
        effect: "Boosts the HP recovery of party members you revive by [30/35/40/45/50]%."
    },
    highTension: {
        name: "High Tension",
        class: "Enforcer 10",
        effect: "Boosts maximum TP by [500/750/1000/1250/1500]."
    },
    beautySleep: {
        name: "Beauty Sleep",
        class: "Psycorruptor 2",
        effect: "Extends Sleep effects by [10/12/14/16/18] seconds."
    },
    brainWall: {
        name: "Brain Wall",
        class: "Psycorruptor 3",
        effect: "Boosts resistance to Sleep, Control, and Slow Arts by [20/40/60/80/100] when you have an aura active."
    },
    gentleApproach: {
        name: "Gentle Approach",
        class: "Psycorruptor 4",
        effect: "Grants a [50/60/70/80/100]% chance of not waking up a sleeping enemy when auto-attacking."
    },
    kingsDecree: {
        name: "King's Decree",
        class: "Psycorruptor 5",
        effect: "Reduces enemy Control resistance by [10/15/20/25/30]% and raises debuff tier by 1."
    },
    extraArmor: {
        name: "Extra Armor",
        class: "Psycorruptor 6",
        effect: "Boosts Barrier's damage absorbtion by [3/6/9/12/15]%."
    },
    featherTouch: {
        name: "Feather Touch",
        class: "Psycorruptor 8",
        effect: "Grants a [80/85/90/95/100]% chance of not waking a sleeping enemy when attacking with an Art."
    },
    unpleasantDream: {
        name: "Unpleasant Dream",
        class: "Psycorruptor 9",
        effect: "Boosts damage to sleeping enemies by [50/75/100/125/150]%."
    },
    coreCrusher: {
        name: "Core Crusher",
        class: "Psycorruptor 10",
        effect: "Negates appendage damage from your Ether attacks, but boosts primary damage by [50/75/100/125/150]%."
    },
    etherGuard: {
        name: "Ether Guard",
        class: "Mastermind 1",
        effect: "Boosts ether resistance by [12/14/16/18/20] when wielding a ranged weapon."
    },
    gravityBoost: {
        name: "Gravity Boost",
        class: "Mastermind 3",
        effect: "Boosts gravity damage by [10/20/30/40/50]%."
    },
    wellWeathered: {
        name: "Well-Weathered",
        class: "Mastermind 4",
        effect: "Boosts TP by [200/225/250/275/300] when taking weather damage."
    },
    appendageErosion: {
        name: "Appendage Erosion",
        class: "Mastermind 5",
        effect: "Boosts appendage damage by [10/20/30/40/50]% for every debuff on the enemy."
    },
    resistantFlesh: {
        name: "Resistant Flesh",
        class: "Mastermind 6",
        effect: "Boosts resistance to all debuffs by [12/15/18/21/24]%."
    },
    tacticalAnalyst: {
        name: "Tactical Analyst",
        class: "Mastermind 7",
        effect: "Reduces enemy debuff resistance by [12/15/18/21/24]% when landing an attack."
    },
    kingsBoon: {
        name: "King's Boon",
        class: "Mastermind 9",
        effect: "Grants All Abilities Up [I/II/III/IV/V] to enemies under your Control."
    },
    secondaryAccelerator: {
        name: "Secondary Accelerator",
        class: "Mastermind 10",
        effect: "Reduces secondary cooldown by [10/20/30/40/50]%."
    },
    etherBoost: {
        name: "Ether Boost",
        class: "Blast Fencer 1",
        effect: "Boosts ether damage by [30/35/40/45/50]%."
    },
    mechanoidSlayer: {
        name: "Mechanoid Slayer",
        class: "Blast Fencer 3",
        effect: "Boosts damage to mechanoid enemies by +[30/35/40/45/50]%."
    },
    knightsSoul: {
        name: "Knight's Soul",
        class: "Blast Fencer 5",
        effect: "Boosts maximum TP by [500/750/1000/1250/1500]."
    },
    auraAssault: {
        name: "Aura Assault",
        class: "Blast Fencer 7",
        effect: "Boosts melee attack and melee accuracy by [10/15/20/25/30]% when you have an aura active."
    },
    buffExtender: {
        name: "Buff Extender",
        class: "Blast Fencer 9",
        effect: "Extends buff effects by [5/6/7/8/10] seconds."
    },
    supremeSword: {
        name: "Supreme Sword",
        class: "Blast Fencer 10",
        effect: "Boosts damage by [20/40/60/80/100]% when triggering melee combos."
    },
    gravityGuard: {
        name: "Gravity Guard",
        class: "Galactic Knight 2",
        effect: "Boosts gravity resistance by [12/14/16/18/20] when wielding a ranged weapon."
    },
    fastForward: {
        name: "Fast Forward",
        class: "Galactic Knight 5",
        effect: "Reduces an Art's cooldown by [10/20/30/40/50]% when triggering a melee combo."
    },
    stellarEntry: {
        name: "Stellar Entry",
        class: "Galactic Knight 9",
        effect: "Boosts GP by [1000/1250/1500/1750/2000] when boarding your Skell while in Overdrive."
    },
    synchrony: {
        name: "Synchrony",
        class: "Galactic Knight 10",
        effect: "Boosts Skell melee attack, ranged attack, melee & ranged accuracy, potential, and evasion by [4/6/8/10/12]%."
    }
};
