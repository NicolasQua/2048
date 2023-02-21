import { height_box_main_left, width_box_main_left } from "../utils/variables.js";

const template_button_add_value_2048 = document.createElement('template');

template_button_add_value_2048.innerHTML = `<style>
  .card-main-left {
    position: relative;
    border-radius: 5px;
    margin: 5px;
    height: ${height_box_main_left}px;
    width: ${width_box_main_left - 10}px;
    background-color: white;
  }

  .btn {
    width: 42px;
    height: 40px;
    margin: 5px;
  }
</style>
<div id="add-val">
    <div id="boutons-row-1">
        <button class="btn" id="add8">8</button>
        <button class="btn" id="add16">16</button>
        <button class="btn" id="add32">32</button>
        <button class="btn" id="add64">64</button>
    </div>
    <div id="boutons-row-2">
        <button class="btn" id="add128">128</button>
        <button class="btn" id="add256">256</button>
        <button class="btn" id="add512">512</button>
        <button class="btn" id="add1024">1024</button>
    </div>
</div>`;

export { template_button_add_value_2048 }