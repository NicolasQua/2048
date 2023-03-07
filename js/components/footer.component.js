import { height_box_header, width_box_header } from "../utils/variables.js";

const template = document.createElement('template');

template.innerHTML = "";

export class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.div = document.createElement("div");
    this.div.setAttribute("class", "card-footer");
    this.shadow.appendChild(this.div);
    this.div.appendChild(template.content.cloneNode(true));
  }
}