import { template_button_add_value_2048 } from "../template/button.add.value.2048.js";
import { template_button_play_stop_snake } from "../template/button.play.stop.snake.js";
import { template_left } from "../template/2048.template.left.js";
import { initCanvas } from "../../Snake/js/script.js";
import  { templateCenter } from "../template/2048.template.js";
import { init } from "../../2048/js/script.js";
import { template_button_reset_score } from "../template/template.footer.js";
import { query_selector_header,
         query_selector_root,
         query_selector_left_root,
         query_selector_left,
         query_selector_footer,
         query_selector_right} from "../components/request.queryselector.js";
import { regle_2048 } from "../template/regle.2048.js";
import { regle_snake } from "../template/regle.snake.js";



function gestionnaire(name, bool){

    let shadow_root_home = query_selector_root();

    let name_game = query_selector_header(".name_game");
    let component_left = query_selector_left_root();
    let add_button = query_selector_left(".card-main-left");
    let regle = query_selector_right(".card-main-right");

    if (bool){
        let add_button_footer = query_selector_footer(".card-footer");
        add_button_footer.appendChild(template_button_reset_score.content.cloneNode(true));
    }
    component_left.appendChild(template_left.content.cloneNode(true));
    let score_ = query_selector_footer("[id='score']");
    if (name == "2048") {
        name_game.innerHTML = "2048";
        name_game.style.color = "white";
        if (score_)
            score_.innerHTML = "0";
        if (add_button.innerHTML === "")
            add_button.appendChild(template_button_add_value_2048.content.cloneNode(true));
        if (regle.innerHTML === "")
            regle.appendChild(regle_2048.content.cloneNode(true));
    }
    else if (name == "SNAKE"){
        name_game.innerHTML = "SNAKE";
        name_game.style.color = "white";
        if (score_)
            score_.innerHTML = "0";
        if (add_button.innerHTML === "")
            add_button.appendChild(template_button_play_stop_snake.content.cloneNode(true));
        if (regle.innerHTML === "")
            regle.appendChild(regle_snake.content.cloneNode(true));
    }

    shadow_root_home.innerHTML = "";

    return shadow_root_home;
}

function button_nav_bar() {
    let button_2048 = document.getElementById("__2048__");
    if (button_2048 === null)
        return;
    button_2048.addEventListener("click", function() {
        query_selector_left(".card-main-left").innerHTML = "";
        query_selector_right(".card-main-right").innerHTML = "";
        let shadow_root = gestionnaire("2048", false);
        shadow_root.appendChild(templateCenter.content.cloneNode(true));
        init();
        query_selector_footer("[id='reset']").setAttribute("name", "2048");
    });
    let button_snake = document.getElementById("__snake__");
    if (button_snake === null)
        return;
    button_snake.addEventListener("click", function() {
        query_selector_left(".card-main-left").innerHTML = "";
        query_selector_right(".card-main-right").innerHTML = "";
        gestionnaire("SNAKE", false);
        initCanvas();
        query_selector_footer("[id='reset']").setAttribute("name", "snake");
    });
}

function button_reset(bool) {
    let button_reset = query_selector_footer("[id='reset']");
    if (button_reset === null)
        return;
    button_reset.addEventListener("click", function() {
        if (button_reset.getAttribute("name") == "2048"){
            query_selector_left(".card-main-left").innerHTML = "";
            query_selector_root().innerHTML = "";
            let shadow_root = gestionnaire("2048", bool);
            shadow_root.appendChild(templateCenter.content.cloneNode(true));
            init();
        }
        else if (button_reset.getAttribute("name") == "snake"){
            query_selector_left(".card-main-left").innerHTML = "";
            query_selector_root().innerHTML = "";
            gestionnaire("SNAKE", bool);
            initCanvas();
        }
    });
}

export { button_nav_bar, button_reset, gestionnaire };