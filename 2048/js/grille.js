import Tuile from "./tuile.js";
import {ecouteursClavier} from "./ecouteurs.js";
import {fusion} from './fusion.js'
import { randomTileValue, create2DArray, genereTuile } from "./utils.js";

export default class Grille {
    constructor(l,c) {
        this.c = c;
        this.l = l;
        this.score = 0;
        this.tabTuiles;
        this.initTuiles();
    }

    afficherTuiles() {
        document.getElementById('score').innerHTML=this.score;
        let caseDivs = document.querySelectorAll("#grille div"); 
        caseDivs.forEach((div, index) => { 
            let ligne = Math.floor(index/this.l);
            let colonne = index%this.c;
            let tuile = this.tabTuiles[ligne][colonne];
            if (tuile.val != 0) {
                document.getElementById(index).innerHTML=tuile.val;
            }
        }); 
        let l;
        let c;
        ecouteursClavier(l, c);
        console.log(l, c);
    }


    initTuiles() {
        this.tabTuiles = create2DArray(4);
        for (let l = 0; l < 4; l++) {
            for (let c = 0; c < 4; c++) {
                let tmp = Math.random(); 
                let val = 0;
                if (tmp > 0.9) {
                    val = 4;
                } else {
                    val = 2;
                }
                this.tabTuiles[l][c] = new Tuile(l ,c ,randomTileValue());
                this.tabTuiles[l][c].val = 0;
            }
        }
        genereTuile(2, randomTileValue(), this);
    }

    updateAffichage() {
        let max = 255;
        for (let l = 0; l < 4; l++) {
            for (let c = 0; c < 4; c++) {
                let tuile = this.tabTuiles[l][c].val;
                let index =(l*4) + c;
                if (tuile != 0) {
                    document.getElementById(index).innerHTML=tuile;
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
        document.getElementById('score').innerHTML=this.score;
    }

    
    afficheTab () {
        for (let l = 0; l < 4; l++) {
            console.log(this.tabTuiles[l][0].val + " " +this.tabTuiles[l][1].val + " "+ this.tabTuiles[l][2].val + " " + this.tabTuiles[l][3].val);
        }
    }


      tabPlein() {
        for (let l = 0; l < 4; l++) {
            for (let c = 0; c < 4; c++) {
                if (this.tabTuiles[l][c].val == 0) {
                    return false;
                }
            }
        }
        return true;
      }
      checkLose() {
        //verif tab plein 
        if (!this.tabPlein())
            return false;

        //fusion impossible
        if (fusion([-1, 0], this, 1))
            return false ;
        if (fusion([1, 0], this, 1))
            return false ;
        if (fusion([0, -1], this, 1))
            return false ;
        if (fusion([0, 1], this, 1))
            return false ;
        return true;
      }
    
}