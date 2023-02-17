import Tuile from "./tuile.js";

function randomTileValue() {
    let tmp = Math.random(); 
    if (tmp > 0.9) {
        return 4;
    } else {
        return 2;
    }
}

function create2DArray(rows) {
    let arr = [];
    for (let i = 0; i < rows; i++) {
      arr[i] = [];
    }
    return arr;
}

function genereTuile(nbr, val, grille) {
    for (let i = 0; i < nbr; i++) {
        let l = (1+Math.floor(Math.random() * 4));
        let c = (1+Math.floor(Math.random() * 4));
        if (!grille.tabPlein()) {
            while (grille.tabTuiles[l-1][c-1].val != 0) {
                l = (1+Math.floor(Math.random() * 4));
                c = (1+Math.floor(Math.random() * 4));
            }
        } else {
            return;
        }
        grille.tabTuiles[l-1][c-1] = new Tuile(l,c, val);
    }
}



export { randomTileValue, create2DArray, genereTuile};