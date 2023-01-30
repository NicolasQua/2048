import { height_box_main_right, width_box_main_right } from "../utils/variables.js";

const template = document.createElement('template');

template.innerHTML = `<style>
  .card-main-right {
    position: relative;
    border-radius: 5px;
    margin: 5px;
    height: ${height_box_main_right}px;
    width: ${width_box_main_right - 20}px;
    background-color: white;
  }

</style>`;

export class MainComponentRight extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.div = document.createElement("div");
    this.div.setAttribute("class", "card-main-right");
    this.shadow.appendChild(this.div);
    this.div.appendChild(template.content.cloneNode(true));
  }
}