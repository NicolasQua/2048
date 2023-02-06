import Grille from './grille.js';
import { ecouteursClavier } from './ecouteurs.js';
import { deplacement } from './deplacement.js';

window.onload = init;
let grille;
//let depl = [0, 0]
let depl = ecouteursClavier();

function init() {
    grille = new Grille(4, 4);
    grille.afficherTuiles();

   
    //console.log ("Val : " + depl);
    requestAnimationFrame(mainloop);
}


function mainloop () {

    console.log ("Val : " + depl);
    if (!arrayEquals(depl, [0, 0])) {
        deplacement(depl);
        console.log(depl);
        console.log("TU TE DEPLACE FADA");
        depl = [0, 0];
     }
    requestAnimationFrame(mainloop);
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

