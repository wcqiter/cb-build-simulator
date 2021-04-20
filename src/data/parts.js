export default [
  {
    type: "BD",
    required: true,
    root: true,
    name: "",
    child: [["HD", "HDJ"], ["LG", "LGJ"], ["BS", "BSJ"], ["AM", "AMJ"], ["AC-T"], ["AC-F"]],
    slot: 3,
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
  },
  {
    type: "HD",
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
  }
];