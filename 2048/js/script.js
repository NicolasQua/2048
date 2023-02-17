import Grille from './grille.js';
import { ecouteursClavier, depl, ecouteursButtons } from './ecouteurs.js';
import { deplacement } from './deplacement.js';
import { fusion } from './fusion.js';
import { randomTileValue, genereTuile } from './utils.js';

window.onload = init;
let grille;

function init() {
    grille = new Grille(4, 4);
    grille.afficherTuiles();
    ecouteursClavier();
    ecouteursButtons(grille);
    requestAnimationFrame(mainloop);
}


function mainloop () {
    if (!arrayEquals(depl, [0, 0])) {
        deplacement(depl, grille);
        fusion(depl, grille, 0);
        depl[0] = 0;
        depl[1] = 0;
        genereTuile(1, randomTileValue(), grille);
        grille.updateAffichage();
        let perdu = grille.checkLose();
        if (perdu)
            console.log ("TU AS PERDUUUU AHHAHAA")
    }
    requestAnimationFrame(mainloop);
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

