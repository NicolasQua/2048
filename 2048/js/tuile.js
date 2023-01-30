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
        let div = document.getElementById(index); 

        let img = document.createElement("img");

        
        img.src = "./assets/images/TileEmpty.png";
        img.width = 200;
        img.height = 200;
        img.draggable = "true";
        div.img = img;
        img.dataset.ligne = ligne;
        img.dataset.colonne = colonne;
        this.htmlImage = img;

        
        div.appendChild(img);
    }


}