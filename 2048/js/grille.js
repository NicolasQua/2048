import Tuile from "./tuile.js";

export default class Grille {
    constructor(l,c) {
        this.c = c;
        this.l = l;
        this.initTuiles();
    }




    afficherTuiles() {
        let caseDivs = document.querySelectorAll("#grille div"); 
        caseDivs.forEach((div, index) => { 
            let ligne = Math.floor(index/this.l);
            let colonne = index%this.c;
            let tuile = this.tabTuiles[ligne][colonne];
            if (tuile.val != 0) {
                document.getElementById(index).innerHTML=tuile.val;
                //tuile.div.appendChild(img);
            }
            
            console.log("ligne : " + ligne + " colonne : " + colonne + " valeur de la tuile : " + this.tabTuiles[ligne][colonne].val + " index : "+ index);
            let img = tuile.htmlImage;
            img.addEventListener("click", (e) => {
                console.log("click image");
            })
        });
    }


    initTuiles() {
        this.tabTuiles = this.create2DArray(4);
        let index = 0;
        for (let l = 0; l < 4; l++) {
            for (let c = 0; c < 4; c++) {
                this.tabTuiles[l][c] = new Tuile(l,c, index);
                this.tabTuiles[l][c].val = 0;
                index++;
            }
        }


        for (let i = 0; i < 2; i++) {
            let l = Math.floor(Math.random() * 3);
            let c = Math.floor(Math.random() * 3);
            index = ((l-1)*4) + c;
            this.tabTuiles[l][c] = new Tuile(l,c, index);
            //this.tabTuiles[l][c].div.appendChild(this.tabTuiles[l][c].img);
        }



    }

    
    create2DArray(rows) {
        let arr = [];
        for (let i = 0; i < rows; i++) {
          arr[i] = [];
        }
        return arr;
      }
}