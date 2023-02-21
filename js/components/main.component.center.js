import { height_box_main_center, width_box_main_center } from "../utils/variables.js";
import { button_nav_bar } from "../../2048/js/ecouteurs.js";

const template = document.createElement('template');

template.innerHTML = `<style>
    #card_main_center {
      // background-image: url("../../2048/assets/images/Background.png");
      border: 4px solid rgb(0, 0, 0);
      width: ${width_box_main_center - 10}px;
      height: ${height_box_main_center + 10}px;
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
    this.div.style.backgroundColor = "white";
    this.div.style.borderRadius = "15px";
    this.div.style.boxShadow = "0 0 10px 0 rgba(0, 0, 0, 0.5)";
    this.div.style.display = "flex";
    this.div.style.justifyContent = "center";
    this.div.style.alignItems = "center";
    this.div.style.flexDirection = "column";
    this.div.style.margin = "auto";
    // this.div.style.marginTop = "10px";
    // this.div.style.marginBottom = "10px";
    // this.div.style.padding = "10px";
    this.div.style.overflow = "auto";
    this.div.style.position = "relative";
    this.div.style.zIndex = "1";
    button_nav_bar();
  }

}