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
    border-radius: 5px;
    border: 1px solid #999;
    font-weight: bold;
  }

  #add8, #_1, #_9 {
    background-color: rgb(255, 255, 223);
  }

  #add16 , #_2 {
    background-color: rgb(255, 255, 191);
  }

  #add32, #_4 {
    background-color: rgb(255, 255, 127);
  }

  #add64, #_2048 , #_8 {
    background-color: rgb(255, 255, 0);
  }

  #add128 , #_7 {
    background-color: rgb(255, 191, 0);
  }

  #add256, #_256, #_6 {
    background-color: rgb(255, 127, 0);
  }

  #add512, #_512 , #_5 {
    background-color: rgb(255, 0, 0);
  }

  #add1024, #_1024 , #_3 {
    background-color: rgb(255, 0, 0);
  }

  #success {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  #success-256, #success-512, #success-1024, #success-2048 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .succes {
    font-weight: bold;
    color: #000;
    background-color: #ddd;
    border: 1px solid #999;
    border-radius: 5px;
    padding: 5px;
  }

  .btn-s {
    margin: 5px;
    border-radius: 5px;
    border: 1px solid #999;
    padding: 5px;
  }

  #change-taille, .ch {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-left: 10px;
  }

  table {
    border: 2px solid black;
  }

  td {
    border: 1px solid black;
    text-align: center;
    font-size: 8px;
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
</div>

<div id="success">
    <div id="success-256">
        <div class="btn-s" id="_256">SUCCESS[256] :</div>
        <span class="succes" id="256">0</span>
    </div>
    <div id="success-512">
        <div class="btn-s" id="_512">SUCCESS[512] :</div>
        <span class="succes" id="512">0</span>
    </div>
    <div id="success-1024">
        <div class="btn-s" id="_1024">SUCCESS[1024]:</div>
        <span class="succes" id="1024">0</span>
    </div>
    <div id="success-2048">
        <div class="btn-s" id="_2048">SUCCESS[2048]:</div>
        <span class="succes" id="2048">0</span>
    </div>
</div>

<div id="change-taille">
  <div class="ch">
    <table>
    <tr> <td id="_1">8</td> <td id="_2">16</td> <td id="_3">124</td> </tr>
    <tr> <td id="_4">32</td> <td id="_5">512</td> <td id="_6">256</td> </tr>
    <tr> <td id="_7">128</td> <td id="_8">2048</td> <td id="_9">8</td> </tr>
    </table>
  </div>
  <div class="ch">
    <button class="change" id="plus">+</button>
    <span class="sp val" id="row">4</span>
    <span class="sp" id="size">x</span>
    <span class="sp val" id="col">4</span>
    <button class="change" id="moins">-</button>
  </div>
</div>`;

export { template_button_add_value_2048 }


