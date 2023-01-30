export default class Tuile {
    constructor(ligne, colonne, index) {
        let tmp = Math.random(); 
        if (tmp > 0.9) {
            this.val = 4;
        } else {
            this.val = 2;
        }

        this.ligne = ligne;
        this.colonne = colonne;
    }
}