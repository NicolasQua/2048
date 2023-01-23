export class Fonctionalities {

    static gameOver(ctx, canvasWidth, canvasHeight){                                    // game over (function)
        ctx.save();                                         // save the context of the canvas (save the color of the canvas)
        ctx.font = 'bold 50px sans-serif';                  // set the font of the text
        ctx.fillStyle = 'red';                              // set the color of the text
        ctx.textAlign = 'center';                           // set the align of the text
        ctx.textBaseline = 'middle';                        // set the baseline of the text
        ctx.strokeStyle = 'white';                          // set the color of the stroke
        ctx.lineWidth = 5;                                  // set the width of the stroke
        let centreX = canvasWidth / 2;                      // set the x position of the text
        let centreY = canvasHeight / 2;                     // set the y position of the text
        ctx.strokeText('Game Over', centreX, centreY - 165);    // draw the text (stroke the text) with the context, the text, the x position and the y position as parameters
        ctx.fillText('Game Over', centreX, centreY - 165);      // draw the text (fill the text) with the context, the text, the x position and the y position as parameters
        ctx.font = 'bold 20px sans-serif';                  // set the font of the text
        ctx.strokeText('Appuyer sur la touche Entrer pour rejouer', centreX, centreY - 120);    // draw the text (stroke the text) with the context, the text, the x position and the y position as parameters
        ctx.fillText('Appuyer sur la touche Entrer pour rejouer', centreX, centreY - 120);      // draw the text (fill the text) with the context, the text, the x position and the y position as parameters
        ctx.restore();                                      // restore the context of the canvas (restore the color of the canvas)
    }

    static drawScore(ctx, score, canvasWidth, canvasHeight){                                   // draw the score on the canvas (function) with the context and the position as parameters  
        ctx.save();                                         // save the context of the canvas (save the color of the canvas)
        ctx.font = 'bold 100px sans-serif';                 // set the font of the text
        ctx.fillStyle = 'gray';                             // set the color of the text
        ctx.textAlign = 'center';                           // set the align of the text
        ctx.textBaseline = 'middle';                        // set the baseline of the text
        let centreX = canvasWidth / 2;                      // set the x position of the text
        let centreY = canvasHeight / 2;                     // set the y position of the text
        ctx.fillText(score.toString(), centreX, centreY);   // draw the text (fill the text) with the context, the text, the x position and the y position as parameters
        ctx.restore();                                      // restore the context of the canvas (restore the color of the canvas)
    }

    static drawBlock(ctx, position, blockSize){                      // draw the snake on the canvas (function) with the context and the position as parameters
        let x = position[0] * blockSize;                    // set the x position of the snake
        let y = position[1] * blockSize;                    // set the y position of the snake
        ctx.fillRect(x, y, blockSize, blockSize);           // draw the snake
    }
}