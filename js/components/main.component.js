import { height_box_main, width_box_main, width_box_home } from "../utils/variables.js";

const template = document.createElement('template');

template.innerHTML = `<style>
  .card-main {
    display: flex;
    border-radius: 5px;
    margin: 5px;
    height: ${height_box_main}px;
    width: ${width_box_home - 10}px;
    background-color: #ddd;
  }
</style>
<main-component-left></main-component-left>
<main-component-center></main-component-center>
<main-component-right></main-component-right>`;

export class MainComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.div = document.createElement("div");
    this.div.setAttribute("class", "card-main");
    this.shadow.appendChild(this.div);
    this.div.appendChild(template.content.cloneNode(true));
  }
}