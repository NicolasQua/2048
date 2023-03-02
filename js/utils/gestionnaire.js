import { query_selector_header, query_selector_root, query_selector_left_root, query_selector_left } from "../components/request.queryselector.js";
import { template_button_add_value_2048 } from "../template/button.add.value.2048.js";
import { template_button_play_stop_snake } from "../template/button.play.stop.snake.js";
import { template_left } from "../template/2048.template.left.js";

export default function gestionnaire(name){

    let shadow_root_home = query_selector_root();

    let name_game = query_selector_header(".name_game");
    let component_left = query_selector_left_root();
    let add_button = query_selector_left(".card-main-left");
    component_left.appendChild(template_left.content.cloneNode(true));
    if (name == "2048") {
        name_game.innerHTML = "2048";
        if (add_button.innerHTML === "")
            add_button.appendChild(template_button_add_value_2048.content.cloneNode(true));
    }
    else if (name == "SNAKE"){
        name_game.innerHTML = "SNAKE";
        if (add_button.innerHTML === "")
            add_button.appendChild(template_button_play_stop_snake.content.cloneNode(true));
    }

    shadow_root_home.innerHTML = "";

    return shadow_root_home;
}