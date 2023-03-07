import { height_box_main_right, width_box_main_right } from "../utils/variables.js";

const template = document.createElement('template');

template.innerHTML = ``;

export class MainComponentRight extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.div = document.createElement("div");
    this.div.setAttribute("class", "card-main-right");
    this.shadow.appendChild(this.div);
    this.shadow.appendChild(template.content.cloneNode(true));
  }
}