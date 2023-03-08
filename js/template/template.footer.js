import { height_box_header, width_box_main_left, width_box_main_center } from "../utils/variables.js";
const template_button_reset_score = document.createElement('template');

template_button_reset_score.innerHTML = `<style>

.card-footer {
    border-radius: 5px;
    margin: 5px;
    justify-content: center;
	align-items: center;
    height: ${height_box_header - 50}px;
    width: ${width_box_main_left * 2 + width_box_main_center - 5}px;
    background-color: white;
  }

  .btn {
    width: 140px;
    height: 50px;
    margin: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  #score-reset {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

    #boutons-score, #boutons-success {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    #boutons-reset {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    #score, #success {
        font-size: 30px;
        font-weight: bold;
        color: #000;
        background-color: #ddd;
        border-radius: 5px;
        padding: 5px;
        padding-left: 20px;
        padding-right: 20px;

    }

    #reset {
        background-color: #ddd;
        border-radius: 5px;
        padding: 5px;
        padding-left: 20px;
        padding-right: 20px;
    }

</style>
<div id="score-reset">
    <div id="boutons-score">
        <button class="btn">SCORE :</button>
        <span id="score">0</span>
    </div>
    <div id="boutons-success">
        <button class="btn">SUCCESS :</button>
        <span id="success">0</span>
    </div>
    <div id="boutons-reset">
        <button id="reset" class="btn">RESET</button>
    </div>
</div>
`;

export { template_button_reset_score }