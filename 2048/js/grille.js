import Tuile from "./tuile.js";
import {ecouteursClavier} from "./ecouteurs.js";

export default class Grille {
    constructor(l,c) {
        this.c = c;
        this.l = l;
        this.score = 0;
        this.initTuiles();
    }
  

    mainloop() {


        this.mainloop();
    }




    afficherTuiles() {
        document.getElementById('score').innerHTML=this.score;
        let lose = false;
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
        }); 
        let l;
        let c;


        ecouteursClavier(l, c);

        console.log(l, c);

        /* document.onkeydown = (e) => {
            e = e || window.event;
            if (!lose) {
                if (e.keyCode === 38) {
                    console.log('up arrow pressed')
                    this.deplaceHaut();
                } else if (e.keyCode === 40) {
                    console.log('down arrow pressed')
                    this.deplaceBas();
                } else if (e.keyCode === 37) {
                    console.log('left arrow pressed: tab avant');
                    this.deplaceGauche();
                    console.log('tab après');
                } else if (e.keyCode === 39) {
                    console.log('right arrow pressed');
                    this.deplaceDroite();
                }
                this.genereTuile(1);
                this.updateAffichage();
                document.getElementById('score').innerHTML=this.score;
            }
            lose = this.checklose();
        } */ 


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
        this.genereTuile(2);
    }

    deplaceGauche() {
        let possible = false;
        for (let l = 0; l < 4; l++) {
            for (let i = 0; i < 4; i++) {
                let c = 1;
                while (c < 4) {
                    if (this.tabTuiles[l][c].val != 0 && this.tabTuiles[l][c-1].val == 0) {
                        this.tabTuiles[l][c-1].val = this.tabTuiles[l][c].val;
                        this.tabTuiles[l][c].val = 0;
                        possible = true;
                    }
                    c++;
                }
            }
        }
        this.fusionGauche()
    }

    deplaceDroite() {
        let possible = false;
        for (let l = 0; l < 4; l++) {
            for (let i = 0; i < 4; i++) {
                let c = 0;
                while (c < 3) {
                    if (this.tabTuiles[l][c].val != 0 && this.tabTuiles[l][c+1].val == 0) {
                        this.tabTuiles[l][c+1].val = this.tabTuiles[l][c].val;
                        this.tabTuiles[l][c].val = 0;
                        possible = true;
                    }
                    c++;
                }
            }
        }
        this.fusionDroite()
    }

    deplaceHaut() {
        let possible1 = false; 
        for (let c = 0; c < 4; c++) {
            for (let i = 0; i < 4; i++) {
                let l = 0;
                while (l < 3) {
                    if (this.tabTuiles[l][c].val == 0 && this.tabTuiles[l+1][c].val != 0) {
                        this.tabTuiles[l][c].val = this.tabTuiles[l+1][c].val;
                        this.tabTuiles[l+1][c].val = 0;
                        possible1 = true;
                    }
                    l++;
                }
            }
        }
        this.fusionHaut()
    }

    deplaceBas() {
        let possible = false;
        for (let c = 0; c < 4; c++) {
            for (let i = 0; i < 4; i++) {
                let l = 3;
                while (l != 0) {
                    if (this.tabTuiles[l][c].val == 0 && this.tabTuiles[l-1][c].val != 0) {
                        this.tabTuiles[l][c].val = this.tabTuiles[l-1][c].val;
                        this.tabTuiles[l-1][c].val = 0;
                        possible = true;
                    }
                    l--;
                }
            }
        }
        this.fusionBas()
    }

    fusionGauche() {
        let possible = false;
        for (let l = 0; l < 4; l++) {
            for (let c = 0; c < 3; c++) {
                if (this.tabTuiles[l][c].val == this.tabTuiles[l][c+1].val) {
                    this.tabTuiles[l][c].val = this.tabTuiles[l][c].val*2;
                    this.tabTuiles[l][c+1].val = 0;
                    this.score += this.tabTuiles[l][c].val;
                    possible = true;
                }
            }
        }
        return possible; 
    }
    fusionDroite() {
        let possible = false; 
        for (let l = 0; l < 4; l++) {
            for (let c = 3; c != 0; c--) {
                if (this.tabTuiles[l][c].val == this.tabTuiles[l][c-1].val) {
                    this.tabTuiles[l][c].val = this.tabTuiles[l][c].val*2;
                    this.tabTuiles[l][c-1].val = 0;
                    this.score += this.tabTuiles[l][c].val;
                    possible = true;
                }
            }
        }
        return possible;
    }

    fusionHaut() {
        let possible = false; 
        for (let c = 0; c < 4; c++) {
            for (let l = 0; l < 3; l++) {
                if (this.tabTuiles[l][c].val == this.tabTuiles[l+1][c].val) {
                    this.tabTuiles[l][c].val = this.tabTuiles[l][c].val*2;
                    this.tabTuiles[l+1][c].val = 0;
                    this.score += this.tabTuiles[l][c].val;
                    possible = true;
                }
            }
        }
        return possible; 
    }

    fusionBas() {
        let possible = false;
        for (let c = 0; c < 4; c++) {
            for (let l = 3; l != 0; l--) {
                if (this.tabTuiles[l][c].val == this.tabTuiles[l-1][c].val) {
                    this.tabTuiles[l][c].val = this.tabTuiles[l][c].val*2;
                    this.tabTuiles[l-1][c].val = 0;
                    this.score += this.tabTuiles[l][c].val;
                    possible = true;
                }
            }
        }
        return possible;
    }

    updateAffichage() {
        let max = 255;
        for (let l = 0; l < 4; l++) {
            for (let c = 0; c < 4; c++) {
                let tuile = this.tabTuiles[l][c].val;
                let index =(l*4) + c;
                if (tuile != 0) {
                    document.getElementById(index).innerHTML=tuile;
                    console.log(tuile)
                    if (tuile < 128) {
                        document.getElementById(index).style.background=`rgb(255,255,${255-tuile*4})`;
                    } else {
                        document.getElementById(index).style.background=`rgb(255,${255-tuile/2},0)`;
                    }
                    document.getElementById(index).style.opacity = 0.7;
                } else {
                    document.getElementById(index).innerHTML="";
                    document.getElementById(index).style.opacity = 0;
                }
            }

        }
    }

    genereTuile(nbr) {
        for (let i = 0; i < nbr; i++) {
            let l = (1+Math.floor(Math.random() * 4));
            let c = (1+Math.floor(Math.random() * 4));

            while (this.tabTuiles[l-1][c-1].val != 0) {
                l = (1+Math.floor(Math.random() * 4));
                c = (1+Math.floor(Math.random() * 4));
            }
            let index = ((l-1)*4) + c;
            this.tabTuiles[l-1][c-1] = new Tuile(l,c, index);
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

      checklose() {
        for (let l = 0; l < 4; l++) {
            for (let c = 0; c < 4; c++) {
                if (this.tabTuiles[l][c].val == 0) {
                    return false;
                }
            }
        }
        console.log("Perdu;")
        return true;
      }
    
}