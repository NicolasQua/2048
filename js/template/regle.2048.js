import { height_box_main_left, width_box_main_left } from "../utils/variables.js";

const regle_2048 = document.createElement('template');

regle_2048.innerHTML = `<style>
  .card-main-right {
    position: relative;
    border-radius: 5px;
    margin: 5px;
    height: ${height_box_main_left}px;
    width: ${width_box_main_left - 10}px;
    background-color: white;
  }
</style>

<div class="card-main-right">
  <div class="card-main-right-title">
    <h2>Règles du jeu</h2>
  </div>
  <div class="card-main-right-content">
    <p>Le but du jeu est de faire apparaître la tuile 2048.</p>
    <p>Les tuiles de même valeur se fusionnent lorsqu'elles se touchent.</p>
    <p>Une nouvelle tuile de valeur 2 ou 4 apparaît aléatoirement à chaque déplacement.</p>
    <p>Le joueur a perdu lorsqu'il n'y a plus de déplacement possible.</p>
  </div>
</div>
`;

export { regle_2048 }