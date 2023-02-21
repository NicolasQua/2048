import {genereTuile} from "./utils.js";
import { init } from "../../2048/js/script.js";
import  {initCanvas}  from "../../Snake/js/script.js";
import { template } from "../../js/template/2048.template.js";
import { query_selector_left } from "../../js/components/request.queryselector.js";
import gestionnaire from "../../js/utils/gestionnaire.js";

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
        button.addEventListener("click", function() {
            genereTuile(1, button.innerHTML, grille);
            grille.updateAffichage();
        });
        val *= 2;
        i += i;
    }
}

function button_nav_bar() {
    let button_2048 = document.getElementById("__2048__");
    button_2048.addEventListener("click", function() {
        query_selector_left(".card-main-left").innerHTML = "";
        let shadow_root = gestionnaire("2048");
        shadow_root.appendChild(template.content.cloneNode(true));
        init();
    });
    let button_snake = document.getElementById("__snake__");
    button_snake.addEventListener("click", function() {
        let shadow_root = gestionnaire("SNAKE");
        initCanvas();
    });
}

export {ecouteursClavier, depl, ecouteursButtons, button_nav_bar};