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
            }
            /* div.addEventListener("click", (e) => {
                console.log("click tuile");
            }); */ 
            console.log("ligne : " + ligne + " colonne : " + colonne + " valeur de la tuile : " + this.tabTuiles[ligne][colonne].val + " index : "+ index);
        }); 

        
        document.onkeydown = (e) => {
            e = e || window.event;
            if (e.keyCode === 38) {
                console.log('up arrow pressed')
            } else if (e.keyCode === 40) {
                console.log('down arrow pressed')
            } else if (e.keyCode === 37) {
                console.log('left arrow pressed: tab avant');
                this.afficheTab();
                this.deplaceGauche();
                console.log('tab après');
                this.afficheTab();
            } else if (e.keyCode === 39) {
                console.log('right arrow pressed');
            }
        }
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
            let l = (1+Math.floor(Math.random() * 4))
            let c = (1+Math.floor(Math.random() * 4))
            index = ((l-1)*4) + c;
            this.tabTuiles[l-1][c-1] = new Tuile(l,c, index);
        }



    }

    deplaceGauche() {
        console.log("deplace gauche");
        for (let l = 0; l < 4; l++) {
            let tuilePress = [];
            let c = 3;
                while (c != 0) {
                    if (this.tabTuiles[l][c].val != 0 && this.tabTuiles[l][c-1].val > 0) {
                        this.tabTuiles[l][c-1].val = this.tabTuiles[l][c].val;
                        this.tabTuiles[l][c].val = 0;
                    }
                    c++;
                }
        }
        this.updateAffichage();
    }

    updateAffichage() {
        for (let l = 0; l < 4; l++) {
            for (let c = 0; c < 4; c++) {
                let tuile = this.tabTuiles[l][c].val;
                let index =(l*4) + c;
                if (tuile != 0) {
                    document.getElementById(index).innerHTML=tuile.val;
                } else {
                    document.getElementById(index).innerHTML="";
                }
            }

        }
    }
    
    afficheTab () {
        for (let l = 0; l < 4; l++) {
            console.log(this.tabTuiles[l][0].val + " " +this.tabTuiles[l][1].val + " "+ this.tabTuiles[l][2].val + " " + this.tabTuiles[l][3].val);
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