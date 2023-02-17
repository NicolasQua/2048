import {genereTuile} from "./utils.js";
import Grille from "./grille.js";

let depl = [0, 0];

function ecouteursClavier() {
    document.onkeydown = (e) => {
        depl = [0, 0];
        e = e || window.event;
        console.log(event.key);
        switch(e.key) {
            case "ArrowLeft":
                depl = [0, -1];
                break;
            case "ArrowRight":
                depl = [0, 1];
                break;
            case "ArrowDown":
                depl = [-1, 0];
                break;
            case "ArrowUp":
                depl = [1, 0];
                break;
        }
    }
    depl = [0, 0]
}
function ecouteursButtons (grille){
    let val = 8;
    let i = 0;
    while (i < 8) {
        let button = document.getElementById(`add${val}`);
        button.addEventListener("click", function() {
            genereTuile(1, button.innerHTML, grille);
            console.log(button.innerHTML);
            grille.updateAffichage();
        });
        val *= 2;
        i++;
    }

}


export {ecouteursClavier, depl, ecouteursButtons};