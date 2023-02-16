function deplacement(depl, grille) {
    let possible = false; 
    let deplL = depl[0];
    let deplC = depl[1];    

    //gauche/droite
    if (deplC != 0)  {
        for (let l = 0; l < 4; l++) {
            for (let i = 0; i < 4; i++) {
                let c = 0;
                if (deplC == -1) {
                    while (c < 3) {     //deplacement gauche
                        if (grille.tabTuiles[l][c].val == 0 && grille.tabTuiles[l][c+1].val != 0) {
                            grille.tabTuiles[l][c].val = grille.tabTuiles[l][c+1].val;
                            grille.tabTuiles[l][c+1].val = 0; 
                        }
                        c++;
                    }
                } else {
                    while (c < 3) {     //deplacement droite
                        if (grille.tabTuiles[l][c].val != 0 && grille.tabTuiles[l][c+1].val == 0) {
                            grille.tabTuiles[l][c+1].val = grille.tabTuiles[l][c].val;
                            grille.tabTuiles[l][c].val = 0;
                        }
                        c++;
                    }
                }
            }
        }
    }
    //haut/bas
    if (deplL != 0) {
        for (let c = 0; c < 4; c++) {
            for (let i = 0; i < 4; i++) {
                let l = 0;
                if (deplL == 1) {
                    while (l < 3) {
                        if (grille.tabTuiles[l][c].val == 0 && grille.tabTuiles[l+1][c].val != 0) {
                            grille.tabTuiles[l][c].val = grille.tabTuiles[l+1][c].val;
                            grille.tabTuiles[l+1][c].val = 0;
                        }
                        l++;
                    }
                } else {
                    while (l < 3) {
                        if (grille.tabTuiles[l][c].val != 0 && grille.tabTuiles[l+1][c].val == 0) {
                            grille.tabTuiles[l+1][c].val = grille.tabTuiles[l][c].val;
                            grille.tabTuiles[l][c].val = 0;
                        }
                        l++;
                    }
                }
            }
        }
    }
    return possible; 
}

export {deplacement};

