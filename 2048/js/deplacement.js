function deplacement(depl, grille) {
    let possible = false;
    let deplL = depl[0];
    let deplC = depl[1];

    //gauche/droite
    if (deplC != 0)  {
        for (let l = 0; l < grille.l; l++) {
            for (let i = 0; i < grille.c; i++) {
                let c = 0;
                if (deplC == -1) {
                    while (c < grille.c - 1) {     //deplacement gauche
                        if (grille.tabTuiles[l][c].val == 0 && grille.tabTuiles[l][c+1].val != 0) {
                            grille.tabTuiles[l][c].val = grille.tabTuiles[l][c+1].val;
                            grille.tabTuiles[l][c].triche = grille.tabTuiles[l][c+1].triche;
                            grille.tabTuiles[l][c+1].val = 0; 
                            grille.tabTuiles[l][c+1].triche = false; 
                        }
                        c++;
                    }
                } else {
                    while (c < grille.c - 1) {     //deplacement droite
                        if (grille.tabTuiles[l][c].val != 0 && grille.tabTuiles[l][c+1].val == 0) {
                            grille.tabTuiles[l][c+1].val = grille.tabTuiles[l][c].val;
                            grille.tabTuiles[l][c+1].triche = grille.tabTuiles[l][c].triche;
                            grille.tabTuiles[l][c].val = 0;
                            grille.tabTuiles[l][c].triche = false;
                        }
                        c++;
                    }
                }
            }
        }
    }
    //haut/bas
    if (deplL != 0) {
        for (let c = 0; c < grille.c; c++) {
            for (let i = 0; i < grille.l; i++) {
                let l = 0;
                if (deplL == 1) {
                    while (l < grille.c - 1) {
                        if (grille.tabTuiles[l][c].val == 0 && grille.tabTuiles[l+1][c].val != 0) {
                            grille.tabTuiles[l][c].val = grille.tabTuiles[l+1][c].val;
                            grille.tabTuiles[l][c].triche = grille.tabTuiles[l+1][c].triche;
                            grille.tabTuiles[l+1][c].val = 0;
                            grille.tabTuiles[l+1][c].triche = false;
                        }
                        l++;
                    }
                } else {
                    while (l < grille.c - 1) {
                        if (grille.tabTuiles[l][c].val != 0 && grille.tabTuiles[l+1][c].val == 0) {
                            grille.tabTuiles[l+1][c].val = grille.tabTuiles[l][c].val;
                            grille.tabTuiles[l+1][c].triche = grille.tabTuiles[l][c].triche;
                            grille.tabTuiles[l][c].val = 0;
                            grille.tabTuiles[l][c].triche = false ;
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

