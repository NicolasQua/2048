import Grille from './grille.js';

window.onload = init;

let grille;


function init() {
    grille = new Grille(4, 4);
    grille.afficherTuiles();

}

