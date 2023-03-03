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
    align-items: center;
  }

  .btn {
    width: ${width_box_main_left - 100}px;
    height: 50px;
    margin: 5px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

  #btn-bg {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0px;
    width: 100%;
  }

  #bg-colors {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .btn-ch {
    width: 50px;
    height: 50px;
    margin: 5px;
    margin-top: 20px;
    align-items: center;
    border-radius: 50%;
  }

  #bg-image1 {
    background: url(../../Snake/assets/image1.jpeg);
  }

  #bg-image2 {
    background: url(../../Snake/assets/image2.jpeg);
  }

  #bg-image3 {
    background: url(../../Snake/assets/image3.png);
  }
</style>
<div id="play-stop">
    <div id="boutons-row-1">
        <button class="btn" id="play">PLAY</button>
    </div>
    <div id="boutons-row-2">
        <button class="btn" id="stop">STOP</button>
    </div>
</div>
<div id="btn-bg">
    <div id="bg-colors">
        <button class="btn-ch" id="bg-image1"></button>
        <button class="btn-ch" id="bg-image2"></button>
        <button class="btn-ch" id="bg-image3"></button>
    </div>
</div>

`;

export { template_button_play_stop_snake }