import { height_box_header, width_box_header } from "../utils/variables.js";

const template = document.createElement('template');

template.innerHTML = `
    <article style="background-image: url(images/article-image-1.jpg);">
        <div class="overlay">
            <h4>Partez en famille</h4>
            <p><small>Offrez le meilleur à ceux que vous aimez et partagez des moments fabuleux !</small></p>
            <a href="#" class="button-2">Plus d'infos</a>
        </div>
    </article>

    <article style="background-image: url(images/article-image-2.jpg);">
        <div class="overlay">
            <h4>Envie de s'evader</h4>
            <p><small>Parfois un peu d'évasion serait le bienvenue et ferait le plus grand bien !</small></p>
            <a href="#" class="button-2">Plus d'infos</a>
        </div>
    </article>

    <style>
      #possibilities
      {
          background-color: #efefef;
          padding:  60px 0;
      }
      #possibilities article
      {
          width: 460px;
          height: 270px;
          float: left;
          border-radius: 10px;
      }
      #possibilities article:first-child
      {
          margin-right: 20px;
      }
      .overlay
      {
          background: rgba(255,255,255, 0.95);
          height: 100%;
          width: 190px;
          padding: 20px;
          border-radius: 10px 0 0 10px;
          text-align: center;
          box-sizing: border-box;
      }
      article h4
      {
          border-bottom:  1px solid #ddd;
          padding-bottom: 20px;
          text-transform: uppercase;
          margin-bottom: 20px;
          text-align: center;
      }
      #possibilities p
      {
          text-align: center;
          margin-bottom: 20px;
      }
      .button-2
      {
          color: #fff;
          background-color: #ff7a00;
          padding: 6px 20px;
          border-radius: 3px;
      }
      .button-2:hover
      {
          color: #fff;
          background-color: #02b8dd;
      }
    </style>
`;

export class PossibilitiesComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.div = document.createElement("div");
    this.div.setAttribute("class", "wrapper-component");
    document.querySelector("home-component")
    .shadowRoot.querySelector("header-component")
    .shadowRoot.appendChild(template.content.cloneNode(true));
  }

}