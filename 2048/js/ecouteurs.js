import {genereTuile} from "./utils.js";
import { query_selector_left } from "../../js/components/request.queryselector.js";

let depl = [0, 0];

function capteEvent(event){
    if( event.preventDefault ){
        event.preventDefault();
        event.stopPropagation();
    }else{
        Event.returnValue = false;
        Event.cancelBubble = true;
    }
}

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
        capteEvent(e);
    }
    depl = [0, 0]
}

function ecouteursButtons (grille){
    let val = 8;
    let i = 8;
    while (i <= 1024) {
        let selector = `[id='add${i}']`;
        let button = query_selector_left(selector);
        if (button === null)
            break;
        button.addEventListener("click", function() {
            genereTuile(1, button.innerHTML, grille);
            grille.updateAffichage();
        });
        val *= 2;
        i += i;
    }
}

export {ecouteursClavier, depl, ecouteursButtons};