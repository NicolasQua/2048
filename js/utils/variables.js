const intElemClientHeight = window.innerHeight;
const intElemClientWidth = window.innerWidth - 50;

const height_box_home = intElemClientHeight;
const width_box_home = intElemClientWidth - 10;

const height_box_header = height_box_home / 5;
const width_box_header = width_box_home - 10;

const height_box_main = intElemClientHeight - (2 * height_box_header);
const width_box_main = intElemClientWidth - 10;

const height_box_main_left = height_box_main;
const width_box_main_left = width_box_main / 5;

const height_box_main_right = height_box_main;
const width_box_main_right = width_box_main_left ;

const height_box_main_center = height_box_main;
const width_box_main_center = width_box_main -  (width_box_main_left + width_box_main_right);

export { intElemClientHeight,
          intElemClientWidth,
          height_box_header,
          width_box_header,
          height_box_main,
          width_box_main,
          height_box_home,
          width_box_home,
          height_box_main_left,
          width_box_main_left,
          height_box_main_right,
          width_box_main_right,
          height_box_main_center,
          width_box_main_center
      }