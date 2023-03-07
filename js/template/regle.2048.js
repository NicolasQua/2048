import { height_box_main_left, width_box_main_left } from "../utils/variables.js";

const regle_2048 = document.createElement('template');

regle_2048.innerHTML = `<style>
  .card-main-right {
    position: relative;
    border-radius: 5px;
    margin: 5px;
    height: ${height_box_main_left}px;
    width: ${width_box_main_left - 10}px;
    background-color: white;
  }
</style>
`;

export { regle_2048 }