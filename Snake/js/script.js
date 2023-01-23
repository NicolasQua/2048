import {Snake} from './snake.js';
import {Apple} from './apple.js';
import { Fonctionalities } from './fonctionalities.js';
import { height_box_main_center , width_box_main_center } from "../../js/utils/variables.js";

export class SnakeStart {
    constructor() {

        let canvasWidth = width_box_main_center - 10; // set the width of the canvas as a global variable (the width of the canvas)
        let canvasHeight = height_box_main_center; // set the height of the canvas as a global variable (the height of the canvas)
        let blockSize = 20; // set the size of the blocks (the size of the snake and the apple) as a global variable
        let ctx; // set the context of the canvas (the color of the canvas) as a global variable
        let delay = 100; // set the delay of the game (the time between each refresh of the canvas)
        let snakee; // create the snake object (constructor) with the position as parameter
        let applee; // create the apple object (constructor) with the position as parameter
        let widthInBlocks = canvasWidth / blockSize; // set the width of the canvas in blocks (the number of blocks in the canvas)
        let heightInBlocks = canvasHeight / blockSize; // set the height of the canvas in blocks (the number of blocks in the canvas)
        let score; // set the score of the game (the number of apples eaten)
        let timeout; // set the timeout of the game (the time between each refresh of the canvas)

        this.initCanvas = function () {
            let canvas = document.createElement('canvas'); // create the canvas element (the canvas)
            canvas.width = canvasWidth; // set the width of the canvas
            canvas.height = canvasHeight; // set the height of the canvas

            canvas.style.border = '3px solid grey'; // set the border of the canvas
            canvas.style.margin = '5px auto'; // set the margin of the canvas
            canvas.style.display = 'block'; // set the display of the canvas
            canvas.style.backgroundColor = '#ddd'; // set the background color of the canvas
            document.querySelector("home-component")
            .shadowRoot.querySelector("main-component")
            .shadowRoot.querySelector("main-component-center")
            .shadowRoot.appendChild(canvas); // add the canvas to the body of the page (add the canvas to the page)
            ctx = canvas.getContext('2d'); // get the context of the canvas
            snakee = new Snake([[6, 4], [5, 4], [4, 4]], "right"); // create the snake
            applee = new Apple([10, 10], blockSize); // create the apple (constructor) with the position as parameter
            score = 0; // set the score to 0 (the number of apples eaten)
            refreshCanvas(); // call the function (refresh the canvas)
        };

        function refreshCanvas() {
            snakee.advance(); // call the function  (advance the snake)   with the context and the position as parameters

            if (snakee.checkCollision(widthInBlocks, heightInBlocks)) { // if the snake is colliding with the wall or itself
                Fonctionalities.gameOver(ctx, canvasWidth, canvasHeight); // call the function  (game over)   with the context and the position as parameters
            } else {
                if (snakee.isEatingApple(applee)) { // if the snake is eating the apple
                    score++; // add 1 to the score (the number of apples eaten)
                    delay -= 5; // decrease the delay of the game (the time between each refresh of the canvas)
                    snakee.ateApple = true; // set the ate apple to true
                    do { // do while the apple is on the snake
                        applee.setNewPosition(widthInBlocks, heightInBlocks); // call the function  (set the new position of the apple)   with the context and the position as parameters
                    } while (applee.isOnSnake(snakee)); // while the apple is on the snake
                }
                ctx.clearRect(0, 0, canvasWidth, canvasHeight); // clear the canvas (clear the background) with the context, the x position, the y position, the width and the height as parameters
                Fonctionalities.drawScore(ctx, score, canvasWidth, canvasHeight); // call the function  (draw the score)  
                snakee.draw(ctx, blockSize); // call the function  (draw the snake)
                applee.draw(ctx); // call the function  (draw the apple) 
                timeout = setTimeout(refreshCanvas, delay); // call the function every 100ms (refresh the canvas) with the context and the delay as parameters
            }
        }

        function restart() {
            snakee = new Snake([[6, 4], [5, 4], [4, 4]], "right"); // create the snake (constructor) with the body and the direction as parameters
            applee = new Apple([10, 10], blockSize); // create the apple (constructor) with the position as parameter
            score = 0; // set the score to 0 (the number of apples eaten)
            clearTimeout(timeout); // clear the timeout
            delay = 100; // set the delay to 100ms (the time between each refresh of the canvas)
            refreshCanvas(); // call the function (refresh the canvas)
        }

        document.onkeydown = function handleKeyDown(e) {
            let key = e.key; // set the key of the event
            let newDirection; // set the new direction of the snake
            switch (key) { // switch the key of the event
                case 'ArrowLeft': // if the key is 37 (left)  set the new direction to left
                    newDirection = 'left';
                    break; // break the switch
                case 'ArrowUp': // if the key is 38 (up)  set the new direction to up
                    newDirection = 'up'; // break the switch
                    break; // break the switch (up)    set the new direction to up
                case 'ArrowRight': // if the key is 39 (right)  set the new direction to right
                    newDirection = 'right'; // break the switch  set the new direction to right
                    break; // break the switch  set the new direction to right
                case 'ArrowDown': // if the key is 40 (down)  set the new direction to down
                    newDirection = 'down'; // break the switch  set the new direction to down
                    break; // break the switch  set the new direction to down
                case 'Enter': // if the key is 13 (enter)
                    restart(); // call the function (restart the game)  set the new direction to down
                    return; // return  set the new direction to down
                default: // if the key is invalid
                    return; // return
            }
            if( e.preventDefault){
                e.preventDefault();
                e.stopPropagation();
            }else{
                Event.returnValue = false;
                Event.cancelBubble = true;
            }
            snakee.setDirection(newDirection); // call the function (set the direction of the snake) with the new direction as parameter
        };
    }
}
