import { height_box_main_left, width_box_main_left } from "../utils/variables.js";

const template = document.createElement('template');

template.innerHTML = `<style>
  .card-main-left {
    position: relative;
    border-radius: 5px;
    margin: 5px;
    height: ${height_box_main_left}px;
    width: ${width_box_main_left - 10}px;
    background-color: white;
  }

</style>`;

export class MainComponentLeft extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.div = document.createElement("div");
    this.div.setAttribute("class", "card-main-left");
    this.shadow.appendChild(this.div);
    this.div.appendChild(template.content.cloneNode(true));
  }
}