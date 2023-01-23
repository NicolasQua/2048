export class Apple {

    constructor(position, blockSize) {
        this.position = position;
        this.blockSize = blockSize;
    }

    draw (ctx){                               // draw the apple on the canvas (function) with the context and the position as parameters
        ctx.save();                                      // save the context of the canvas (save the color of the canvas)
        ctx.fillStyle = 'green';                        // set the color of the apple (set the color of the apple)
        ctx.beginPath();                               // begin the path of the apple (begin the path of the apple)
        let radius = this.blockSize/2;                    // set the radius of the apple (set the radius of the apple)
        let x = this.position[0] * this.blockSize + radius; // set the x position of the apple (set the x position of the apple)
        let y = this.position[1] * this.blockSize + radius; // set the y position of the apple (set the y position of the apple)
        ctx.arc(x, y, radius, 0, Math.PI*2, true); // draw the apple (draw the apple)
        ctx.fill();                                 // fill the apple (fill the apple)
        ctx.restore();                           // restore the context of the canvas (restore the color of the canvas)
    }

    setNewPosition(widthInBlocks, heightInBlocks){                // set the new position of the apple (function) with the context and the position as parameters
        let newX = Math.round(Math.random() * (widthInBlocks - 1)); // set the new x position of the apple (set the new x position of the apple)
        let newY = Math.round(Math.random() * (heightInBlocks - 1)); // set the new y position of the apple (set the new y position of the apple)
        this.position = [newX, newY];            // set the position of the apple to the new position (set the position of the apple to the new position)
    }

    isOnSnake(snakeToCheck){      // check if the apple is on the snake (function) with the snake to check as parameter
        let isOnSnake = false;                   // set the apple on the snake to false (set the apple on the snake to false)
        for(let i = 0; i < snakeToCheck.body.length; i++){ // for each element of the body of the snake to check (for each element of the body of the snake to check)
            if(this.position[0] === snakeToCheck.body[i][0] && this.position[1] === snakeToCheck.body[i][1]){ // if the x position of the apple is equal to the x position of the snake and the y position of the apple is equal to the y position of the snake
                isOnSnake = true;            // set the apple on the snake to true (set the apple on the snake to true)
            }
        }
        return isOnSnake;                    // return the apple on the snake (return the apple on the snake)
    }
}