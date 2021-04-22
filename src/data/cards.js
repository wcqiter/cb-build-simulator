export default [
  {
    type: "capa",
    name: "提升戰力值上限",
    display: {
      zh: "提升戰力值上限",
      en: "Raise cost capacitiy",
      jp: ""
    },
    effect: {
      type1: {
        cost: 20,
        capa: 75,
        hp: 10
      },
      type2: {
        cost: 20,
        capa: 80,
        hp: 14
      },
      type3: {
        cost: 20,
        capa: 80,
        hp: 18
      },
      type4: {
        cost: 25,
        capa: 80,
        hp: 14
      },
      type5: {
        cost: 25,
        capa: 85,
        hp: 18
      },
      type6: {
        cost: 25,
        capa: 95,
        hp: 25
      },
      type7: {
        cost: 20,
        capa: 80,
        hp: 10
      },
      type8: {
        cost: 20,
        capa: 90,
        hp: 22
      }
    },
    effectKey: 'capaType',
    num: 6
  },
  {
    type: "weapon",
    name: "強化武器",
    display: {
      zh: "強化武器",
      en: "Enhance internal weapon",
      jp: ""
    },
    effect: {
      type1: {
        cost: 30,
        capa: 60,
        hp: 15
      },
      type2: {
        cost: 30,
        capa: 65,
        hp: 15
      },
      type3: {
        cost: 35,
        capa: 65,
        hp: 15
      },
      type4: {
        cost: 35,
        capa: 70,
        hp: 15
      }
    },
    effectKey: 'weaponType',
    num: 2
  },
  {
    type: "defense",
    name: "近戰防護",
    display: {
      zh: "近戰防護",
      en: "Sword Guard",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 20
      },
      air: {
        cost: 15
      }
    },
    effectKey: "type"
  },
  {
    type: "defense",
    name: "裝甲防護",
    display: {
      zh: "裝甲防護",
      en: "Shell Guard",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 20
      },
      air: {
        cost: 30
      },
      art: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  {
    type: "defense",
    name: "光束防護",
    display: {
      zh: "光束防護",
      en: "Beam Guard",
      jp: ""
    },
    effect: {
      air: {
        cost: 20
      },
      art: {
        cost: 15
      }
    },
    effectKey: "type"
  },
  {
    type: "defense",
    name: "暴風防護",
    display: {
      zh: "暴風防護",
      en: "Blast Guard",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 15
      },
      art: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  
  {
    type: "move",
    name: "緊急迴避",
    display: {
      zh: "緊急迴避",
      en: "Sway",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 15
      },
      art: {
        cost: 20
      },
      msc: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  {
    type: "move",
    name: "高速移動",
    display: {
      zh: "高速移動",
      en: "Boost Run",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 15
      },
      art: {
        cost: 15
      },
      msc: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  {
    type: "move",
    name: "浮游衝刺",
    display: {
      zh: "浮游衝刺",
      en: "Float Dash",
      jp: ""
    },
    effect: {
      air: {
        cost: 15
      },
      art: {
        cost: 20
      },
      msc: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  {
    type: "move",
    name: "短距跳躍",
    display: {
      zh: "短距跳躍",
      en: "Short Boost",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 15
      },
      art: {
        cost: 20
      },
      msc: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  {
    type: "move",
    name: "安定降落",
    display: {
      zh: "安定降落",
      en: "Quick Land",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 25
      },
      air: {
        cost: 25
      },
      art: {
        cost: 25
      },
      msc: {
        cost: 25
      }
    },
    effectKey: "type"
  },
  {
    type: "move",
    name: "高速爬升",
    display: {
      zh: "高速爬升",
      en: "Quick Jump",
      jp: ""
    },
    effect: {
      air: {
        cost: 30
      },
      art: {
        cost: 30
      },
      msc: {
        cost: 30
      }
    },
    effectKey: "type"
  },
  {
    type: "move",
    name: "突擊步伐",
    display: {
      zh: "突擊步伐",
      en: "Assault Step",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 15
      }
    },
    effectKey: "type"
  },
  {
    type: "move",
    name: "噴射步伐",
    display: {
      zh: "噴射步伐",
      en: "Boost Step",
      jp: ""
    },
    effect: {
      art: {
        cost: 15
      }
    },
    effectKey: "type"
  },
  {
    type: "move",
    name: "滑翔噴射",
    display: {
      zh: "滑翔噴射",
      en: "Glide Boost",
      jp: ""
    },
    effect: {
      air: {
        cost: 15
      }
    },
    effectKey: "type"
  },
  {
    type: "move",
    name: "水中步行",
    display: {
      zh: "水中步行",
      en: "Aqua Walk",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 10
      }
    },
    effectKey: "type"
  },
  {
    type: "move",
    name: "空中衝刺",
    display: {
      zh: "空中衝刺",
      en: "Accele Roll",
      jp: ""
    },
    effect: {
      air: {
        cost: 30
      }
    },
    effectKey: "type"
  },
  {
    type: "move",
    name: "空中翻轉",
    display: {
      zh: "空中翻轉",
      en: "Air Loop",
      jp: ""
    },
    effect: {
      air: {
        cost: 30
      }
    },
    effectKey: "type"
  },
  {
    type: "move",
    name: "終極翻滾",
    display: {
      zh: "終極翻滾",
      en: "Ultimate Roll",
      jp: ""
    },
    effect: {
      air: {
        cost: 30
      }
    },
    effectKey: "type"
  },
  
  {
    type: "other",
    name: "推進燃料",
    display: {
      zh: "推進燃料",
      en: "Quick Boost",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 20
      },
      air: {
        cost: 20
      },
      art: {
        cost: 20
      },
      msc: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "爬升之力",
    display: {
      zh: "爬升之力",
      en: "Ascending Force",
      jp: ""
    },
    effect: {
      air: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "強硬突擊",
    display: {
      zh: "強硬突擊",
      en: "Tough Runner",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 20
      },
      msc: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "硬直回復",
    display: {
      zh: "硬直回復",
      en: "Stun Regain",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 15
      },
      air: {
        cost: 20
      },
      art: {
        cost: 30
      },
      msc: {
        cost: 30
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "EX防護",
    display: {
      zh: "EX防護",
      en: "Tough Wonder Bit",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 20
      },
      air: {
        cost: 20
      },
      art: {
        cost: 10
      },
      msc: {
        cost: 10
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "突擊移動",
    display: {
      zh: "突擊移動",
      en: "Moving Burst",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 20
      },
      air: {
        cost: 20
      },
      art: {
        cost: 10
      },
      msc: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "狙擊精準器",
    display: {
      zh: "狙擊精準器",
      en: "Sniper Sight",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 20
      },
      air: {
        cost: 20
      },
      art: {
        cost: 20
      },
      msc: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "反偵測系統",
    display: {
      zh: "反偵測系統",
      en: "Stealth System",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 40
      },
      air: {
        cost: 40
      },
      art: {
        cost: 40
      },
      msc: {
        cost: 40
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "強化雷達",
    display: {
      zh: "強化雷達",
      en: "Broad Radar",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 50
      },
      air: {
        cost: 50
      },
      art: {
        cost: 40
      },
      msc: {
        cost: 30
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "狀態異常抵抗",
    display: {
      zh: "狀態異常抵抗",
      en: "Fast Recovery",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 30
      },
      air: {
        cost: 30
      },
      art: {
        cost: 30
      },
      msc: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "緩速抵抗",
    display: {
      zh: "緩速抵抗",
      en: "Anti Slow",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 20
      },
      msc: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "燃燒抵抗",
    display: {
      zh: "燃燒抵抗",
      en: "Anti Burning",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "超效能散熱器",
    display: {
      zh: "超效能散熱器",
      en: "Hyper Radiator",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "緩衝撞擊",
    display: {
      zh: "緩衝撞擊",
      en: "Absorb Bump",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 20
      },
      air: {
        cost: 15
      },
      art: {
        cost: 15
      },
      msc: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "復仇槍擊",
    display: {
      zh: "復仇槍擊",
      en: "Revenge Shot",
      jp: ""
    },
    effect: {
      air: {
        cost: 30
      },
      art: {
        cost: 25
      },
      msc: {
        cost: 25
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "必殺值增加",
    display: {
      zh: "必殺值增加",
      en: "Wonder Rate Up",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 30
      },
      air: {
        cost: 30
      },
      msc: {
        cost: 20
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "必殺回復",
    display: {
      zh: "必殺回復",
      en: "Growing Wonder",
      jp: ""
    },
    effect: {
      msc: {
        cost: 40
      }
    },
    effectKey: "type"
  },
  {
    type: "other",
    name: "落下充能",
    display: {
      zh: "落下充能",
      en: "Fall Charge",
      jp: ""
    },
    effect: {
      air: {
        cost: 25
      }
    },
    effectKey: "type"
  },
  
  {
    type: "extra-move",
    name: "緊急迴避",
    display: {
      zh: "緊急迴避",
      en: "Sway",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 30
      },
      art: {
        cost: 30
      },
      msc: {
        cost: 30
      }
    },
    effectKey: "type"
  },
  {
    type: "extra-move",
    name: "短距跳躍",
    display: {
      zh: "短距跳躍",
      en: "Short Boost",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 30
      },
      air: {
        cost: 30
      },
      art: {
        cost: 30
      },
      msc: {
        cost: 30
      }
    },
    effectKey: "type"
  },
  {
    type: "extra-move",
    name: "浮游衝刺",
    display: {
      zh: "浮游衝刺",
      en: "Float Dash",
      jp: ""
    },
    effect: {
      air: {
        cost: 30
      },
      art: {
        cost: 30
      },
      msc: {
        cost: 30
      }
    },
    effectKey: "type"
  },
  {
    type: "extra-move",
    name: "突擊墊步",
    display: {
      zh: "突擊墊步",
      en: "Assault Step",
      jp: ""
    },
    effect: {
      lnd: {
        cost: 30
      }
    },
    effectKey: "type"
  },
  {
    type: "extra-move",
    name: "滑翔噴射",
    display: {
      zh: "滑翔噴射",
      en: "Glide Boost",
      jp: ""
    },
    effect: {
      air: {
        cost: 30
      }
    },
    effectKey: "type"
  },
  {
    type: "extra-move",
    name: "推進墊步",
    display: {
      zh: "推進墊步",
      en: "Boost Step",
      jp: ""
    },
    effect: {
      art: {
        cost: 30
      }
    },
    effectKey: "type"
  },
  {
    type: "extra-move",
    name: "空中衝刺",
    display: {
      zh: "空中衝刺",
      en: "Accele Roll",
      jp: ""
    },
    effect: {
      lng: {
        cost: 30
      },
      air: {
        cost: 30
      },
      art: {
        cost: 30
      },
      msc: {
        cost: 30
      }
    },
    effectKey: "type"
  },
  {
    type: "extra-move",
    name: "空中翻轉",
    display: {
      zh: "空中翻轉",
      en: "Air Loop",
      jp: ""
    },
    effect: {
      air: {
        cost: 30
      }
    },
    effectKey: "type"
  },
  {
    type: "extra-move",
    name: "空中墊步",
    display: {
      zh: "空中墊步",
      en: "Air Step",
      jp: ""
    },
    effect: {
      lng: {
        cost: 30
      },
      air: {
        cost: 30
      },
      art: {
        cost: 30
      },
      msc: {
        cost: 30
      }
    },
    effectKey: "type"
  },
  {
    type: "extra-move",
    name: "幻影迴避",
    display: {
      zh: "幻影迴避",
      en: "Slide Boost",
      jp: ""
    },
    effect: {
      air: {
        cost: 30
      }
    },
    effectKey: "type"
  }
];