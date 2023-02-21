import { height_box_main_left, width_box_main_left } from "../utils/variables.js";

const template_left = document.createElement('template');

template_left.innerHTML = `<style>
  .card-main-left {
    position: relative;
    border-radius: 5px;
    margin: 5px;
    height: ${height_box_main_left}px;
    width: ${width_box_main_left - 10}px;
    background-color: white;
  }
</style>
`;

export { template_left }