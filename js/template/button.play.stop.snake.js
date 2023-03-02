import { height_box_main_left, width_box_main_left } from "../utils/variables.js";

const template_button_play_stop_snake = document.createElement('template');

template_button_play_stop_snake.innerHTML = `<style>
  .card-main-left {
    position: relative;
    border-radius: 5px;
    margin: 5px;
    height: ${height_box_main_left}px;
    width: ${width_box_main_left - 10}px;
    background-color: white;
  }

  .btn {
    width: ${width_box_main_left - 50}px;
    height: 50px;
    margin: 5px;
    align-items: center;
  }

  #play-stop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #boutons-row-1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #boutons-row-2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
<div id="play-stop">
    <div id="boutons-row-1">
        <button class="btn" id="play">PLAY</button>
    </div>
    <div id="boutons-row-2">
        <button class="btn" id="stop">STOP</button>
    </div>
</div>`;

export { template_button_play_stop_snake }