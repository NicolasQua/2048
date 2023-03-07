import { height_box_main_center, width_box_main_center } from "../utils/variables.js";
import { button_nav_bar } from "../utils/gestionnaire.js";

const template = document.createElement('template');

template.innerHTML = `<style>

  #card_main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
`;

export class MainComponentCenter extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.div = document.createElement("div");
    this.div.setAttribute("id", "card_main_center");
    this.shadow.appendChild(this.div);
    this.div.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    button_nav_bar();
  }

}