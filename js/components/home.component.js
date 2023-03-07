import { height_box_home, width_box_home } from "../utils/variables.js";

const template = document.createElement('template');

template.innerHTML = `
<header-component></header-component>
<main-component></main-component>
<footer-component></footer-component>
`;

export class HomeComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.cards = document.querySelector("home-component");
    this.div = document.createElement("div");
    this.div.setAttribute("class", "home-card");
    this.shadow.appendChild(this.div);
  }

  connectedCallback() {
    this.div.appendChild(template.content.cloneNode(true));
  }
}