var weapons = {
  combatLongsword: {
    name: "Combat Longsword",
    type: "Longsword",
    rarity: "Common",
    attack: 48,
    level: 1,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 2.0,
    ammo: 0,
    tpGain: 230,
    stability: 8,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 0
  },
  archetypeSword: {
    name: "Archetype Sword",
    type: "Longsword",
    rarity: "Prime",
    attack: 96,
    level: 20,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 2.0,
    ammo: 0,
    tpGain: 230,
    stability: 8,
    upgrades: 10,
    innateTraits: {
      meleeAttackUp: 4,
      insectoidCriticalsUp: 4,
      extendThermalResDown: 4
    },
    sellPrice: 10
  },
  archetypeSlairII: {
    name: "Archetype Slair II",
    type: "Longsword",
    rarity: "Prime",
    attack: 144,
    level: 40,
    maker: "Grenada Galactic Group",
    attribute: "Physical",
    cooldown: 1.7,
    ammo: 0,
    tpGain: 180,
    stability: 12,
    upgrades: 10,
    innateTraits: {
      meleeBeamResDown: 8,
      theroidCriticalsUp: 8,
      potentialUp: 8
    },
    sellPrice: 10
  },
  archetypeSwordII: {
    name: "Archetype Sword II",
    type: "Longsword",
    rarity: "Prime",
    attack: 216,
    level: 60,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 2.5,
    ammo: 0,
    tpGain: 230,
    stability: 18,
    upgrades: 10,
    innateTraits: {
      piscinoidCriticalsUp: 12,
      meleeAttackUp: 12,
      artsRecoverHP: 12
    },
    sellPrice: 10
  },
  masterstrokeGlaive: {
    name: "Masterstroke Glaive",
    type: "Longsword",
    rarity: "Common",
    attack: 330,
    level: 60,
    maker: "Six Stars",
    attribute: "Thermal",
    cooldown: 2.0,
    ammo: 0,
    tpGain: 210,
    stability: 15,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  masterstrokeGlaiveII: {
    name: "Masterstroke Glaive II",
    type: "Longsword",
    rarity: "Common",
    attack: 348,
    level: 60,
    maker: "Six Stars",
    attribute: "Thermal",
    cooldown: 2.0,
    ammo: 0,
    tpGain: 180,
    stability: 15,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  combatShield: {
    name: "Combat Shield",
    type: "Shield",
    rarity: "Common",
    attack: 80,
    level: 1,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 3.0,
    ammo: 0,
    tpGain: 165,
    stability: 12,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 0
  },
  archetypePaive: {
    name: "Archetype Paive",
    type: "Shield",
    rarity: "Prime",
    attack: 160,
    level: 20,
    maker: "Grenada Galactic Group",
    attribute: "Physical",
    cooldown: 2.7,
    ammo: 0,
    tpGain: 120,
    stability: 20,
    upgrades: 10,
    innateTraits: {
      meleeTPGainUp: 1,
      stunDecoy: 4,
      extendBlaze: 4
    },
    sellPrice: 10
  },
  archetypeShield: {
    name: "Archetype Shield",
    type: "Shield",
    rarity: "Prime",
    attack: 240,
    level: 40,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 3.0,
    ammo: 0,
    tpGain: 165,
    stability: 12,
    upgrades: 10,
    innateTraits: {
      resistFlinch: 8,
      insectoidCriticalsUp: 8,
      extendTaunt: 8
    },
    sellPrice: 10
  },
  advancedArchetypePaive: {
    name: "Advanced Archetype Paive",
    type: "Shield",
    rarity: "Prime",
    attack: 320,
    level: 60,
    maker: "Galactic Grenada Group",
    attribute: "Physical",
    cooldown: 2.7,
    ammo: 0,
    tpGain: 120,
    stability: 20,
    upgrades: 10,
    innateTraits: {
      meleeTPGainUp: 1,
      stunDecoy: 12,
      extendBlaze: 12
    },
    sellPrice: 10
  },
  originalHaven: {
    name: "Original Haven",
    type: "Shield",
    rarity: "Common",
    attack: 520,
    level: 60,
    maker: "Candid & Credible",
    attribute: "Electric",
    cooldown: 3.0,
    ammo: 0,
    tpGain: 180,
    stability: 15,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  originalHavenII: {
    name: "Original Haven II",
    type: "Shield",
    rarity: "Common",
    attack: 520,
    level: 60,
    maker: "Candid & Credible",
    attribute: "Physical",
    cooldown: 3.3,
    ammo: 0,
    tpGain: 200,
    stability: 15,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  originalThudclang: {
    name: "Original Thudclang",
    type: "Shield",
    rarity: "Common",
    attack: 520,
    level: 60,
    maker: "Nopon Commerce Guild",
    attribute: "Thermal",
    cooldown: 3.2,
    ammo: 0,
    tpGain: 165,
    stability: 20,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  combatDualSwords: {
    name: "Combat Dual Swords",
    type: "Dual Swords",
    rarity: "Common",
    attack: 16,
    level: 1,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 1.5,
    ammo: 0,
    tpGain: 72,
    stability: 5,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 0
  },
  archetypeBlades: {
    name: "Archetype Blades",
    type: "Dual Swords",
    rarity: "Prime",
    attack: 32,
    level: 20,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 1.5,
    ammo: 0,
    tpGain: 72,
    stability: 5,
    upgrades: 10,
    innateTraits: {
      meleeAttackUp: 4,
      insectoidCriticalsUp: 4,
      extendFatigue: 4
    },
    sellPrice: 10
  },
  archetypeRalzes: {
    name: "Archetype Ralzes",
    type: "Dual Swords",
    rarity: "Prime",
    attack: 48,
    level: 40,
    maker: "Grenada Galactic Group",
    attribute: "Physical",
    cooldown: 1.3,
    ammo: 0,
    tpGain: 36,
    stability: 10,
    upgrades: 10,
    innateTraits: {
      meleeBeamResDown: 8,
      theroidCriticalsUp: 8,
      potentialUp: 8
    },
    sellPrice: 10
  },
  archetypeBladesII: {
    name: "Archetype Blades II",
    type: "Dual Swords",
    rarity: "Prime",
    attack: 72,
    level: 60,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 1.7,
    ammo: 0,
    tpGain: 72,
    stability: 15,
    upgrades: 10,
    innateTraits: {
      piscinoidCriticalsUp: 12,
      meleeAttackUp: 12,
      artsRecoverHP: 12
    },
    sellPrice: 10
  },
  originalTwins: {
    name: "Original Twins",
    type: "Dual Swords",
    rarity: "Common",
    attack: 108,
    level: 60,
    maker: "Candid & Credible",
    attribute: "Electric",
    cooldown: 1.5,
    ammo: 0,
    tpGain: 88,
    stability: 8,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  originalWatxes: {
    name: "Original Watxes",
    type: "Dual Swords",
    rarity: "Common",
    attack: 108,
    level: 60,
    maker: "Orphean Technologies",
    attribute: "Gravity",
    cooldown: 1.5,
    ammo: 0,
    tpGain: 72,
    stability: 10,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  masterstrokeEdgesII: {
    name: "Masterstroke Edges II",
    type: "Dual Swords",
    rarity: "Common",
    attack: 120,
    level: 60,
    maker: "Six Stars",
    attribute: "Thermal",
    cooldown: 1.5,
    ammo: 0,
    tpGain: 72,
    stability: 12,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  masterstrokeEdges: {
    name: "Masterstroke Edges",
    type: "Dual Swords",
    rarity: "Common",
    attack: 120,
    level: 60,
    maker: "Six Stars",
    attribute: "Thermal",
    cooldown: 1.3,
    ammo: 0,
    tpGain: 72,
    stability: 20,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  combatJavelin: {
    name: "Combat Javelin",
    type: "Javelin",
    rarity: "Common",
    attack: 78,
    level: 1,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 2.5,
    ammo: 0,
    tpGain: 140,
    stability: 10,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 0
  },
  archetypeSpear: {
    name: "Archetype Spear",
    type: "Javelin",
    rarity: "Prime",
    attack: 156,
    level: 20,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 2.5,
    ammo: 0,
    tpGain: 140,
    stability: 10,
    upgrades: 10,
    innateTraits: {
      meleeAttack: 4,
      insectoidCriticalsUp: 4,
      extendPhysicalResDown: 4
    },
    sellPrice: 10
  },
  archetypeParce: {
    name: "Archetype Parce",
    type: "Javelin",
    rarity: "Prime",
    attack: 234,
    level: 40,
    maker: "Grenada Galactic Group",
    attribute: "Physical",
    cooldown: 2.3,
    ammo: 0,
    tpGain: 120,
    stability: 15,
    upgrades: 10,
    innateTraits: {
      meleeBeamResDown: 8,
      theroidCriticalsUp: 8,
      potentialUp: 8
    },
    sellPrice: 10
  },
  archetypeSpearII: {
    name: "Archetype Spear II",
    type: "Javelin",
    rarity: "Prime",
    attack: 351,
    level: 60,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 2.8,
    ammo: 0,
    tpGain: 140,
    stability: 20,
    upgrades: 10,
    innateTraits: {
      piscinoidCriticalsUp: 12,
      meleeAttackUp: 12,
      artsRecoverHP: 12
    },
    sellPrice: 10
  },
  originalBolide: {
    name: "Original Bolide",
    type: "Javelin",
    rarity: "Common",
    attack: 424,
    level: 60,
    maker: "Candid & Credible",
    attribute: "Electric",
    cooldown: 2.5,
    ammo: 0,
    tpGain: 155,
    stability: 12,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  originalJyth: {
    name: "Original Jyth",
    type: "Javelin",
    rarity: "Common",
    attack: 424,
    level: 60,
    maker: "Orphean Technologies",
    attribute: "Gravity",
    cooldown: 2.5,
    ammo: 0,
    tpGain: 140,
    stability: 15,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  masterstrokeLance: {
    name: "Masterstroke Lance",
    type: "Javelin",
    rarity: "Common",
    attack: 475,
    level: 60,
    maker: "Six Stars",
    attribute: "Thermal",
    cooldown: 2.5,
    ammo: 0,
    tpGain: 120,
    stability: 18,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  combatKnife: {
    name: "Combat Knife",
    type: "Knife",
    rarity: "Common",
    attack: 10,
    level: 1,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 1.0,
    ammo: 0,
    tpGain: 88,
    stability: 10,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 0
  },
  archetypeKnifeIII: {
    name: "Archetype Knife III",
    type: "Knife",
    rarity: "Prime",
    attack: 35,
    level: 20,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 1.2,
    ammo: 0,
    tpGain: 8,
    stability: 12,
    upgrades: 10,
    innateTraits: {
      piscinoidCriticalsUp: 4,
      meleeAttackUp: 4,
      artsRecoverHP: 4
    },
    sellPrice: 10
  },
  archetypeRiv: {
    name: "Archetype Riv",
    type: "Knife",
    rarity: "Prime",
    attack: 42,
    level: 40,
    maker: "Grenada Galactic Group",
    attribute: "Physical",
    cooldown: 0.8,
    ammo: 0,
    tpGain: 60,
    stability: 6,
    upgrades: 10,
    innateTraits: {
      meleeBeamResDown: 8,
      theroidCriticalsUp: 8,
      potentialUp: 8
    },
    sellPrice: 10
  },
  archetypeKnifeII: {
    name: "Archetype Knife II",
    type: "Knife",
    rarity: "Prime",
    attack: 56,
    level: 60,
    maker: "Sakuraba Industries",
    attribute: "Electric",
    cooldown: 1.0,
    ammo: 0,
    tpGain: 72,
    stability: 3,
    upgrades: 10,
    innateTraits: {
      meleeElectricResDown: 12,
      meleeAccuracyUp: 12,
      extendEtherResDown: 12
    },
    sellPrice: 10
  },
  originalPokepoke: {
    name: "Original Pokepoke",
    type: "Knife",
    rarity: "Common",
    attack: 96,
    level: 60,
    maker: "Nopon Commerce Guild",
    attribute: "Thermal",
    cooldown: 1.2,
    ammo: 0,
    tpGain: 88,
    stability: 6,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  originalIyst: {
    name: "Original Iyst",
    type: "Knife",
    rarity: "Common",
    attack: 96,
    level: 60,
    maker: "Orphean Technologies",
    attribute: "Ether",
    cooldown: 1.0,
    ammo: 0,
    tpGain: 72,
    stability: 6,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  originalIystII: {
    name: "Original Iyst II",
    type: "Knife",
    rarity: "Common",
    attack: 96,
    level: 60,
    maker: "Orphean Technologies",
    attribute: "Gravity",
    cooldown: 1.0,
    ammo: 0,
    tpGain: 88,
    stability: 6,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  combatPhotonSaber: {
    name: "Combat Photon Saber",
    type: "Photon Saber",
    rarity: "Common",
    attack: 40,
    level: 1,
    maker: "Sakuraba Industries",
    attribute: "Beam",
    cooldown: 1.5,
    ammo: 0,
    tpGain: 50,
    stability: 15,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 0
  },
  archetypeFulge: {
    name: "Archetype Fulge",
    type: "Photon Saber",
    rarity: "Prime",
    attack: 75,
    level: 20,
    maker: "Grenada Galactic Group",
    attribute: "Beam",
    cooldown: 1.3,
    ammo: 0,
    tpGain: 30,
    stability: 6,
    upgrades: 10,
    innateTraits: {
      meleeBeamResDown: 4,
      theroidCriticalsUp: 4,
      reflectPhysical: 4
    },
    sellPrice: 10
  },
  archetypeSaber: {
    name: "Archetype Saber",
    type: "Photon Saber",
    rarity: "Prime",
    attack: 120,
    level: 40,
    maker: "Sakuraba Industries",
    attribute: "Beam",
    cooldown: 1.5,
    ammo: 0,
    tpGain: 50,
    stability: 15,
    upgrades: 10,
    innateTraits: {
      meleeAttackUp: 8,
      insectoidCriticalsUp: 8,
      nullifyPhysicalReflect: 8
    },
    sellPrice: 10
  },
  archetypeFulgeII: {
    name: "Archetype Fulge II",
    type: "Photon Saber",
    rarity: "Prime",
    attack: 150,
    level: 60,
    maker: "Grenada Galactic Group",
    attribute: "Beam",
    cooldown: 1.2,
    ammo: 0,
    tpGain: 18,
    stability: 8,
    upgrades: 10,
    innateTraits: {
      stabilizer: 12,
      nullifyBeamReflect: 12,
      crushGainTP: 12
    },
    sellPrice: 10
  },
  masterstrokeLightblade: {
    name: "Masterstroke Lightblade",
    type: "Photon Saber",
    rarity: "Common",
    attack: 300,
    level: 60,
    maker: "Six Stars",
    attribute: "Electric",
    cooldown: 1.8,
    ammo: 0,
    tpGain: 50,
    stability: 10,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  masterstrokeLightbladeII: {
    name: "Masterstroke Lightlblade II",
    type: "Photon Saber",
    rarity: "Common",
    attack: 300,
    level: 60,
    maker: "Six Sars",
    attribute: "Thermal",
    cooldown: 1.8,
    ammo: 0,
    tpGain: 50,
    stability: 10,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  combatAssaultRifle: {
    name: "Combat Assault Rifle",
    type: "Assault Rifle",
    rarity: "Common",
    attack: 3,
    level: 1,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 2.7,
    ammo: 20,
    tpGain: 1,
    stability: 12,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 0
  },
  archetypeAssaultRifleII: {
    name: "Archetype Assault Rifle II",
    type: "Assault Rifle",
    rarity: "Prime",
    attack: 10,
    level: 20,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 2.7,
    ammo: 12,
    tpGain: 1,
    stability: 5,
    upgrades: 10,
    innateTraits: {
      rangedAccuracyUp: 4,
      MechanoidSlayer: 4,
      extendBlaze: 4
    },
    sellPrice: 10
  },
  archetypeAvagar: {
    name: "Archetype Avagar",
    type: "Assault Rifle",
    rarity: "Prime",
    attack: 12,
    level: 40,
    maker: "Grenada Galactic Group",
    attribute: "Beam",
    cooldown: 2.5,
    ammo: 18,
    tpGain: 1,
    stability: 10,
    upgrades: 10,
    innateTraits: {
      crushGainTP: 8,
      firingRangeUp: 8,
      potentialBoost: 8
    },
    sellPrice: 10
  },
  archetypeAssaultRifleII: {
    name: "Archetype Assault Rifle II",
    type: "Assault Rifle",
    rarity: "Prime",
    attack: 16,
    level: 60,
    maker: "Sakuraba Industries",
    attribute: "Beam",
    cooldown: 2.7,
    ammo: 20,
    tpGain: 1,
    stability: 20,
    upgrades: 10,
    innateTraits: {
      insectoidSlayer: 12,
      rangedAttackUp: 12,
      artsGainTP: 12
    },
    sellPrice: 10
  },
  originalAssailer: {
    name: "Original Assailer",
    type: "Assault Rifle",
    rarity: "Common",
    attack: 36,
    level: 60,
    maker: "Candid & Credible",
    attribute: "Electric",
    cooldown: 2.7,
    ammo: 20,
    tpGain: 1,
    stability: 8,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  masterstrokeRaidrifle: {
    name: "Masterstroke Raidrifle",
    type: "Assault Rifle",
    rarity: "Common",
    attack: 38,
    level: 60,
    maker: "Six Stars",
    attribute: "Thermal",
    cooldown: 2.7,
    ammo: 20,
    tpGain: 1,
    stability: 12,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  combatGatlingGun: {
    name: "Combat Gatling Gun",
    type: "Gatling Gun",
    rarity: "Common",
    attack: 5,
    level: 1,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 6.0,
    ammo: 36,
    tpGain: 1,
    stability: 12,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 0
  },
  archetypeMachine: {
    name: "Archetype Machine",
    type: "Gatling Gun",
    rarity: "Prime",
    attack: 10,
    level: 20,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 6.0,
    ammo: 36,
    tpGain: 1,
    stability: 12,
    upgrades: 10,
    innateTraits: {
      rangedAttackUp: 4,
      theroidSlayer: 4,
      extendThermalResDown: 4
    },
    sellPrice: 10
  },
  archetypeRepethe: {
    name: "Archetype Repethe",
    type: "Gatling Gun",
    rarity: "Prime",
    attack: 15,
    level: 40,
    maker: "Grenada Galactic Group",
    attribute: "Beam",
    cooldown: 5.3,
    ammo: 32,
    tpGain: 1,
    stability: 20,
    upgrades: 10,
    innateTraits: {
      crushGainTP: 8,
      firingRangeUp: 8,
      potentialBoost: 8
    },
    sellPrice: 10
  },
  archetypeMachineII: {
    name: "Archetype Machine II",
    type: "Gatling Gun",
    rarity: "Prime",
    attack: 22,
    level: 60,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 6.0,
    ammo: 28,
    tpGain: 1,
    stability: 12,
    upgrades: 10,
    innateTraits: {
      rangedAccuracyUp: 12,
      mechanoidSlayer: 12,
      nullifyPhysicalReflect: 12
    },
    sellPrice: 10
  },
  originalCrank: {
    name: "Original Crank",
    type: "Gatling Gun",
    rarity: "Common",
    attack: 50,
    level: 60,
    maker: "Candid & Credible",
    attribute: "Electric",
    cooldown: 6.0,
    ammo: 36,
    tpGain: 1,
    stability: 12,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  originalRatatatta: {
    name: "Original Ratatatta",
    type: "Gatling Gun",
    rarity: "Common",
    attack: 50,
    level: 60,
    maker: "Nopon Commerce Guild",
    attribute: "Thermal",
    cooldown: 6.7,
    ammo: 48,
    tpGain: 1,
    stability: 10,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  originalZiyse: {
    name: "Original Ziyse",
    type: "Gatling Gun",
    rarity: "Common",
    attack: 50,
    level: 60,
    maker: "Orphean Technologies",
    attribute: "Ether",
    cooldown: 6.0,
    ammo: 32,
    tpGain: 1,
    stability: 20,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  combatDualGuns: {
    name: "Combat Dual Guns",
    type: "Dual Guns",
    rarity: "Common",
    attack: 6,
    level: 1,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 2.0,
    ammo: 8,
    tpGain: 2,
    stability: 8,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 0
  },
  archetypeDualGuns: {
    name: "Archetype Dual Guns",
    type: "Dual Guns",
    rarity: "Prime",
    attack: 12,
    level: 20,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 2.0,
    ammo: 8,
    tpGain: 2,
    stability: 8,
    upgrades: 10,
    innateTraits: {
      rangedAttackUp: 4,
      theroidSlayer: 4,
      nullifyPhysicalReflect: 4
    },
    sellPrice: 10
  },
  archetypeGemels: {
    name: "Archetype Gemels",
    type: "Dual Guns",
    rarity: "Prime",
    attack: 18,
    level: 40,
    maker: "Grenada Galactic Group",
    attribute: "Beam",
    cooldown: 1.8,
    ammo: 6,
    tpGain: 2,
    stability: 12,
    upgrades: 10,
    innateTraits: {
      crushGainTP: 8,
      firingRangeUp: 8,
      potentialBoost: 8
    },
    sellPrice: 10
  },
  archetypeDualGunsII: {
    name: "Archetype Dual Guns II",
    type: "Dual Guns",
    rarity: "Prime",
    attack: 27,
    level: 60,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 2.0,
    ammo: 5,
    tpGain: 2,
    stability: 8,
    upgrades: 10,
    innateTraits: {
      rangedAccuracyUp: 12,
      mechanoidSlayer: 12,
      nullifyThermalReflect: 12
    },
    sellPrice: 10
  },
  originalDyads: {
    name: "Original Dyads",
    type: "Dual Guns",
    rarity: "Common",
    attack: 54,
    level: 60,
    maker: "Candid & Credible",
    attribute: "Electric",
    cooldown: 2.0,
    ammo: 8,
    tpGain: 2,
    stability: 10,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  originalDyadsIII: {
    name: "Original Dyads III",
    type: "Dual Guns",
    rarity: "Common",
    attack: 58,
    level: 60,
    maker: "Candid & Credible",
    attribute: "Gravity",
    cooldown: 2.0,
    ammo: 8,
    tpGain: 2,
    stability: 12,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  originalDyadsII: {
    name: "Original Dyads II",
    type: "Dual Guns",
    rarity: "Common",
    attack: 54,
    level: 60,
    maker: "Candid & Credible",
    attribute: "Ether",
    cooldown: 2.0,
    ammo: 4,
    tpGain: 2,
    stability: 10,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  originalBangbangs: {
    name: "Original Bangbangs",
    type: "Dual Guns",
    rarity: "Common",
    attack: 54,
    level: 60,
    maker: "Nopon Commerce Guild",
    attribute: "Thermal",
    cooldown: 2.0,
    ammo: 8,
    tpGain: 2,
    stability: 12,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  masterstrokeSidearm: {
    name: "Masterstroke Sidearm",
    type: "Dual Guns",
    rarity: "Common",
    attack: 58,
    level: 60,
    maker: "Six Stars",
    attribute: "Physical",
    cooldown: 2.0,
    ammo: 8,
    tpGain: 2,
    stability: 16,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  combatSniperRifle: {
    name: "Combat Sniper Rifle",
    type: "Sniper Rifle",
    rarity: "Common",
    attack: 28,
    level: 1,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 4.0,
    ammo: 5,
    tpGain: 7,
    stability: 3,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 0
  },
  archetypeSniperRifle: {
    name: "Archetype Sniper Rifle",
    type: "Sniper Rifle",
    rarity: "Prime",
    attack: 56,
    level: 20,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 4.0,
    ammo: 5,
    tpGain: 7,
    stability: 3,
    upgrades: 10,
    innateTraits: {
      rangedAttackUp: 4,
      theroidSlayer: 4,
      nullifyPhysicalReflect: 4
    },
    sellPrice: 10
  },
  archetypeRetic: {
    name: "Archetype Retic",
    type: "Sniper Rifle",
    rarity: "Prime",
    attack: 84,
    level: 40,
    maker: "Grenada Galactic Group",
    attribute: "Beam",
    cooldown: 3.3,
    ammo: 3,
    tpGain: 7,
    stability: 6,
    upgrades: 10,
    innateTraits: {
      crushGainTP: 8,
      firingRangeUp: 8,
      potentialBoost: 8
    },
    sellPrice: 10
  },
  archetypeSniperRifleII: {
    name: "Archetype Sniper Rifle II",
    type: "Sniper Rifle",
    rarity: "Prime",
    attack: 112,
    level: 60,
    maker: "Sakuraba Industries",
    attribute: "Ether",
    cooldown: 4.0,
    ammo: 5,
    tpGain: 7,
    stability: 3,
    upgrades: 10,
    innateTraits: {
      rangedAccuracyBoost: 12,
      vantageAttackPlus: 12,
      softTouch: 12
    },
    sellPrice: 10
  },
  originalTrigger: {
    name: "Original Trigger",
    type: "Sniper Rifle",
    rarity: "Common",
    attack: 160,
    level: 60,
    maker: "Candid & Credible",
    attribute: "Electric",
    cooldown: 4.0,
    ammo: 5,
    tpGain: 7,
    stability: 5,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  originalThwipper: {
    name: "Original Thwipper",
    type: "Sniper Rifle",
    rarity: "Common",
    attack: 160,
    level: 60,
    maker: "Nopon Commerce Guild",
    attribute: "Thermal",
    cooldown: 4.3,
    ammo: 6,
    tpGain: 7,
    stability: 6,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  masterstrokeDeadsight: {
    name: "Masterstroke Deadsight",
    type: "Sniper Rifle",
    rarity: "Common",
    attack: 180,
    level: 60,
    maker: "Six Stars",
    attribute: "Physical",
    cooldown: 4.0,
    ammo: 5,
    tpGain: 7,
    stability: 10,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  masterstrokeDeadsightII: {
    name: "Masterstroke Deadsight II",
    type: "Sniper Rifle",
    rarity: "Common",
    attack: 180,
    level: 60,
    maker: "Six Stars",
    attribute: "Phsyical",
    cooldown: 3.3,
    ammo: 3,
    tpGain: 7,
    stability: 20,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  combatRaygun: {
    name: "Combat Raygun",
    type: "Raygun",
    rarity: "Common",
    attack: 32,
    level: 1,
    maker: "Sakuraba Industries",
    attribute: "Beam",
    cooldown: 3.7,
    ammo: 4,
    tpGain: 9,
    stability: 20,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 0
  },
  archetypeLastyrII: {
    name: "Archetype Lastyr II",
    type: "Raygun",
    rarity: "Prime",
    attack: 80,
    level: 20,
    maker: "Grenada Galactic Group",
    attribute: "Beam",
    cooldown: 3.2,
    ammo: 1,
    tpGain: 9,
    stability: 8,
    upgrades: 10,
    innateTraits: {
      nullifyBeamReflect: 4,
      rangedAccuracyUp: 4,
      extendBeamResDown: 4
    },
    sellPrice: 10
  },
  archetypeRaygun: {
    name: "Archetype Raygun",
    type: "Raygun",
    rarity: "Prime",
    attack: 96,
    level: 40,
    maker: "Sakuraba Industries",
    attribute: "Beam",
    cooldown: 3.7,
    ammo: 4,
    tpGain: 9,
    stability: 20,
    upgrades: 10,
    innateTraits: {
      insectoidSlayer: 8,
      rangedAttackUp: 8,
      artsGainTP: 8
    },
    sellPrice: 10
  },
  archetypeLastyrIII: {
    name: "Archetype Lastyr III",
    type: "Raygun",
    rarity: "Prime",
    attack: 128,
    level: 60,
    maker: "Grenada Galactic Group",
    attribute: "Thermal",
    cooldown: 3.0,
    ammo: 3,
    tpGain: 9,
    stability: 8,
    upgrades: 10,
    innateTraits: {
      rangedAttackUp: 12,
      firingRangeUp: 12,
      extendDebuffResDown: 12
    },
    sellPrice: 10
  },
  originalStrobe: {
    name: "Original Strobe",
    type: "Raygun",
    rarity: "Common",
    attack: 280,
    level: 60,
    maker: "Candid & Credible",
    attribute: "Electric",
    cooldown: 3.3,
    ammo: 3,
    tpGain: 9,
    stability: 6,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  combatPsychoLaunchers: {
    name: "Combat Psycho Launchers",
    type: "Psycho Launchers",
    rarity: "Common",
    attack: 8,
    level: 1,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 2.0,
    ammo: 6,
    tpGain: 3,
    stability: 8,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 0
  },
  archetypePsylans: {
    name: "Archetype Psylans",
    type: "Psycho Launchers",
    rarity: "Prime",
    attack: 16,
    level: 20,
    maker: "Grenada Galactic Group",
    attribute: "Beam",
    cooldown: 1.8,
    ammo: 5,
    tpGain: 3,
    stability: 15,
    upgrades: 10,
    innateTraits: {
      crushGainTP: 4,
      firingRangeUp: 4,
      potentialBoost: 4
    },
    sellPrice: 10
  },
  archetypeLaunchers: {
    name: "Archetype Launchers",
    type: "Psycho Launchers",
    rarity: "Prime",
    attack: 24,
    level: 40,
    maker: "Sakuraba Industries",
    attribute: "Physical",
    cooldown: 2.0,
    ammo: 6,
    tpGain: 3,
    stability: 8,
    upgrades: 10,
    innateTraits: {
      rangedAttackUp: 8,
      theroidSlayer: 8,
      nullifyPhysicalReflect: 8
    },
    sellPrice: 10
  },
  advancedArchetypePsylans: {
    name: "Advanced Archetype Psylans",
    type: "Psycho Launchers",
    rarity: "Prime",
    attack: 32,
    level: 60,
    maker: "Grenada Galactic Group",
    attribute: "Beam",
    cooldown: 1.8,
    ammo: 5,
    tpGain: 3,
    stability: 15,
    upgrades: 10,
    innateTraits: {
      crushGainTP: 12,
      firingRangeUp: 12,
      potentialBoost: 12
    },
    sellPrice: 10
  },
  originalSaboteurs: {
    name: "Original Saboteurs",
    type: "Psycho Launchers",
    rarity: "Common",
    attack: 72,
    level: 60,
    maker: "Candid & Credible",
    attribute: "Electric",
    cooldown: 2.0,
    ammo: 6,
    tpGain: 3,
    stability: 12,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  originalFwooshers: {
    name: "Original Fwooshers",
    type: "Psycho Launchers",
    rarity: "Common",
    attack: 72,
    level: 60,
    maker: "Nopon Commerce Guild",
    attribute: "Thermal",
    cooldown: 2.5,
    ammo: 8,
    tpGain: 3,
    stability: 15,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  originalZorcyses: {
    name: "Original Zorcyses",
    type: "Psycho Launchers",
    rarity: "Common",
    attack: 72,
    level: 60,
    maker: "Orphean Technologies",
    attribute: "Ether",
    cooldown: 2.0,
    ammo: 5,
    tpGain: 3,
    stability: 15,
    upgrades: 0,
    innateTraits: {},
    sellPrice: 10
  },
  deltaBliss: {
    name: "Delta Bliss",
    type: "Multigun",
    rarity: "Prime",
    attack: 56,
    level: 60,
    maker: "Factory 1.21",
    attribute: "Ether",
    cooldown: 2.0,
    ammo: 12,
    tpGain: 30,
    stability: 30,
    upgrades: 3,
    innateTraits: {
      destabilizer: 7,
      etherAttackPlus: 7,
      openingArtDamageUp: 7
    },
    sellPrice: 4125
  }
};
