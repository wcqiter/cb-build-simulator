export default [
  {
    type: "BD",
    required: true, 
    name: "",
    child: [["HD1", "HDJ1"], ["HD2", "HDJ2"], ["LG", "LGJ"], ["BS", "BSJ"], ["AM1", "AMJ1"], ["AM2", "AMJ2"], ["AC-T"], ["AC-F"]],
    slot: 0,
    stat: {
      cost: 0,
      capa: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: []
  },
  {
    type: "HD1",
    required: false,
    root: false,
    name: "",
    child: [["AC-T"], ["AC-F"]],
    slot: 3,
    stat: {
      cost: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: []
  },
  {
    type: "HDJ1",
    required: false,
    root: false,
    name: "",
    child: [["HD1"]],
    slot: 1,
    stat: {
      cost: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: ['other']
  },
  {
    type: "HD2",
    required: false,
    root: false,
    name: "",
    child: [["AC-T"], ["AC-F"]],
    slot: 3,
    stat: {
      cost: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: []
  },
  {
    type: "HDJ2",
    required: false,
    root: false,
    name: "",
    child: [["HD2"]],
    slot: 1,
    stat: {
      cost: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: ['other']
  },
  {
    type: "LGJ",
    required: false,
    root: false,
    name: "",
    child: [["LG"]],
    slot: 1,
    stat: {
      cost: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: ['other']
  },
  {
    type: "LG",
    required: true,
    root: false,
    name: "",
    child: [],
    slot: 3,
    stat: {
      cost: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: ['other']
  },
  {
    type: "BSJ",
    required: false,
    root: false,
    name: "",
    child: [["BS"]],
    slot: 1,
    stat: {
      cost: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: ['other']
  },
  {
    type: "BS",
    required: true,
    root: false,
    name: "",
    child: [],
    slot: 3,
    stat: {
      cost: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: ['other']
  },
  {
    type: "AMJ1",
    required: false,
    root: false,
    name: "",
    child: [["AM1"]],
    slot: 1,
    stat: {
      cost: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: ['other']
  },
  {
    type: "AMJ2",
    required: false,
    root: false,
    name: "",
    child: [["AM2"]],
    slot: 1,
    stat: {
      cost: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: ['other']
  },
  {
    type: "AM1",
    required: false,
    root: false,
    name: "",
    child: [["MAIN", "SUB"]],
    slot: 3,
    stat: {
      cost: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: []
  },
  {
    type: "AM2",
    required: false,
    root: false,
    name: "",
    child: [["MAIN", "SUB"]],
    slot: 3,
    stat: {
      cost: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: []
  },
  {
    type: "MAIN",
    required: false,
    root: false,
    name: "",
    child: [],
    slot: 3,
    stat: {
      cost: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: []
  },
  {
    type: "SUB",
    required: false,
    root: false,
    name: "",
    child: [],
    slot: 3,
    stat: {
      cost: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: []
  },
  {
    type: "AC-T",
    required: false,
    root: false,
    name: "",
    child: [],
    slot: 1,
    stat: {
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: []
  },
  {
    type: "AC-F",
    required: false,
    root: false,
    name: "",
    child: [],
    slot: 1,
    stat: {
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: []
  },
];