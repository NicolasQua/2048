function fusion(depl, grille, verification) {
    let possible = false;
    let deplL = depl[0];
    let deplC = depl[1]; 
    if (deplC != 0)  {
        if(deplC == -1) {   //fusion gauche
            for (let l = 0; l < 4; l++) {
                for (let c = 0; c < 3; c++) {
                    if (grille.tabTuiles[l][c].val == grille.tabTuiles[l][c+1].val) {
                        if (!verification) {
                            grille.tabTuiles[l][c].val = grille.tabTuiles[l][c].val*2;
                            grille.tabTuiles[l][c+1].val = 0;
                            grille.score += grille.tabTuiles[l][c].val;
                        }
                        possible = true;
                    }
                }
            }
        } else {       //fusion droite 
            for (let l = 0; l < 4; l++) {
                for (let c = 3; c != 0; c--) {
                    if (grille.tabTuiles[l][c].val == grille.tabTuiles[l][c-1].val) {
                        if (!verification) {
                            grille.tabTuiles[l][c].val = grille.tabTuiles[l][c].val*2;
                            grille.tabTuiles[l][c-1].val = 0;
                            grille.score += grille.tabTuiles[l][c].val;
                        }
                        possible = true;
                    }
                }
            }
        }

    } else  {
        if (deplL == -1) {  //fusion bas 
            for (let c = 0; c < 4; c++) {
                for (let l = 3; l != 0; l--) {
                    if (grille.tabTuiles[l][c].val == grille.tabTuiles[l-1][c].val) {
                        if (!verification) {
                            grille.tabTuiles[l][c].val = grille.tabTuiles[l][c].val*2;
                            grille.tabTuiles[l-1][c].val = 0;
                            grille.score += grille.tabTuiles[l][c].val;
                        }
                        possible = true;
                    }
                }
            }
        } else {        //fusion haut 
            for (let c = 0; c < 4; c   ++) {
                for (let l = 0; l < 3; l++) {
                    if (grille.tabTuiles[l][c].val == grille.tabTuiles[l+1][c].val) {
                        if (!verification) {
                            grille.tabTuiles[l][c].val = grille.tabTuiles[l][c].val*2;
                            grille.tabTuiles[l+1][c].val = 0;
                            grille.score += grille.tabTuiles[l][c].val;
                        }
                        possible = true;
                    }
                }
            }
        }
    }
    return possible;
}


export {fusion};