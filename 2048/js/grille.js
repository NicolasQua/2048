import Tuile from "./tuile.js";
import {ecouteursClavier} from "./ecouteurs.js";
import {fusion} from './fusion.js'
import { randomTileValue, create2DArray, genereTuile } from "./utils.js";
import { query_selector_center, query_selector_center_all, query_selector_footer } from "../../js/components/request.queryselector.js";

export default class Grille {

    constructor(l,c) {
        this.c = c;
        this.l = l;
        this.score = 0;
        this.tabTuiles;
        this.initTuiles();
    }

    afficherTuiles() {
        let lose = false;
        let caseDivs = query_selector_center_all(".grille");

        caseDivs.forEach((div, index) => {
            let ligne = Math.floor(index / this.l);
            let colonne = index % this.c;
            let tuile = this.tabTuiles[ligne][colonne];
            if (tuile.val != 0) {
                div.innerHTML = tuile.val;
            }
            index++;
        });
        let l;
        let c;

        ecouteursClavier(l, c);
        lose = this.checkLose();
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
                let index = (l * 4) + c;
                let selector = `[id='${index}']`;
                if (tuile != 0) {
                    query_selector_center(selector).innerHTML = tuile;
                    if (tuile < 128) {
                        query_selector_center(selector).style.background = `rgb(255,255,${255 - tuile * 4})`;
                    } else {
                        query_selector_center(selector).style.background = `rgb(255,${255 - tuile / 2},0)`;
                    }
                    query_selector_center(selector).style.opacity = 0.7;
                } else {
                    query_selector_center(selector).innerHTML = "";
                    query_selector_center(selector).style.opacity = 0;
                }
            }
        }
        query_selector_center("[id='score']").innerHTML = this.score;
        query_selector_footer("[id='score']").innerHTML = this.score;
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