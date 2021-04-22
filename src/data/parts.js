export default [
  {
    type: "BD",
    required: true, 
    name: "",
    child: [["HD1", "HDJ1"], ["HD2", "HDJ2"], ["LG", "LGJ"], ["BS", "BSJ"], ["AM1", "AMJ1"], ["AM2", "AMJ2"], ["AC-T"], ["AC-F"], ["MAIN"], ["SUB"], ["MEMORY1"], ["MEMORY2"], ["MEMORY3"], ["MEMORY4"], ["MEMORY5"]],
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
    exceptCat: [],
    tag: []
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
    exceptCat: [],
    tag: []
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
    exceptCat: ['other'],
    tag: []
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
    exceptCat: [],
    tag: []
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
    exceptCat: ['other'],
    tag: []
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
    exceptCat: ['other'],
    tag: []
  },
  {
    type: "LG",
    required: true,
    root: false,
    name: "",
    child: [["BSJ", "BS"]],
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
    exceptCat: ['other'],
    tag: []
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
    exceptCat: ['other'],
    tag: []
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
    exceptCat: ['other'],
    tag: []
  },
  {
    type: "AMJ1",
    required: false,
    root: false,
    name: "",
    child: [["AM1"], ["AM2"]],
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
    exceptCat: ['other'],
    tag: []
  },
  {
    type: "AMJ2",
    required: false,
    root: false,
    name: "",
    child: [["AM1"], ["AM2"]],
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
    exceptCat: ['other'],
    tag: []
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
    exceptCat: [],
    tag: []
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
    exceptCat: [],
    tag: []
  },
  {
    type: "MAIN",
    required: false,
    root: false,
    name: "",
    child: [["SUB"]],
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
    exceptCat: ['other'],
    tag: ["main"]
  },
  {
    type: "SUB",
    required: false,
    root: false,
    name: "",
    child: [["MAIN"]],
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
    exceptCat: ['other'],
    tag: ["sub"]
  },
  {
    type: "AC-T",
    required: false,
    root: false,
    name: "",
    child: [],
    slot: 1,
    stat: {
      capa: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: ['other'],
    tag: []
  },
  {
    type: "AC-F",
    required: false,
    root: false,
    name: "",
    child: [],
    slot: 1,
    stat: {
      capa: 0,
      hp: 0,
      str: 0,
      tec: 0,
      wlk: 0,
      fly: 0,
      tgh: 0
    },
    exceptCat: ['other'],
    tag: []
  },
  {
    type: "MEMORY1",
    required: false,
    root: false,
    name: "",
    child: [],
    slot: 3,
    stat: {},
    exceptCat: ['other']
  },
  {
    type: "MEMORY2",
    required: false,
    root: false,
    name: "",
    child: [],
    slot: 3,
    stat: {},
    exceptCat: ['other'],
    tag: []
  },
  {
    type: "MEMORY3",
    required: false,
    root: false,
    name: "",
    child: [],
    slot: 3,
    stat: {},
    exceptCat: ['other'],
    tag: []
  },
  {
    type: "MEMORY4",
    required: false,
    root: false,
    name: "",
    child: [],
    slot: 3,
    stat: {},
    exceptCat: ['other'],
    tag: []
  },
  {
    type: "MEMORY5",
    required: false,
    root: false,
    name: "",
    child: [],
    slot: 3,
    stat: {},
    exceptCat: ['other'],
    tag: []
  },
];