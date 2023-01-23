import { Fonctionalities } from "./fonctionalities.js";

export class Snake{

    constructor(body, direction){
        this.body = body;
        this.direction = direction;
        this.ateApple = false;
    }

    draw(ctx, blockSize){                             // draw the snake on the canvas
        ctx.save();                                     // save the context of the canvas (save the color of the canvas)
        ctx.fillStyle = 'red';                          // set the color of the snake
        for(let i = 0; i < this.body.length; i++){
            Fonctionalities.drawBlock(ctx, this.body[i], blockSize);               // call the function (draw the snake)   with the context and the position as parameters
        }
        ctx.restore();                                  // restore the context of the canvas (restore the color of the canvas)
    }

    advance(){                          // advance the snake (function)   with the context and the position as parameters
        let nextPosition = this.body[0].slice();        // copy the first element of the array (copy the head of the snake) slice() = copy the array
        switch(this.direction){                         // switch the direction of the snake (switch the direction of the snake)
            case 'left':
                nextPosition[0] -= 1;                   // move the snake to the left
                break;
            case 'right':
                nextPosition[0] += 1;                   // move the snake to the right
                break;
            case 'down':
                nextPosition[1] += 1;                   // move the snake down
                break;
            case 'up':
                nextPosition[1] -= 1;                   // move the snake up
                break;
            default:
                throw('Invalid direction');             // throw an error if the direction is invalid
        }
        this.body.unshift(nextPosition);                // add element at the beginning of the array (add the head of the snake) unshift() = add element at the beginning of the array
        if(!this.ateApple)
            this.body.pop();                                // remove the last element of the array (remove the tail of the snake) pop() = remove the last element of the array
        else
            this.ateApple = false;                          // set the ate apple to false
    }

    setDirection(newDirection){        // set the direction of the snake (function) with the new direction as parameter 
        let allowedDirections;                          // set the allowed directions of the snake (set the allowed directions of the snake)
        switch(this.direction){                         // switch the direction of the snake (switch the direction of the snake)    set the allowed directions of the snake
            case 'left':                            // if the direction is left   set the allowed directions of the snake
            case 'right':                           // if the direction is right   set the allowed directions of the snake
                allowedDirections = ['up', 'down'];  // set the allowed directions of the snake (up and down)
                break;                              // break the switch   set the allowed directions of the snake (up and down) 
            case 'down':                            // if the direction is down   set the allowed directions of the snake (up and down) 
            case 'up':                              // if the direction is up   set the allowed directions of the snake (up and down)   
                allowedDirections = ['left', 'right'];  // set the allowed directions of the snake (left and right) 
                break;                              // break the switch   set the allowed directions of the snake (left and right)  
            default:                            // if the direction is invalid   set the allowed directions of the snake (left and right)
                throw('Invalid direction');         // throw an error if the direction is invalid   set the allowed directions of the snake (left and right)
        }
        if(allowedDirections.indexOf(newDirection) > -1){  // if the new direction is allowed   set the allowed directions of the snake (left and right)
            this.direction = newDirection;                  // set the direction of the snake to the new direction   set the allowed directions of the snake (left and right)
        }

    }

    checkCollision(widthInBlocks, heightInBlocks){                   // check the collision of the snake (function) with the context and the position as parameters
        let wallCollision = false;                      // set the wall collision to false (set the wall collision to false)
        let snakeCollision = false;                     // set the snake collision to false (set the snake collision to false)
        let head = this.body[0];                        // set the head of the snake (set the head of the snake)
        let rest = this.body.slice(1);                  // set the rest of the snake (set the rest of the snake)
        let snakeX = head[0];                           // set the x position of the snake (set the x position of the snake)
        let snakeY = head[1];                           // set the y position of the snake (set the y position of the snake)
        let minX = 0;                                   // set the minimum x position of the snake (set the minimum x position of the snake)
        let minY = 0;                                   // set the minimum y position of the snake (set the minimum y position of the snake)
        let maxX = widthInBlocks - 1;                   // set the maximum x position of the snake (set the maximum x position of the snake)
        let maxY = heightInBlocks - 1;                  // set the maximum y position of the snake (set the maximum y position of the snake)
        let isNotBetweenHorizontalWalls = snakeX < minX || snakeX > maxX;  // set the horizontal wall collision to true (set the horizontal wall collision to true)
        let isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY;    // set the vertical wall collision to true (set the vertical wall collision to true)

        if(isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls){      // if the snake is not between the horizontal or vertical walls   set the vertical wall collision to true
            wallCollision = true;                                           // set the wall collision to true   set the vertical wall collision to true
        }

        for(let i = 0; i < rest.length; i++){                              // for each element of the rest of the snake   set the vertical wall collision to true
            if(snakeX === rest[i][0] && snakeY === rest[i][1]){            // if the x position of the snake is equal to the x position of the rest of the snake and the y position of the snake is equal to the y position of the rest of the snake   set the vertical wall collision to true
                snakeCollision = true;                                      // set the snake collision to true   set the vertical wall collision to true
            }
        }
        return wallCollision || snakeCollision;                            // return the wall collision or the snake collision   set the vertical wall collision to true
    }

    isEatingApple (appleToEat){                           // check if the snake is eating the apple (function) with the apple to eat as parameter    set the vertical wall collision to true
        let head = this.body[0];                                        // set the head of the snake (set the head of the snake)    set the vertical wall collision to true 
        if(head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1])  // if the x position of the snake is equal to the x position of the apple and the y position of the snake is equal to the y position of the apple
            return true;                                                // return true
        return false;                                               // return false
    };
}