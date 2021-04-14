export default [
  {
    type: "capa",
    name: "提升戰力值上限",
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
      }
    },
    effectKey: 'capaType',
    num: 6
  },
  {
    type: "weapon",
    name: "強化武器",
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
    effect: {
      air: {
        cost: 20
      }
    },
    effectKey: null
  },
  {
    type: "other",
    name: "強硬突擊",
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
    effect: {
      air: {
        cost: 30
      }
    },
    effectKey: "type"
  }
];