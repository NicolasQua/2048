import { height_box_header, width_box_header } from "../utils/variables.js";

const template = document.createElement('template');

template.innerHTML = `<style>

    .card-header {
      border-radius: 5px;
      margin: 5px;
      margin-top: 5px;
      height: ${height_box_header}px;
      width: ${width_box_header}px;
      background-color: white;
    }
</style>
`;

export class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.div = document.createElement("div");
    this.div.setAttribute("class", "card-header");
    this.shadow.appendChild(this.div);
    this.div.appendChild(template.content.cloneNode(true));
  }
}