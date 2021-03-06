var classes = {
  drifter: {
    name: "Drifter",
    skillSlots: 5,
    hp: 1.0,
    rangedAccuracy: 1.0,
    meleeAccuracy: 1.0,
    rangedAttack: 1.0,
    meleeAttack: 1.0,
    evasion: 1.0,
    potential: 1.0
  },
  striker: {
    name: "Striker",
    skillSlots: 1,
    hp: 1.1,
    rangedAccuracy: 1.0,
    meleeAccuracy: 0.95,
    rangedAttack: 0.9,
    meleeAttack: 1.2,
    evasion: 1.15,
    potential: 0.65
  },
  commando: {
    name: "Commando",
    skillSlots: 2,
    hp: 0.85,
    rangedAccuracy: 1.1,
    meleeAccuracy: 1.1,
    rangedAttack: 1.0,
    meleeAttack: 0.9,
    evasion: 1.3,
    potential: 0.9
  },
  enforcer: {
    name: "Enforcer",
    skillSlots: 2,
    hp: 0.75,
    rangedAccuracy: 1.0,
    meleeAccuracy: 0.95,
    rangedAttack: 1.2,
    meleeAttack: 0.8,
    evasion: 1.0,
    potential: 1.25
  },
  samuraiGunner: {
    name: "Samurai Gunner",
    skillSlots: 2,
    hp: 1.2,
    rangedAccuracy: 1.1,
    meleeAccuracy: 1.0,
    rangedAttack: 1.05,
    meleeAttack: 1.15,
    evasion: 1.15,
    potential: 0.75
  },
  shieldTrooper: {
    name: "Shield Trooper",
    skillSlots: 3,
    hp: 1.4,
    rangedAccuracy: 1.0,
    meleeAccuracy: 0.95,
    rangedAttack: 1.0,
    meleeAttack: 1.4,
    evasion: 1.0,
    potential: 0.6
  },
  wingedViper: {
    name: "Winged Viper",
    skillSlots: 3,
    hp: 0.95,
    rangedAccuracy: 1.15,
    meleeAccuracy: 1.15,
    rangedAttack: 1.1,
    meleeAttack: 0.95,
    evasion: 1.35,
    potential: 1.0
  },
  partisanEagle: {
    name: "Partisan Eagle",
    skillSlots: 3,
    hp: 1.0,
    rangedAccuracy: 1.1,
    meleeAccuracy: 1.05,
    rangedAttack: 1.3,
    meleeAttack: 1.05,
    evasion: 1.05,
    potential: 0.9
  },
  psycorruptor: {
    name: "Psycorruptor",
    skillSlots: 3,
    hp: 0.8,
    rangedAccuracy: 1.1,
    meleeAccuracy: 0.95,
    rangedAttack: 1.4,
    meleeAttack: 0.85,
    evasion: 1.05,
    potential: 1.4
  },
  blastFencer: {
    name: "Blast Fencer",
    skillSlots: 3,
    hp: 1.1,
    rangedAccuracy: 1.0,
    meleeAccuracy: 1.0,
    rangedAttack: 1.1,
    meleeAttack: 1.1,
    evasion: 1.05,
    potential: 1.1
  },
  duelist: {
    name: "Duelist",
    skillSlots: 3,
    hp: 1.25,
    rangedAccuracy: 1.0,
    meleeAccuracy: 1.05,
    rangedAttack: 1.2,
    meleeAttack: 1.25,
    evasion: 1.0,
    potential: 0.85
  },
  bastionWarrior: {
    name: "Bastion Warrior",
    skillSlots: 4,
    hp: 1.5,
    rangedAccuracy: 1.05,
    meleeAccuracy: 0.95,
    rangedAttack: 1.1,
    meleeAttack: 1.6,
    evasion: 1.05,
    potential: 0.7
  },
  fullMetalJaguar: {
    name: "Full Metal Jaguar",
    skillSlots: 4,
    hp: 1.0,
    rangedAccuracy: 1.2,
    meleeAccuracy: 1.2,
    rangedAttack: 1.15,
    meleeAttack: 1.0,
    evasion: 1.4,
    potential: 1.1
  },
  astralCrusader: {
    name: "Astral Crusader",
    skillSlots: 4,
    hp: 1.1,
    rangedAccuracy: 1.05,
    meleeAccuracy: 1.1,
    rangedAttack: 1.6,
    meleeAttack: 1.1,
    evasion: 1.1,
    potential: 1.0
  },
  mastermind: {
    name: "Mastermind",
    skillSlots: 4,
    hp: 0.9,
    rangedAccuracy: 1.1,
    meleeAccuracy: 1.0,
    rangedAttack: 1.3,
    meleeAttack: 0.9,
    evasion: 1.1,
    potential: 1.6
  },
  galacticKnight: {
    name: "Galactic Knight",
    skillSlots: 4,
    hp: 1.2,
    rangedAccuracy: 1.05,
    meleeAccuracy: 1.1,
    rangedAttack: 1.2,
    meleeAttack: 1.2,
    evasion: 1.1,
    potential: 1.2
  },
  elma: {
    name: "Elma",
    class: "Full Metal Jaguar",
    skillSlots: 4,
    hp: 1.15,
    rangedAccuracy: 1.15,
    meleeAccuracy: 1.15,
    rangedAttack: 1.1,
    meleeAttack: 0.95,
    evasion: 1.35,
    potential: 1.6,
    arts: {
      shadowstrike: 1,
      slidingSlinger: 1,
      streamEdge: 2,
      upperHand: 3,
      earlyBird: 4,
      sideSlash: 5,
      shadowrunner: 6,
      primer: 7,
      thirstyEdge: 8,
      violentStreak: 9,
      killingMachine: 10,
      bloodSacrifice: 11,
      electricSurge: 12,
      ghostFactory: 13,
      executioner: 14,
      hundredShells: 15
    },
    skills: {
      agileGunslinger: 7,
      steadyHand: 9,
      backgroundNoise: 11,
      masterEdge: 13,
      mortalEnemy: 15,
      hellhound: 16,
      crisisCatalyst: 17,
      phantomCounter: 18
    }
  },
  lin: {
    name: "Lin",
    class: "Shield Trooper",
    skillSlots: 3,
    hp: 1.4,
    rangedAccuracy: 1.0,
    meleeAccuracy: 0.95,
    rangedAttack: 1.0,
    meleeAttack: 1.4,
    evasion: 1.0,
    potential: 0.6,
    arts: {
      wildDown: 1,
      fireCarnival: 1,
      wildSmash: 2,
      flameCloak: 3,
      trashTalk: 4,
      thermalPayload: 5,
      ironPrison: 6,
      bombardier: 7,
      bulletStorm: 8,
      supershield: 9,
      realityRift: 10,
      enhancedStand: 11,
      shieldWall: 12,
      hellfire: 13,
      drumRoll: 14,
      coolOff: 15
    },
    skills: {
      steelFlesh: 7,
      mightyMuscle: 9,
      dismantler: 11,
      shieldScreen: 13,
      longTopple: 15,
      dirtyFighter: 16,
      standStrong: 17,
      machineGunner: 18
    }
  },
  irina: {
    name: "Irina",
    class: "Psycorruptor+",
    skillSlots: 4,
    hp: 0.8,
    rangedAccuracy: 1.1,
    meleeAccuracy: 0.95,
    rangedAttack: 1.4,
    meleeAttack: 0.85,
    evasion: 1.05,
    potential: 1.4,
    arts: {
      repair: 1,
      burstGrenade: 1,
      fullSpecs: 2,
      furiousBlast: 3,
      screamer: 4,
      smoothRecovery: 5,
      dispel: 6,
      flashGrenade: 7,
      brainjack: 8,
      medicFree: 9,
      quickCannon: 10,
      absorberSkin: 11,
      assaultHammer: 12,
      servantSacrifice: 13,
      energySource: 14,
      lastStand: 15
    },
    skills: {
      innerSearch: 7,
      featherTouch: 9,
      healingTouch: 11,
      highTension: 13,
      beautySleep: 15,
      kingsDecree: 16,
      unpleasantDream: 17,
      kingsBoon: 18
    }
  },
  gwin: {
    name: "Gwin",
    class: "Samurai Gunner",
    skillSlots: 3,
    hp: 1.2,
    rangedAccuracy: 1.1,
    meleeAccuracy: 1.0,
    rangedAttack: 1.0,
    meleeAttack: 1.15,
    evasion: 1.15,
    potential: 0.75,
    arts: {
      risingBlade: 1,
      furiousBlast: 1,
      powerDive: 2,
      defensiveStance: 3,
      magnumEdge: 4,
      ultraslash: 5,
      burstGrenade: 6,
      offensiveStance: 7,
      decoyRound: 8,
      tornadoBlade: 9,
      medicFree: 10,
      flashGrenade: 11,
      incendiaryEdge: 12,
      grenadeBlitz: 13,
      gunforce: 14,
      takedownShot: 15
    },
    skills: {
      unwaveringCourage: 7,
      flameTrigger: 9,
      mightyMuscle: 11,
      autoMeleeBoost: 13,
      healingAura: 15,
      weaponGuard: 16,
      theroidSlayer: 17,
      conflagrantEdge: 18
    }
  },
  doug: {
    name: "Doug",
    class: "Blast Fencer+",
    skillSlots: 4,
    hp: 1.1,
    rangedAccuracy: 1.0,
    meleeAccuracy: 1.0,
    rangedAttack: 1.1,
    meleeAttack: 1.1,
    evasion: 1.05,
    potential: 1.1,
    arts: {
      starfallBlade: 1,
      beamBarrage: 1,
      starfallRondo: 2,
      geolibrium: 3,
      myopicScreen: 4,
      starlightDuster: 5,
      astralPurge: 6,
      etherBlast: 7,
      novalibrium: 8,
      astralHeal: 9,
      subterfuge: 10,
      gravityBlast: 11,
      astralHorizon: 12,
      phenomenon: 13,
      pathogenBlast: 14,
      galacticCataclysm: 15
    },
    skills: {
      innerSearch: 7,
      beamBoost: 9,
      highTension: 11,
      mechanoidSlayer: 13,
      knightsSoul: 15,
      auraAssault: 16,
      supremeSword: 17,
      stellarEntry: 18
    }
  },
  lao: {
    name: "Lao",
    class: "Partisan Eagle",
    skillSlots: 4,
    hp: 1.2,
    rangedAccuracy: 1.1,
    meleeAccuracy: 1.05,
    rangedAttack: 1.3,
    meleeAttack: 1.05,
    evasion: 1.2,
    potential: 0.9,
    arts: {
      balanceBreaker: 1,
      shrapnel: 1,
      firstDown: 2,
      arcingHorn: 3,
      eagleEye: 4,
      raijin: 5,
      spiralHorn: 6,
      sidewinder: 7,
      overwhelm: 8,
      hawkeye: 9,
      speedDemon: 10,
      tridentBuster: 11,
      intercept: 12,
      hairTrigger: 13,
      afterburnder: 14,
      ghostSniper: 15
    },
    skills: {
      electricBoost: 9,
      knockNShock: 11,
      piscinoidSlayer: 13,
      longShot: 15,
      quickReload: 16,
      conductiveStrike: 17,
      tpOverdrive: 18
    }
  },
  l: {
    name: "L",
    class: "Shield Trooper+",
    skillSlots: 3,
    hp: 1.4,
    rangedAccuracy: 1.0,
    meleeAccuracy: 0.95,
    rangedAttack: 1.0,
    meleeAttack: 1.4,
    evasion: 1.0,
    potential: 0.6,
    arts: {
      wildDown: 1,
      stellarRay: 1,
      lightningCloak: 2,
      ironPrison: 3,
      wildSmash: 4,
      mindstorm: 5,
      trashTalk: 6,
      shootingStar: 7,
      realityRift: 8,
      shieldWall: 9,
      dualDynamo: 10,
      bombardier: 11,
      flameCloak: 12,
      astralProtection: 13,
      supershield: 14,
      starlightKick: 15
    },
    skills: {
      steelFlesh: 7,
      mightyMuscle: 9,
      shieldScreen: 11,
      longTopple: 13,
      standStrong: 15,
      mechanoidSlayer: 16,
      knightsSoul: 17,
      doubleReflect: 18
    }
  },
  murderess: {
    name: "Murderess",
    class: "Winged Viper+",
    skillSlots: 3,
    hp: 0.95,
    rangedAccuracy: 1.0,
    meleeAccuracy: 1.0,
    rangedAttack: 1.0,
    meleeAttack: 1.0,
    evasion: 1.0,
    potential: 1.0,
    arts: {
      sideSlash: 1,
      jetstream: 1,
      backSlash: 2,
      stellarRay: 3,
      lightningCloak: 4,
      seventhEdge: 5,
      shadowrunner: 6,
      shootingStar: 7,
      thirstyEdge: 8,
      killingMachine: 9,
      gravityLunge: 10,
      electricSurge: 11,
      astralProtection: 12,
      hundredShells: 13
    },
    skills: {
      agileGunslinger: 7,
      boostedBullets: 9,
      highTension: 11,
      mechanoidSlayer: 13,
      triggerHappy: 14,
      auraAssault: 15,
      lifeline: 16,
      hellhound: 17
    }
  },
  phog: {
    name: "Phog",
    class: "Winged Viper",
    skillSlots: 3,
    hp: 0.95,
    rangedAccuracy: 1.15,
    meleeAccuracy: 1.15,
    rangedAttack: 1.1,
    meleeAttack: 0.95,
    evasion: 1.35,
    potential: 1.0,
    arts: {
      backSlash: 1,
      slidingSlinger: 1,
      upperHand: 2,
      skyHigh: 3,
      shadowrunner: 4,
      sideSlash: 5,
      streamEdge: 6,
      primer: 7,
      earlyBird: 8,
      electricSurge: 9,
      executioner: 10,
      ghostWalker: 11,
      crisisZone: 12,
      bloodSacrifice: 13,
      combatLimbo: 14,
      hundredShells: 15
    },
    skills: {
      agileGunslinger: 7,
      steadyHand: 9,
      backgroundNoise: 11,
      masterEdge: 13,
      mortalEnemy: 15,
      hellhound: 16,
      crisisCatalyst: 17,
      phantomCounter: 18
    }
  },
  frye: {
    name: "Frye",
    class: "Samurai Gunner+",
    skillSlots: 3,
    hp: 1.2,
    rangedAccuracy: 1.1,
    meleeAccuracy: 1.0,
    rangedAttack: 1.05,
    meleeAttack: 1.15,
    evasion: 1.15,
    potential: 0.75,
    arts: {
      risingBlade: 1,
      missileVolley: 1,
      tornadoBlade: 2,
      enhancedStand: 3,
      bulletTwister: 4,
      burningSlash: 5,
      offensiveStance: 6,
      bulletStorm: 7,
      coolOff: 8,
      incendiaryEdge: 9,
      titanRecharge: 10,
      thermalPayload: 11,
      defensiveStance: 12,
      hellfire: 13
    },
    skills: {
      unwaveringCourage: 7,
      mightyMuscle: 9,
      ironKnuckle: 11,
      risingRenewal: 13,
      weaponGuard: 14,
      traumaTension: 15,
      blazingAuto: 16,
      machineGunner: 17
    }
  },
  mia: {
    name: "Mia",
    class: "Psycorruptor+",
    skillSlots: 3,
    hp: 0.8,
    rangedAccuracy: 1.1,
    meleeAccuracy: 0.95,
    rangedAttack: 1.4,
    meleeAttack: 0.85,
    evasion: 1.05,
    potential: 1.4,
    arts: {
      screamer: 1,
      beamBarrage: 1,
      myopicScreen: 2,
      clarityRay: 3,
      fullSpecs: 4,
      etherBlast: 5,
      subterfuge: 6,
      dispel: 7,
      gravityCloak: 8,
      energySource: 9,
      beamBomber: 10,
      blackButterfly: 11,
      pathogenBlast: 12,
      gravityBlast: 13
    },
    skills: {
      innerSearch: 7,
      beamBoost: 9,
      beautySleep: 11,
      etherBoost: 13,
      extraArmor: 14,
      gravityBoost: 15,
      resistantFlesh: 16,
      tacticalAnalyst: 17
    }
  },
  celica: {
    name: "Celica",
    class: "Psycorruptor+",
    skillSlots: 3,
    hp: 0.8,
    rangedAccuracy: 1.1,
    meleeAccuracy: 0.95,
    rangedAttack: 1.4,
    meleeAttack: 0.85,
    evasion: 1.05,
    potential: 1.4,
    arts: {
      absorberSkin: 1,
      slidingSlinger: 1,
      blackBane: 2,
      fullSpecs: 3,
      screamer: 4,
      primer: 5,
      violentStreak: 6,
      dispel: 7,
      earlyBird: 8,
      energySource: 9,
      zeroZero: 10,
      ghostwalker: 11,
      repair: 12,
      executioner: 13,
      combatLimbo: 14,
      blackButterfly: 15
    },
    skills: {
      steadyHand: 7,
      innerSearch: 9,
      auraBurst: 11,
      fleetFeet: 13,
      gentleApproach: 15,
      mindscape: 16,
      featherTouch: 17,
      redZone: 18
    }
  },
  nagi: {
    name: "Nagi",
    class: "Duelist+",
    skillSlots: 5,
    hp: 1.25,
    rangedAccuracy: 1.0,
    meleeAccuracy: 1.05,
    rangedAttack: 1.2,
    meleeAttack: 1.25,
    evasion: 1.0,
    potential: 0.85,
    arts: {
      risingBlade: 1,
      enhancedStand: 1,
      thermalPayload: 2,
      coolOff: 3,
      trueStreamEdge: 4,
      magnumEdge: 5,
      bulletStorm: 6,
      defensiveStance: 7,
      offensiveStance: 8,
      burningSlash: 9,
      blossomDance: 10,
      samuraiSoul: 11,
      missileVolley: 12,
      incendiaryEdge: 13
    },
    skills: {
      steelFlesh: 7,
      mightyMuscle: 9,
      traumaTension: 11,
      risingRenewal: 13,
      yamatoSpirit: 14,
      fortifiedFlesh: 15,
      machineGunner: 16,
      grandProcession: 17
    }
  },
  hope: {
    name: "Hope",
    class: "Psycorruptor+",
    skillSlots: 3,
    hp: 0.8,
    rangedAccuracy: 1.0,
    meleeAccuracy: 1.0,
    rangedAttack: 1.0,
    meleeAttack: 1.0,
    evasion: 1.0,
    potential: 1.0,
    arts: {
      repair: 1,
      stellarRay: 1,
      fullSpecs: 2,
      shootingStar: 3,
      absorberSkin: 4,
      secondarySpeed: 5,
      dispel: 6,
      brainjack: 7,
      servantSacrifice: 8,
      energySource: 9,
      tacitCensure: 10,
      astralProtection: 11,
      starlightKick: 12,
      blackButterfly: 13
    },
    skills: {
      innerSearch: 7,
      buffHeal: 9,
      wellWeathered: 11,
      mechanoidSlayer: 13,
      kingsDecree: 14,
      knightsSoul: 15,
      supremeSword: 16,
      tpOverdrive: 17
    }
  },
  alexa: {
    name: "Alexa",
    class: "Partisan Eagle+",
    skillSlots: 3,
    hp: 1.0,
    rangedAccuracy: 1.1,
    meleeAccuracy: 1.05,
    rangedAttack: 1.3,
    meleeAttack: 1.05,
    evasion: 1.05,
    potential: 0.9,
    arts: {
      arcingHorn: 1,
      furiousBlast: 1,
      spiralHorn: 2,
      powerDive: 3,
      overclock: 4,
      overwhelm: 5,
      burstGrenade: 6,
      decoyRound: 7,
      assaultHammer: 8,
      medicFree: 9,
      hairTrigger: 10,
      maximumVoltage: 11,
      raijin: 12,
      flashGrenade: 13,
      tridentBuster: 14,
      gunforce: 15
    },
    skills: {
      steelFlesh: 7,
      highTension: 9,
      electricBoost: 11,
      quickReload: 13,
      fortifiedFlesh: 14,
      tpOverdrive: 15,
      stellarEntry: 16,
      synchrony: 17
    }
  },
  hb: {
    name: "H.B.",
    class: "Shield Trooper+",
    skillSlots: 4,
    hp: 1.4,
    rangedAccuracy: 1.0,
    meleeAccuracy: 0.95,
    rangedAttack: 1.0,
    meleeAttack: 1.4,
    evasion: 1.0,
    potential: 0.6,
    arts: {
      atomicHit: 1,
      decoyRound: 1,
      burstGrenade: 2,
      powerDive: 3,
      ironPrison: 4,
      wildSmash: 5,
      furiousBlast: 6,
      wildDown: 7,
      flashGrenade: 8,
      shieldWall: 9,
      flamehand: 10,
      takedownShot: 11,
      trashTalk: 12,
      bombardier: 13,
      gunforce: 14,
      lastStand: 15
    },
    skills: {
      steelFlesh: 7,
      mightyMuscle: 9,
      combatPresence: 11,
      toppleToppler: 13,
      shieldScreen: 14,
      longTopple: 15,
      traumaTension: 16,
      doubleSpike: 17
    }
  },
  yelv: {
    name: "Yelv",
    class: "Blast Fencer+",
    skillSlots: 3,
    hp: 1.1,
    rangedAccuracy: 1.0,
    meleeAccuracy: 1.0,
    rangedAttack: 1.1,
    meleeAttack: 1.1,
    evasion: 1.05,
    potential: 1.1,
    arts: {
      starfallBlade: 1,
      beamBarrage: 1,
      starfallRondo: 2,
      gravityCloak: 3,
      geolibrium: 4,
      essenceExchange: 5,
      etherBlast: 6,
      myopicScreen: 7,
      astrolibrium: 8,
      astralHeal: 9,
      starfallBlossom: 10,
      masterGunner: 11,
      subterfuge: 12,
      astralPurge: 13,
      novalibrium: 14,
      galacticCataclysm: 15
    },
    skills: {
      innerSearch: 7,
      beamBoost: 9,
      highTension: 11,
      mechanoidSlayer: 13,
      knightsSoul: 14,
      supremeSword: 15,
      secondaryAccelerator: 16,
      synchrony: 17
    }
  },
  boze: {
    name: "Boze",
    class: "Partisan Eagle",
    skillSlots: 3,
    hp: 1.0,
    rangedAccuracy: 1.1,
    meleeAccuracy: 1.05,
    rangedAttack: 1.3,
    meleeAttack: 1.05,
    evasion: 1.05,
    potential: 0.9,
    arts: {
      spiralHorn: 1,
      shrapnel: 1,
      arcingHorn: 2,
      eagleEye: 3,
      raijin: 4,
      vortex: 5,
      firstDown: 6,
      overwhelm: 7,
      hairTrigger: 8,
      sidewinder: 9,
      ghostSniper: 10,
      slayonet: 11,
      hawkeye: 12,
      speedDemon: 13,
      intercept: 14,
      tridentBuster: 15
    },
    skills: {
      masterEdge: 7,
      killshot: 9,
      electricGuard: 11,
      electricBoost: 13,
      knockNShock: 14,
      quickReload: 15,
      conductiveStrike: 16,
      tpOverdrive: 17
    }
  }
};
