
const commonButtons = {
  "add": {
    "text": "add",
    "id": "add",
    iconClass: 'fa-solid fa-plus',
    "children": [
      { "text": "image", "id": "imageField" },
      { "text": "video", "id": "videoField" },
      { "text": "field", "id": "fieldField" },
      { "text": "text", "id": "textField" },
      { "text": "widget", "id": "widgetField" }]
  },
  "duplicate": {
    "text": "duplicate",
    "id": "duplicate",
    "children": [
      { "text": "to all sections", "id": "duplicateSections" },
      { "text": "here once", "id": "duplicateOnce" }]
  },
  "options": {
    "text": "options",
    "id": "options",
    "children": [
      { "text": "hide", "id": "hide" },
      { "text": "disable", "id": "disable" },
      { "text": "advanced", "id": "advanced" }
      ]
  },
  "imgStyle": {
    "text": "style",
    "id": "imgStyle",
    "children": [
      { "text": "shape", "id": "imgShape" },
      { "text": "filter", "id": "imgFilter" },
      { "text": "theme", "id": "imgTheme" }
    ]
  },
  "sectionStyle": {
    "text": "style",
    "id": "sectionStyle",
    "children": [
      { "text": "background", "id": "sectionBackground" },
      { "text": "flow", "id": "sectionFlow" }
      ]
  }, 
  "mediaSrc": {
    "text": "source", 
    "id": "mediaSrc"
  }
};

const global_menus = {
  image: [
    commonButtons.add,
    commonButtons.duplicate,
    commonButtons.imgStyle,
    commonButtons.mediaSrc,
    commonButtons.options
  ],
  video: [
    commonButtons.add,
    commonButtons.duplicate,
    commonButtons.imgStyle,
    commonButtons.mediaSrc,
    commonButtons.options
  ],
  section: [
    commonButtons.add,
    commonButtons.duplicate,
    commonButtons.sectionStyle,
    commonButtons.options
  ],
  radio: [
    commonButtons.add,
    commonButtons.duplicate,
    commonButtons.sectionStyle,
    commonButtons.options
  ],
  checkbox: [
    commonButtons.add,
    commonButtons.duplicate,
    commonButtons.sectionStyle,
    commonButtons.options
  ],
  text: [
    commonButtons.add,
    commonButtons.duplicate,
    commonButtons.sectionStyle,
    commonButtons.options
  ],
  textarea: [
    commonButtons.add,
    commonButtons.duplicate,
    commonButtons.sectionStyle,
    commonButtons.options
  ]
};
