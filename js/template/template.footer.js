
const template_button_reset_score = document.createElement('template');

template_button_reset_score.innerHTML = `<style>
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

    #boutons-score {
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

    #score {
        font-size: 30px;
        font-weight: bold;
        color: #000;
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
        <span id="score"></span>
    </div>
    <div id="boutons-reset">
        <button class="btn">RESET</button>
    </div>
</div>

`;

export { template_button_reset_score }