import { height_box_header, width_box_header } from "../utils/variables.js";
import { query_selector_header } from "./request.queryselector.js";

const template = document.createElement('template');

template.innerHTML = `<style>

    .card-header {
      border-radius: 5px;
      margin: 5px;
      margin-top: 5px;
      height: ${height_box_header / 2}px;
      width: ${width_box_header}px;
    }

    .name_game {
      font: bold 60px sans-serif;
      text-align: center;
      text-baseline: middle;
    }
</style>
<div class="name_game">
</div>
`;


export class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.div = document.createElement("div");
    this.div.setAttribute("class", "card-header");
    this.shadow.appendChild(this.div);
    
  }

  connectedCallback() {
    this.div.appendChild(template.content.cloneNode(true));
  }
}