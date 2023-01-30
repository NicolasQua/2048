import { height_box_main_center, width_box_main_center } from "../utils/variables.js";
import  {SnakeStart}  from "../../Snake/js/script.js";


const template = document.createElement('template');
const game = new SnakeStart();

template.innerHTML = `<style>
  
</style>
`;

export class MainComponentCenter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.div = document.createElement("div");
    this.div.setAttribute("class", "card-main-center");
    this.div.setAttribute("onload", `${new SnakeStart().initCanvas()}`);
    this.shadow.appendChild(this.div);
  }

  connectedCallback() {
    this.div.appendChild(template.content.cloneNode(true));
  }
}