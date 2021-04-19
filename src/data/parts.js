export default [
  {
    type: "BD",
    required: true,
    root: true,
    name: "",
    child: ["HD", "LG", "BS", "AM", "AMJ", "BSJ", "HDJ", "LGJ", "ACT", "ACF", "MAIN", "SUB", "ETC"],
    slot: 3,
  },
  {
    type: "HD",
    required: false,
    root: false,
    name: "",
    child: ["ACT", "ACF"],
    slot: 3,
  }
];