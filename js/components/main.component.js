import { height_box_main, width_box_main, width_box_home } from "../utils/variables.js";

const template = document.createElement('template');

template.innerHTML = `
<style>
.card-main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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