import Grille from './grille.js';
import { ecouteursClavier } from './ecouteurs.js';
import { deplacement } from './deplacement.js';

window.onload = init;
let grille;
let dl = 0; let dc = 0;


function init() {
    grille = new Grille(4, 4);
    grille.afficherTuiles();
    dl, dc = ecouteursClavier(dl, dc);
    console.log ("Val : " + dl, dc);
    requestAnimationFrame(mainloop);
}


function mainloop () {
    console.log("entrée mainloop");
    if (dl != 0 || dc != 0) {
        deplacement(dl, dc);
        console.log(dl, dc);
        console.log("TU TE DEPLACE FADA");
        dl = 0; dc = 0;
     }
    requestAnimationFrame(mainloop);
}

