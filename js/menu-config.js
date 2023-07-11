const allButtons = {
  add: {
    text: "add",
    id: "add",
    iconClass: "fa-solid fa-plus",
    children: [
      { text: "image", id: "addImage" },
      { text: "video", id: "addVideo" },
      { text: "field", id: "addField" },
      { text: "text", id: "addText" },
    ],
  },
  duplicate: {
    text: "duplicate",
    id: "duplicate",
    children: [
      { text: "to all sections", id: "duplicateSections" },
      { text: "here once", id: "duplicateOnce" },
    ],
  },
  options: {
    text: "options",
    id: "options",
    children: [
      { text: "hide", id: "hide" },
      { text: "disable", id: "disable" },
      { text: "advanced", id: "advanced" },
    ],
  },
  imgStyle: {
    text: "style",
    id: "imgStyle",
    children: [
      { text: "shape", id: "imgShape" },
      { text: "mask", id: "mask" },
      { text: "theme", id: "theme" },
    ],
  },
  style: {
    text: "style",
    id: "style",
    children: [
      { text: "background", id: "sectionBackground" },
      { text: "flow", id: "sectionFlow" },
      { text: "theme", id: "theme" },
    ],
  },
  fieldStyle: {
    text: "style",
    id: "fieldStyle",
    children: [
      { text: "flow", id: "fieldFlow" },
      { text: "theme", id: "theme" },
    ],
  },
  mediaSrc: {
    text: "source",
    id: "mediaSrc",
    html: `<input type="text" />`
  },
  imgShape: {
    text: "shape",
    id: "imgShape",
  },
  background: {
    text: "background",
    id: "background",
  },
  flow: {
    text: "flow",
    id: "flow",
  },
  autoplay: {
    text: "autoplay",
    id: "autoplay",
    children: [
      { text: "on", id: "autoPlayOn" },
      { text: "off", id: "autoPlayOff" }
    ]
  },
  change: {
    text: "change",
    id: "change",
    children: [
      { text: "image", id: "addImage" },
      { text: "video", id: "addVideo" },
      { text: "field", id: "addField" },
      { text: "text", id: "addText" },
    ],
  },
  theme: {
    text: "theme",
    id: "theme",
  },
  buttonStyle: {
    text: "style",
    id: "buttonStyle",
    children: [
      { text: "background", id: "background" },
      { text: "shape", id: "shape" },
      { text: "theme", id: "theme" },
    ],
  },
  buttonOptions: {
    text: "options",
    id: "options",
    children: [
      { text: "rules", id: "rules" },
    ],
  },
  minMaxInc: {
    text: "min/max/inc",
    id: "minMaxInc",
  },
  numSelectable: {
    text: "selectable",
    id: "numSelectable",
    children: [
      { text: "one", id: "one" },
      { text: "all", id: "all" },
    ],
  },
  titlePosition: {
    text: "title",
    id: "titlePosition",
    children: [
      { text: "top", id: "top" },
      { text: "right", id: "right" },
      { text: "bottom", id: "bottom" },
      { text: "left", id: "left" },
      { text: "center", id: "center" },
    ],
  },
  align: {
    text: "align",
    id: "align",
    children: [
      { text: "top", id: "top" },
      { text: "right", id: "right" },
      { text: "bottom", bottom: "bottom" },
      { text: "left", id: "left" },
    ],
  },
  group: {
    text: "group",
    id: "group",
  },
};

const global_menus = {
  section: [
    allButtons.add,
    allButtons.duplicate,
    allButtons.change,
    allButtons.style,
    allButtons.options,
  ],
  image: [
    allButtons.add,
    allButtons.duplicate,
    allButtons.change,
    allButtons.imgStyle,
    allButtons.mediaSrc,
    allButtons.options,
  ],
  video: [
    allButtons.add,
    allButtons.duplicate,
    allButtons.change,
    allButtons.mediaSrc,
    allButtons.autoplay,
    allButtons.options,
  ],
  radio: [
    allButtons.add,
    allButtons.duplicate,
    allButtons.change,
    allButtons.style,
    allButtons.options,
  ],
  checkbox: [
    allButtons.add,
    allButtons.duplicate,
    allButtons.change,
    allButtons.style,
    allButtons.options,
  ],
  dropdown: [
    allButtons.add,
    allButtons.duplicate,
    allButtons.change,
    allButtons.style,
    allButtons.options,
  ],
  text: [
    allButtons.add,
    allButtons.duplicate,
    allButtons.change,
    allButtons.style,
    allButtons.options,
  ],
  textarea: [
    allButtons.add,
    allButtons.duplicate,
    allButtons.change,
    allButtons.style,
    allButtons.options,
  ],
  button: [
    allButtons.add,
    allButtons.duplicate,
    allButtons.change,
    allButtons.buttonStyle,
    allButtons.buttonOptions,
  ],
  slider: [
    allButtons.add,
    allButtons.duplicate,
    allButtons.change,
    allButtons.theme,
    allButtons.minMaxInc,
  ],
  filterList: [
    allButtons.add,
    allButtons.duplicate,
    allButtons.change,
    allButtons.style,
    allButtons.options,
  ],
  graphical: [
    allButtons.add,
    allButtons.duplicate,
    allButtons.change,
    allButtons.style,
    allButtons.titlePosition,
    allButtons.numSelectable,
    allButtons.options,
  ],
  multiple: [
    allButtons.add,
    allButtons.duplicate,
    allButtons.align,
    allButtons.group,
  ],
  subform: [
    allButtons.add,
    allButtons.duplicate,
    allButtons.options,
  ],
};