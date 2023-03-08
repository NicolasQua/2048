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
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #play-stop, #ajustement {
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

  #play {
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    font-size: 20px;
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
  }

  #stop {
    background-color: #f44336;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 5px;
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
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

  .sp{
    margin: 5px;
  }

  .aj {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    margin: 5px;
    margin-top: 10px;
    background-color: #f1f1f1;
  }

  .change {
    width: 25px;
    height: 20px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #4CAF50;
    font-weight: bold;
    font-size: 20px;
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
<div id="ajustement">
    <div class="aj" id="speedFrequency">
        <span class="sp">Fq-Acc :</span>
        <button class="change" id="plus-speedFrequency">+</button>
        <span class="sp val" id="speedFrequency-value">0</span>
        <button class="change" id="moins-speedFrequency">-</button>
    </div>
    <div class="aj" id="accelerationPerSecond">
        <span class="sp">Vitess : </span>
        <button class="change" id="plus-accelerationPerSecond">+</button>
        <span class="sp val" id="accelerationPerSecond-value">0</span>
        <button class="change" id="moins-accelerationPerSecond">-</button>
    </div>
    <div class="aj" id="angleFrequency">
        <span class="sp">Fq-Ang :</span>
        <button class="change" id="plus-angleFrequency">+</button>
        <span class="sp val" id="angleFrequency-value">0</span>
        <button class="change" id="moins-angleFrequency">-</button>
    </div>
    <div class="aj" id="maxAngleDeviation">
        <span class="sp">Mx-Ang :</span>
        <button class="change" id="plus-maxAngleDeviation">+</button>
        <span class="sp val" id="maxAngleDeviation-value">0</span>
        <button class="change" id="moins-maxAngleDeviation">-</button>
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