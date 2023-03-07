
const template_left = document.createElement("template");

export class MainComponentLeft extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.div = document.createElement("div");
    this.div.setAttribute("class", "card-main-left");
    this.shadow.appendChild(this.div);
  }

  connectedCallback() {
    this.div.appendChild(template_left.content.cloneNode(true));
  }
}