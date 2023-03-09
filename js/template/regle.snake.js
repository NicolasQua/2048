import { height_box_main_left, width_box_main_left } from "../utils/variables.js";

const regle_snake = document.createElement('template');

regle_snake.innerHTML = `<style>
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
    <p>Le but du jeu est de faire grandir le serpent.</p>
    <p>Le serpent grandit en mangeant des pommes.</p>
    <p>Le serpent se déplace dans la direction choisie par le joueur.</p>
    <p>Le joueur a perdu lorsqu'il touche un mur.</p>
  </div>
`;

export { regle_snake }