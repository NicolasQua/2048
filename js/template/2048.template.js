import { height_box_main_center, width_box_main_center } from "../utils/variables.js";

const template = document.createElement('template');

template.innerHTML = `
<div id="main">
    <div id="infos">
        <div>Temps : 0</div>
        <div> Score : <span id="score"> 0 </span></div>
        <div>Multiplicateur : x1</div>
    </div>
    <div id="grille">
        <div id="0" class="grille"></div>
        <div id="1" class="grille"></div>
        <div id="2" class="grille"></div>
        <div id="3" class="grille"></div>
        <div id="4" class="grille"></div>
        <div id="5" class="grille"></div>
        <div id="6" class="grille"></div>
        <div id="7" class="grille"></div>
        <div id="8" class="grille"></div>
        <div id="9" class="grille"></div>
        <div id="10" class="grille"></div>
        <div id="11" class="grille"></div>
        <div id="12" class="grille"></div>
        <div id="13" class="grille"></div>
        <div id="14" class="grille"></div>
        <div id="15" class="grille"></div>
    </div>
</div>
<style>
#main {
  background-image: url("../../2048/assets/images/Background.png");
  border: 4px solid rgb(0, 0, 0);
  width: ${width_box_main_center - 10}px;
  height: ${height_box_main_center + 10}px;

}

#infos {
  width: ${width_box_main_center - 10}px;
  display: flex;
  justify-content: space-around;
}

#grille {
  width: ${width_box_main_center - 10}px;
  height: ${height_box_main_center - 10}px;
  background-color: rgba(100, 100, 100, 0.5);
  border: 1px;
  border: 1px solid #999;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* Pour contraindre la hauteur des lignes */
  grid-auto-rows: ${(height_box_main_center - 10) / 4}px;

}

#grille div {
  border: 2px solid rgba(100, 100, 100, 0.5);
  transition: 0.5s all;
  font-size : 80px;
  text-align: center;
  line-height: ${(height_box_main_center - 10) / 4}px;
} 

#grille div:hover {
  background-color: rgb(223, 223, 205);
}
</style>
`;

export { template }