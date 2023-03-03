import { height_box_header, width_box_header } from "../utils/variables.js";

const template = document.createElement('template');

template.innerHTML = `<style>

    .card-footer {
      border-radius: 5px;
      margin: 5px;
      margin-top: 40px;
      margin-bottom: 5px;
      height: ${height_box_header - 5}px;
      width: ${width_box_header - 5}px;
      background-color: white;
    }
</style>
`;

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