import Grille from './grille.js';
import { ecouteursClavier, depl, ecouteursButtons, ecouteurChangeSize } from './ecouteurs.js';
import { deplacement } from './deplacement.js';
import { fusion } from './fusion.js';
import { randomTileValue, genereTuile } from './utils.js';
import { button_reset } from '../../js/utils/gestionnaire.js';
import { Fonctionalities } from '../../Snake/js/fonctionalities.js';

window.onload = init;
let grille;

let bool;

function init(size) {
    bool = false;
    grille = new Grille(size, size);
    grille.afficherTuiles();
    ecouteursClavier();
    button_reset();
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
        if (perdu && !bool){
            Fonctionalities.lose();
            bool = true;
        }
    }
    requestAnimationFrame(mainloop);
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

export { init }