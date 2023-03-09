import { height_box_main_center, width_box_main_center } from "../utils/variables.js";

const templateCenterStyle6 = document.createElement('template');

templateCenterStyle6.innerHTML = `

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

#grilles {
  width: ${width_box_main_center - 10}px;
  height: ${height_box_main_center - 10}px;
  background-color: rgba(100, 100, 100, 0.5);
  border: 1px;
  border: 1px solid #999;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* Pour contraindre la hauteur des lignes */
  grid-auto-rows: ${(height_box_main_center - 10) / 6}px;

}

#grilles div {
  border: 2px solid rgba(100, 100, 100, 0.5);
  transition: 0.5s all;
  font-size : 80px;
  text-align: center;
  line-height: ${(height_box_main_center - 10) / 6}px;
} 

#grilles div:hover {
  background-color: rgb(223, 223, 205);
}
</style>
`;

export { templateCenterStyle6 }