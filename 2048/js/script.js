import Grille from './grille.js';
import { ecouteursClavier, depl } from './ecouteurs.js';
import { deplacement } from './deplacement.js';
import { fusion } from './fusion.js';

window.onload = init;
let grille;

function init() {
    grille = new Grille(4, 4);
    grille.afficherTuiles();
    ecouteursClavier();
    requestAnimationFrame(mainloop);
}


function mainloop () {
    if (!arrayEquals(depl, [0, 0])) {
        deplacement(depl, grille);
        fusion(depl, grille);
        depl[0] = 0;
        depl[1] = 0;
        grille.genereTuile(1);
        grille.updateAffichage();
        grille.checklose();
    }
    requestAnimationFrame(mainloop);
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

