export default class Tuile {
    constructor(ligne, colonne, val) {
        this.val = val;
        this.ligne = ligne;
        this.colonne = colonne;
        if (val > 4)
            this.triche = true;
        else
            this.triche = false;
    }
}