export default [
  {
    "cat": ["hp"],
    "name": "能量再生",
    display: {
      zh: "能量再生",
      en: "Life",
      jp: ""
    },
    "cost": 10,
    "effect": {
      "hp": 15
    }
  },
  {
    "cat": ["hp"],
    "name": "強化能量再生",
    display: {
      zh: "強化能量再生",
      en: "High Life",
      jp: ""
    },
    "cost": 20,
    "effect": {
      "hp": 25
    }
  },
  {
    "cat": ["hp"],
    "name": "進化能量再生",
    display: {
      zh: "進化能量再生",
      en: "Great Life",
      jp: ""
    },
    "cost": 35,
    "effect": {
      "hp": 40
    }
  },
  
  {
    "cat": ["tgh", "hp"],
    "name": "守衛",
    display: {
      zh: "守衛",
      en: "Sentinel",
      jp: ""
    },
    "cost": 15,
    "effect": {
      "hp": 8,
      "tgh": 1
    }
  },
  {
    "cat": ["str", "hp"],
    "name": "野獸",
    display: {
      zh: "野獸",
      en: "Beast",
      jp: ""
    },
    "cost": 15,
    "effect": {
      "hp": 8,
      "str": 1
    }
  },
  {
    "cat": ["tec", "hp"],
    "name": "遊俠",
    display: {
      zh: "遊俠",
      en: "Ranger",
      jp: ""
    },
    "cost": 15,
    "effect": {
      "hp": 8,
      "tec": 1
    }
  },
  {
    "cat": ["wlk", "hp"],
    "name": "坦克",
    display: {
      zh: "坦克",
      en: "Tank",
      jp: ""
    },
    "cost": 15,
    "effect": {
      "hp": 8,
      "wlk": 1
    }
  },
  {
    "cat": ["fly", "hp"],
    "name": "飛鷹",
    display: {
      zh: "飛鷹",
      en: "Eagle",
      jp: ""
    },
    "cost": 15,
    "effect": {
      "hp": 8,
      "fly": 1
    }
  },
  {
    "cat": ["tgh", "hp"],
    "name": "高級守衛",
    display: {
      zh: "高級守衛",
      en: "High Sentinel",
      jp: ""
    },
    "cost": 40,
    "effect": {
      "hp": 25,
      "tgh": 2
    }
  },
  {
    "cat": ["str", "hp"],
    "name": "高級野獸",
    display: {
      zh: "高級野獸",
      en: "High Beast",
      jp: ""
    },
    "cost": 35,
    "effect": {
      "hp": 20,
      "str": 2,
      "tec": -1
    }
  },
  {
    "cat": ["tec", "hp"],
    "name": "高級遊俠",
    display: {
      zh: "高級遊俠",
      en: "High Ranger",
      jp: ""
    },
    "cost": 35,
    "effect": {
      "hp": 20,
      "tec": 2,
      "str": -1
    }
  },
  {
    "cat": ["wlk", "hp"],
    "name": "高級坦克",
    display: {
      zh: "高級坦克",
      en: "High Tank",
      jp: ""
    },
    "cost": 35,
    "effect": {
      "hp": 20,
      "wlk": 2,
      "fly": -1
    }
  },
  {
    "cat": ["fly", "hp"],
    "name": "高級飛鷹",
    display: {
      zh: "高級飛鷹",
      en: "High Eagle",
      jp: ""
    },
    "cost": 35,
    "effect": {
      "hp": 20,
      "fly": 2,
      "wlk": -1
    }
  },
  
  {
    "cat": ["str", "tec"],
    "name": "突擊",
    display: {
      zh: "遊俠",
      en: "",
      jp: ""
    },
    "cost": 15,
    "effect": {
      "str": 1,
      "tec": 1
    }
  },
  {
    "cat": ["str", "tec"],
    "name": "高級突擊",
    display: {
      zh: "遊俠",
      en: "",
      jp: ""
    },
    "cost": 35,
    "effect": {
      "str": 2,
      "tec": 2
    }
  },
  
  {
    "cat": ["wlk", "fly"],
    "name": "高速",
    display: {
      zh: "遊俠",
      en: "",
      jp: ""
    },
    "cost": 15,
    "effect": {
      "wlk": 1,
      "fly": 1
    }
  },
  {
    "cat": ["wlk", "fly"],
    "name": "高級高速",
    display: {
      zh: "遊俠",
      en: "",
      jp: ""
    },
    "cost": 35,
    "effect": {
      "wlk": 2,
      "fly": 2
    }
  },
  
  {
    "cat": ["tgh"],
    "name": "體質能源",
    display: {
      zh: "體質能源",
      en: "Tough",
      jp: ""
    },
    "cost": 5,
    "effect": {
      "tgh": 1
    }
  },
  {
    "cat": ["tgh"],
    "name": "高級體質能源",
    display: {
      zh: "高級體質能源",
      en: "High Tough",
      jp: ""
    },
    "cost": 15,
    "effect": {
      "tgh": 2
    }
  },
  {
    "cat": ["tgh"],
    "name": "高級體質能源α",
    display: {
      zh: "高級體質能源α",
      en: "High Tough Alpha",
      jp: ""
    },
    "cost": 10,
    "effect": {
      "tgh": 2,
      "wlk": -1
    }
  },
  {
    "cat": ["tgh"],
    "name": "高級體質能源β",
    display: {
      zh: "高級體質能源β",
      en: "High Tough Beta",
      jp: ""
    },
    "cost": 10,
    "effect": {
      "tgh": 2,
      "fly": -1
    }
  },
  {
    "cat": ["tgh"],
    "name": "高級體質能源γ",
    display: {
      zh: "高級體質能源γ",
      en: "High Tough Gamma",
      jp: ""
    },
    "cost": 5,
    "effect": {
      "tgh": 2,
      "wlk": -1,
      "fly": -1
    }
  },
  {
    "cat": ["tgh"],
    "name": "頂級體質能源",
    display: {
      zh: "頂級體質能源",
      en: "Great Tough",
      jp: ""
    },
    "cost": 30,
    "effect": {
      "tgh": 3
    }
  },
  {
    "cat": ["tgh"],
    "name": "頂級體質能源α",
    display: {
      zh: "頂級體質能源α",
      en: "Great Tough Alpha",
      jp: ""
    },
    "cost": 20,
    "effect": {
      "tgh": 3,
      "wlk": -1,
      "fly": -1
    }
  },
  {
    "cat": ["tgh"],
    "name": "頂級體質能源β",
    display: {
      zh: "頂級體質能源β",
      en: "Great Tough Beta",
      jp: ""
    },
    "cost": 10,
    "effect": {
      "tgh": 3,
      "str": -1,
      "tec": -1,
      "fly": -1,
      "wlk": -1
    }
  },
  
  {
    "cat": ["str"],
    "name": "力之能源",
    display: {
      zh: "力之能源",
      en: "Power",
      jp: ""
    },
    "cost": 5,
    "effect": {
      "str": 1
    }
  },
  {
    "cat": ["str"],
    "name": "高級力之能源",
    display: {
      zh: "高級力之能源",
      en: "High Power",
      jp: ""
    },
    "cost": 15,
    "effect": {
      "str": 2
    }
  },
  {
    "cat": ["str"],
    "name": "高級力之能源α",
    display: {
      zh: "高級力之能源α",
      en: "High Power Alpha",
      jp: ""
    },
    "cost": 10,
    "effect": {
      "str": 2,
      "tec": -1
    }
  },
  {
    "cat": ["str"],
    "name": "高級力之能源β",
    display: {
      zh: "高級力之能源β",
      en: "High Power Beta",
      jp: ""
    },
    "cost": 5,
    "effect": {
      "str": 2,
      "tec": -1,
      "wlk": -1
    }
  },
  {
    "cat": ["str"],
    "name": "高級力之能源γ",
    display: {
      zh: "高級力之能源γ",
      en: "High Power Gamma",
      jp: ""
    },
    "cost": 5,
    "effect": {
      "str": 2,
      "tec": -1,
      "fly": -1
    }
  },
  {
    "cat": ["str"],
    "name": "頂級力之能源",
    display: {
      zh: "頂級力之能源",
      en: "Great Power",
      jp: ""
    },
    "cost": 30,
    "effect": {
      "str": 3
    }
  },
  {
    "cat": ["str"],
    "name": "頂級力之能源α",
    display: {
      zh: "頂級力之能源α",
      en: "Great Power Alpha",
      jp: ""
    },
    "cost": 20,
    "effect": {
      "str": 3,
      "tec": -1,
      "wlk": -1
    }
  },
  {
    "cat": ["str"],
    "name": "頂級力之能源β",
    display: {
      zh: "頂級力之能源β",
      en: "Great Power Beta",
      jp: ""
    },
    "cost": 20,
    "effect": {
      "str": 3,
      "tec": -1,
      "fly": -1
    }
  },
  {
    "cat": ["str"],
    "name": "頂級力之能源γ",
    display: {
      zh: "頂級力之能源γ",
      en: "Great Power Gamma",
      jp: ""
    },
    "cost": 10,
    "effect": {
      "str": 3,
      "tec": -1,
      "wlk": -1,
      "fly": -1,
      "tgh": -1
    }
  },
  
  {
    "cat": ["tec"],
    "name": "技之能源",
    display: {
      zh: "技之能源",
      en: "Technique",
      jp: ""
    },
    "cost": 5,
    "effect": {
      "tec": 1
    }
  },
  {
    "cat": ["tec"],
    "name": "高級技之能源",
    display: {
      zh: "高級技之能源",
      en: "Great Technique",
      jp: ""
    },
    "cost": 15,
    "effect": {
      "tec": 2
    }
  },
  {
    "cat": ["tec"],
    "name": "高級技之能源α",
    display: {
      zh: "高級技之能源α",
      en: "Great Technique Alpha",
      jp: ""
    },
    "cost": 10,
    "effect": {
      "tec": 2,
      "str": -1
    }
  },
  {
    "cat": ["tec"],
    "name": "高級技之能源β",
    display: {
      zh: "高級技之能源β",
      en: "High Technique Beta",
      jp: ""
    },
    "cost": 5,
    "effect": {
      "tec": 2,
      "str": -1,
      "wlk": -1
    }
  },
  {
    "cat": ["tec"],
    "name": "高級技之能源γ",
    display: {
      zh: "高級技之能源γ",
      en: "High Technique Gamma",
      jp: ""
    },
    "cost": 5,
    "effect": {
      "tec": 2,
      "str": -1,
      "fly": -1
    }
  },
  {
    "cat": ["tec"],
    "name": "頂級技之能源",
    display: {
      zh: "頂級技之能源",
      en: "Great Technique",
      jp: ""
    },
    "cost": 30,
    "effect": {
      "tec": 3
    }
  },
  {
    "cat": ["tec"],
    "name": "頂級技之能源α",
    display: {
      zh: "頂級技之能源α",
      en: "Great Technique Alpha",
      jp: ""
    },
    "cost": 20,
    "effect": {
      "tec": 3,
      "str": -1,
      "wlk": -1
    }
  },
  {
    "cat": ["tec"],
    "name": "頂級技之能源β",
    display: {
      zh: "頂級技之能源β",
      en: "Great Technique Beta",
      jp: ""
    },
    "cost": 20,
    "effect": {
      "tec": 3,
      "str": -1,
      "fly": -1
    }
  },
  {
    "cat": ["tec"],
    "name": "頂級技之能源γ",
    display: {
      zh: "頂級技之能源γ",
      en: "Great Technique Gamma",
      jp: ""
    },
    "cost": 10,
    "effect": {
      "tec": 3,
      "str": -1,
      "wlk": -1,
      "fly": -1,
      "tgh": -1
    }
  },
  
  {
    "cat": ["wlk"],
    "name": "動之能源",
    display: {
      zh: "動之能源",
      en: "Run",
      jp: ""
    },
    "cost": 5,
    "effect": {
      "wlk": 1
    }
  },
  {
    "cat": ["wlk"],
    "name": "高級動之能源",
    display: {
      zh: "高級動之能源",
      en: "High Run",
      jp: ""
    },
    "cost": 15,
    "effect": {
      "wlk": 2
    }
  },
  {
    "cat": ["wlk"],
    "name": "高級動之能源α",
    display: {
      zh: "高級動之能源α",
      en: "High Run Alpha",
      jp: ""
    },
    "cost": 10,
    "effect": {
      "wlk": 2,
      "fly": -1
    }
  },
  {
    "cat": ["wlk"],
    "name": "高級動之能源β",
    display: {
      zh: "高級動之能源β",
      en: "High Run Beta",
      jp: ""
    },
    "cost": 5,
    "effect": {
      "wlk": 2,
      "str": -1,
      "fly": -1
    }
  },
  {
    "cat": ["wlk"],
    "name": "高級動之能源γ",
    display: {
      zh: "高級動之能源γ",
      en: "High Run Gamma",
      jp: ""
    },
    "cost": 5,
    "effect": {
      "wlk": 2,
      "tec": -1,
      "fly": -1
    }
  },
  {
    "cat": ["wlk"],
    "name": "頂級動之能源",
    display: {
      zh: "頂級動之能源",
      en: "Great Run",
      jp: ""
    },
    "cost": 30,
    "effect": {
      "wlk": 3
    }
  },
  {
    "cat": ["wlk"],
    "name": "頂級動之能源α",
    display: {
      zh: "頂級動之能源α",
      en: "Great Run Alpha",
      jp: ""
    },
    "cost": 20,
    "effect": {
      "wlk": 3,
      "str": -1,
      "fly": -1
    }
  },
  {
    "cat": ["wlk"],
    "name": "頂級動之能源β",
    display: {
      zh: "頂級動之能源β",
      en: "Great Run Beta",
      jp: ""
    },
    "cost": 20,
    "effect": {
      "wlk": 3,
      "tec": -1,
      "fly": -1
    }
  },
  {
    "cat": ["wlk"],
    "name": "頂級動之能源γ",
    display: {
      zh: "頂級動之能源γ",
      en: "Great Run Gamma",
      jp: ""
    },
    "cost": 10,
    "effect": {
      "wlk": 3,
      "str": -1,
      "tec": -1,
      "fly": -1,
      "tgh": -1
    }
  },
  
  {
    "cat": ["fly"],
    "name": "飛行能源",
    display: {
      zh: "飛行能源",
      en: "Boost",
      jp: ""
    },
    "cost": 5,
    "effect": {
      "fly": 1
    }
  },
  {
    "cat": ["fly"],
    "name": "高級飛行能源",
    display: {
      zh: "高級飛行能源",
      en: "High Boost",
      jp: ""
    },
    "cost": 15,
    "effect": {
      "fly": 2
    }
  },
  {
    "cat": ["fly"],
    "name": "高級飛行能源α",
    display: {
      zh: "高級飛行能源α",
      en: "High Boost Alpha",
      jp: ""
    },
    "cost": 10,
    "effect": {
      "fly": 2,
      "wlk": -1
    }
  },
  {
    "cat": ["fly"],
    "name": "高級飛行能源β",
    display: {
      zh: "高級飛行能源β",
      en: "High Boost Beta",
      jp: ""
    },
    "cost": 5,
    "effect": {
      "fly": 2,
      "str": -1,
      "wlk": -1
    }
  },
  {
    "cat": ["fly"],
    "name": "高級飛行能源γ",
    display: {
      zh: "高級飛行能源γ",
      en: "High Boost Gamma",
      jp: ""
    },
    "cost": 5,
    "effect": {
      "fly": 2,
      "tec": -1,
      "wlk": -1
    }
  },
  {
    "cat": ["fly"],
    "name": "頂級飛行能源",
    display: {
      zh: "頂級飛行能源",
      en: "Great Boost",
      jp: ""
    },
    "cost": 30,
    "effect": {
      "fly": 3
    }
  },
  {
    "cat": ["fly"],
    "name": "頂級飛行能源α",
    display: {
      zh: "頂級飛行能源α",
      en: "Great Boost Alpha",
      jp: ""
    },
    "cost": 20,
    "effect": {
      "fly": 3,
      "str": -1,
      "wlk": -1
    }
  },
  {
    "cat": ["fly"],
    "name": "頂級飛行能源β",
    display: {
      zh: "頂級飛行能源β",
      en: "Great Boost Beta",
      jp: ""
    },
    "cost": 20,
    "effect": {
      "fly": 3,
      "tec": -1,
      "wlk": -1
    }
  },
  {
    "cat": ["fly"],
    "name": "頂級飛行能源γ",
    display: {
      zh: "頂級飛行能源γ",
      en: "Great Boost Gamma",
      jp: ""
    },
    "cost": 10,
    "effect": {
      "fly": 3,
      "str": -1,
      "tec": -1,
      "wlk": -1,
      "tgh": -1
    }
  },
  
  {
    "cat": ["other"],
    "name": "永恆之光",
    display: {
      zh: "永恆之光",
      en: "Eternal",
      jp: ""
    },
    "cost": 5,
    "effect": {}
  },
  {
    "cat": ["other", "hp"],
    "name": "高等永恆之光",
    display: {
      zh: "高等永恆之光",
      en: "High Eternal",
      jp: ""
    },
    "cost": 15,
    "effect": {
      "hp": 8
    }
  },
  
  {
    "cat": ["main"],
    "name": "強力",
    display: {
      zh: "強力",
      en: "Force",
      jp: ""
    },
    "cost": 10,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "高級強力",
    display: {
      zh: "高級強力",
      en: "High Force",
      jp: ""
    },
    "cost": 25,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "高級強力α",
    display: {
      zh: "高級強力α",
      en: "High Force Alpha",
      jp: ""
    },
    "cost": 20,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "高級強力β",
    display: {
      zh: "高級強力β",
      en: "High Force Beta",
      jp: ""
    },
    "cost": 20,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "高級強力γ",
    display: {
      zh: "高級強力γ",
      en: "High Force Gamma",
      jp: ""
    },
    "cost": 20,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "頂級強力",
    display: {
      zh: "頂級強力",
      en: "Great Force",
      jp: ""
    },
    "cost": 40,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "頂級強力α",
    display: {
      zh: "頂級強力α",
      en: "Great Force Alpha",
      jp: ""
    },
    "cost": 30,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "頂級強力β",
    display: {
      zh: "頂級強力β",
      en: "Great Force Beta",
      jp: ""
    },
    "cost": 30,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "頂級強力γ",
    display: {
      zh: "頂級強力γ",
      en: "Great Force Gamma",
      jp: ""
    },
    "cost": 30,
    "effect": {}
  },
  
  {
    "cat": ["main"],
    "name": "射程",
    display: {
      zh: "射程",
      en: "Reach",
      jp: ""
    },
    "cost": 5,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "高級射程",
    display: {
      zh: "高級射程",
      en: "High Reach",
      jp: ""
    },
    "cost": 15,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "高級射程α",
    display: {
      zh: "高級射程α",
      en: "High Reach Alpha",
      jp: ""
    },
    "cost": 10,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "高級射程β",
    display: {
      zh: "高級射程β",
      en: "High Reach Beta",
      jp: ""
    },
    "cost": 10,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "頂級射程",
    display: {
      zh: "頂級射程",
      en: "Great Reach",
      jp: ""
    },
    "cost": 30,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "頂級射程α",
    display: {
      zh: "頂級射程α",
      en: "Great Reach Alpha",
      jp: ""
    },
    "cost": 20,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "頂級射程β",
    display: {
      zh: "頂級射程β",
      en: "Great Reach Beta",
      jp: ""
    },
    "cost": 20,
    "effect": {}
  },
  
  {
    "cat": ["main"],
    "name": "疾速",
    display: {
      zh: "疾速",
      en: "Rapid",
      jp: ""
    },
    "cost": 5,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "高級疾速",
    display: {
      zh: "高級疾速",
      en: "High Rapid",
      jp: ""
    },
    "cost": 15,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "高級疾速α",
    display: {
      zh: "高級疾速α",
      en: "High Rapid Alpha",
      jp: ""
    },
    "cost": 10,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "高級疾速β",
    display: {
      zh: "高級疾速β",
      en: "High Rapid Beta",
      jp: ""
    },
    "cost": 10,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "頂級疾速",
    display: {
      zh: "頂級疾速",
      en: "Great Rapid",
      jp: ""
    },
    "cost": 30,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "頂級疾速α",
    display: {
      zh: "頂級疾速α",
      en: "Great Rapid Alpha",
      jp: ""
    },
    "cost": 20,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "頂級疾速β",
    display: {
      zh: "頂級疾速β",
      en: "Great Rapid Beta",
      jp: ""
    },
    "cost": 20,
    "effect": {}
  },
  
  {
    "cat": ["main"],
    "name": "補給",
    display: {
      zh: "補給",
      en: "Supply",
      jp: ""
    },
    "cost": 5,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "高級補給",
    display: {
      zh: "高級補給",
      en: "High Supply",
      jp: ""
    },
    "cost": 15,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "高級補給α",
    display: {
      zh: "高級補給α",
      en: "High Supply Alpha",
      jp: ""
    },
    "cost": 10,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "高級補給β",
    display: {
      zh: "高級補給β",
      en: "High Supply Beta",
      jp: ""
    },
    "cost": 10,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "頂級補給",
    display: {
      zh: "頂級補給",
      en: "Great Supply",
      jp: ""
    },
    "cost": 30,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "頂級補給α",
    display: {
      zh: "頂級補給α",
      en: "Great Supply Alpha",
      jp: ""
    },
    "cost": 20,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "頂級補給β",
    display: {
      zh: "頂級補給β",
      en: "Great Supply Beta",
      jp: ""
    },
    "cost": 20,
    "effect": {}
  },
  
  {
    "cat": ["main"],
    "name": "空戰",
    display: {
      zh: "空戰",
      en: "Air Force",
      jp: ""
    },
    "cost": 20,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "高級空戰",
    display: {
      zh: "高級空戰",
      en: "High Air Force",
      jp: ""
    },
    "cost": 45,
    "effect": {}
  },
  
  {
    "cat": ["main"],
    "name": "射手",
    display: {
      zh: "射手",
      en: "Shooter",
      jp: ""
    },
    "cost": 20,
    "effect": {}
  },
  {
    "cat": ["main"],
    "name": "高級射手",
    display: {
      zh: "高級射手",
      en: "High Shooter",
      jp: ""
    },
    "cost": 45,
    "effect": {}
  },
  
  {
    "cat": ["main"],
    "name": "麻痺",
    display: {
      zh: "麻痺",
      en: "Paralyze",
      jp: ""
    },
    "cost": 25,
    "effect": {}
  },
  
  {
    "cat": ["sub"],
    "name": "劍鬥士",
    display: {
      zh: "劍鬥士",
      en: "Gladiator",
      jp: ""
    },
    "cost": 20,
    "effect": {}
  },
  {
    "cat": ["sub"],
    "name": "高級劍鬥士",
    display: {
      zh: "高級劍鬥士",
      en: "High Gladiator",
      jp: ""
    },
    "cost": 45,
    "effect": {}
  },
  
  {
    "cat": ["sub"],
    "name": "格鬥家",
    display: {
      zh: "格鬥家",
      en: "Grappler",
      jp: ""
    },
    "cost": 10,
    "effect": {}
  },
  {
    "cat": ["sub"],
    "name": "高級格鬥家",
    display: {
      zh: "高級格鬥家",
      en: "High Grappler",
      jp: ""
    },
    "cost": 25,
    "effect": {}
  },
  {
    "cat": ["sub"],
    "name": "高級格鬥家α",
    display: {
      zh: "高級格鬥家α",
      en: "High Grappler Alpha",
      jp: ""
    },
    "cost": 20,
    "effect": {}
  },
  {
    "cat": ["sub"],
    "name": "頂級格鬥家",
    display: {
      zh: "頂級格鬥家",
      en: "Great Grappler",
      jp: ""
    },
    "cost": 40,
    "effect": {}
  },
  {
    "cat": ["sub"],
    "name": "頂級格鬥家α",
    display: {
      zh: "頂級格鬥家α",
      en: "Great Grappler Alpha",
      jp: ""
    },
    "cost": 30,
    "effect": {}
  }
];