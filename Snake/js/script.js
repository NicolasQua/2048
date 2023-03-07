import { height_box_main_center, width_box_main_center } from "../../js/utils/variables.js";
import { query_selector_root, query_selector_footer } from "../../js/components/request.queryselector.js";
import { button_reset } from "../../js/utils/gestionnaire.js";
import { Fonctionalities } from "./fonctionalities.js";
import  { inputStates,
          definitEcouteurs,
          ecouteursButtonsPlay,
          ecouteursButtonsStop,
          ecouteursButtonsChangeBg1,
          ecouteursButtonsChangeBg2,
          ecouteursButtonsChangeBg3 }  from  "./ecouteurs.js" ;

let ctx;

// Trick to create arrays filled with zero values
let x = Array.apply(null, Array(10)).map(Number.prototype.valueOf, 0);
let y = Array.apply(null, Array(10)).map(Number.prototype.valueOf, 0);
let len = Array.apply(null, Array(20)).map(Number.prototype.valueOf, 10);
x[0] = 10;
y[0] = 10;

let INSTRUCT = "instruct";
let PLAY = "play";
let PAUSE = "pause";
let mode = INSTRUCT;

// Static snake settings
let segLength = 10;
let segWidth = 12;
let segMinWidth = 8;
let headWidth = 10;
let headLength = 15;
let tailLength = 50;
let tailWidth = 10;
let headColor = "orange";

// Static mouse settings
let mouseLength = 10;
let mouseWidth = 10;
let mouseColor = "brown";

// Settings that control the movement of the snake
let stretchFactor = 0.75;  // how far will a segment stretch to take up empty space 
let currentTime = 0;  // Milliseconds since start.  Used for movement that leties over time.
let speedFrequency = 1000; // Frequency of speed change in milliseconds
let minSnakeSpeed = 1.05; // minimum speed (1 + number of segLengths per frame)
let maxSnakeSpeed = 1.20; // maximum speed (1 + number of segLengths per frame)
let accelerationPerSecond = 0.005;
let angleFrequency = 1000;  // Frequency of angle change in milliseconds
let maxAngleDeviation = 0.9; // Max deviation from correct angle

// Game variables
let startTime = 0;
let mouseLeftPlayingArea = false;
let canvas;

let score = 0;


let canvasWidth = width_box_main_center - 10; // set the width of the canvas as a global letiable (the width of the canvas)
let canvasHeight = height_box_main_center; // set the height of the canvas as a global letiable (the height of the canvas)
let pattern1;
let pattern2;

let direction = { x: canvasWidth, y: canvasHeight };
let drawnMousePos = { x: 0, y: 0};
let mousePos = { x: Math.round(Math.random() * (canvasWidth - 1)), y: Math.round(Math.random() * (canvasHeight - 1)) };

export function initCanvas() {
    x[0] = 10;
    y[0] = 10;
    direction = { x: canvasWidth, y: canvasHeight };
    canvas = document.createElement('canvas'); // create the canvas element (the canvas)
    canvas.width = canvasWidth; // set the width of the canvas
    canvas.height = canvasHeight; // set the height of the canvas

    canvas.style.backgroundColor = "white";
    canvas.style.borderRadius = "15px";
    canvas.style.boxShadow = "0 0 10px 0 rgba(0, 0, 0, 0.5)";
    canvas.style.display = "flex";
    canvas.style.justifyContent = "center";
    canvas.style.alignItems = "center";
    canvas.style.flexDirection = "column";
    canvas.style.margin = "auto";
    canvas.style.overflow = "auto";
    canvas.style.position = "relative";
    canvas.style.zIndex = "1";
    canvas.style.border = '3px solid grey'; // set the border of the canvas
    canvas.style.margin = '5px auto'; // set the margin of the canvas
    canvas.style.display = 'block'; // set the display of the canvas
    canvas.style.backgroundColor = '#ddd'; // set the background color of the canvas
    query_selector_root().appendChild(canvas); // add the canvas to the body of the page (add the canvas to the page)

    ctx = canvas.getContext('2d');

    definitEcouteurs();
    button_reset();

    let imageObj = new Image();
    imageObj.src = "http://www.abm.sk/HTML5/examples/img/snakePattern.png";
    imageObj.onload = function () {
        pattern1 = ctx.createPattern(imageObj, "repeat");
    };

    let imageObjBackground = new Image();

    // canvas.addEventListener('mousemove', function (evt) {
    //     if( !mouseLeftPlayingArea)  // Mouse can only move if they stayed in the area.
    //       mousePos = getMousePos(canvas, evt);
    // }, false);

    ecouteursButtonsPlay().addEventListener('click', function (evt) {
        if( mode === INSTRUCT || mode === PAUSE) {
          mode = PLAY;
          startTime = getCurrentTime();
          mouseLeftPlayingArea = false;
          requestAnimationFrame(animate);
        }
    }, false);

    ecouteursButtonsStop().addEventListener('click', function (evt) {
        if( mode === PLAY) {
          mode = PAUSE;
        }
    }, false);

    ecouteursButtonsChangeBg1().addEventListener('click', function (evt) {
        imageObjBackground.src = "./Snake/assets/image1.jpeg";
        imageObjBackground.onload = function () {
            pattern2 = ctx.createPattern(imageObjBackground, "repeat");
        };

    }, false);

    ecouteursButtonsChangeBg2().addEventListener('click', function (evt) {
        imageObjBackground.src = "./Snake/assets/image2.jpeg";
        imageObjBackground.onload = function () {
            pattern2 = ctx.createPattern(imageObjBackground, "repeat");
        };
    }, false);

    ecouteursButtonsChangeBg3().addEventListener('click', function (evt) {
        imageObjBackground.src = "./Snake/assets/image3.png";
        imageObjBackground.onload = function () {
            pattern2 = ctx.createPattern(imageObjBackground, "repeat");
        };
    }, false);

    // canvas.addEventListener('mouseleave', function (evt) {
    //     mouseLeftPlayingArea = true;
    // });
    drawInstructions();
};

function getMousePos(canvas, evt) {
    // necessary to take into account CSS boundaries
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function getCurrentTime() {
    let now = new Date();
    return now.getTime();
}

function drawInstructions() {
    // ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.font = "bold 30px Georgia";
    // ctx.fillStyle = 'orange';
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    let centreX = canvasWidth / 2;
    let centreY = canvasHeight / 2;
    ctx.strokeText('Welcome to "Eat the Mouse"', centreX, centreY - 70);
    ctx.fillText('Welcome to "Eat the Mouse"', centreX, centreY - 70);
    ctx.font = "15px Georgia";
    ctx.fillText('Click play to start.', centreX, centreY);
}

function animate(timestamp) {
    currentTime = getCurrentTime();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    query_selector_footer("[id='score']").innerHTML = score;

    // ADD A NICE BACKGROUND HERE?

    ctx.fillStyle = pattern2;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the mouse
    drawMouse(mousePos.x, mousePos.y);
    let newPos = closePredatorPreyGap();
    drawSnake(newPos.x, newPos.y);

    // DRAW EXTRA THINGS HERE?

    // // Stop if the mouse has been caught.
    if (mode === PLAY)
        requestAnimationFrame(animate);
    else if (mode === PAUSE)
        drawInstructions();
    else {
        Fonctionalities.gameOver(ctx, canvasWidth, canvasHeight);
    }
}

function setNewDirection(){
    let newDirection = { x: x[0], y:  y[0] };
    if (y[0] === y[1]){
        if (x[0] > x[1]){
            while(newDirection.x < canvasWidth){
                newDirection.x++;
            }
        } else {
            while(newDirection.x > 0){
                newDirection.x--;
            }
        }
        return newDirection;
    }
    if (x[0] === x[1]){
        if (y[0] > y[1]){
            while(newDirection.y < canvasHeight){
                newDirection.y++;
            }
        } else {
            while(newDirection.y > 0){
                newDirection.y--;
            }
        }
        return newDirection;
    }
    if (x[0] > x[1] && y[0] > y[1]){
        while(newDirection.x < canvasWidth && newDirection.y < canvasHeight){
            newDirection.x++;
            newDirection.y++;
        }
        return newDirection;
    }
    if (x[0] > x[1] && y[0] < y[1]){
        while(newDirection.x < canvasWidth && newDirection.y > 0){
            newDirection.x++;
            newDirection.y--;
        }
        return newDirection;
    }
    if (x[0] < x[1] && y[0] > y[1]){
        while(newDirection.x > 0 && newDirection.y < canvasHeight){
            newDirection.x--;
            newDirection.y++;
        }
        return newDirection;
    }
    if (x[0] < x[1] && y[0] < y[1]){
        while(newDirection.x > 0 && newDirection.y > 0){
            newDirection.x--;
            newDirection.y--;
        }
        return newDirection;
    }
}

function closePredatorPreyGap() {

    let newX, newY, newSpeed;
    let ppMX = drawnMousePos.x - x[0];
    let ppMY = drawnMousePos.y - y[0];
    let ppX = direction.x - x[0];
    let ppY = direction.y - y[0];
    let ppAngle = Math.atan2(ppY, ppX);

    let ppDist = Math.sqrt(Math.pow(ppMX, 2) + Math.pow(ppMY, 2));

    if (x[0] >= canvasWidth || y[0] >= canvasHeight || x[0] <= 0 || y[0] <= 0) {
        // game over!
        mode = INSTRUCT;
        newX = x[0];
        newY = y[0];
    }
    else if (ppDist <= segLength) {
        // The mouse is caught!
        mode = PLAY;
        newX = drawnMousePos.x;
        newY = drawnMousePos.y;
        mousePos.x = Math.round(Math.random() * (canvasWidth - 1));
        mousePos.y = Math.round(Math.random() * (canvasHeight - 1));
        score += 1;
    }else {
        newSpeed = oscillateValue(speedFrequency, 0, minSnakeSpeed, maxSnakeSpeed);
        newSpeed += (currentTime - startTime) / 1000 * accelerationPerSecond;      // Increase speed over time.
        if (inputStates.gauche) {
            direction = setNewDirection();
            ppAngle -= Math.PI / 2;
        }
        if (inputStates.droite) {
            direction = setNewDirection();
            ppAngle += Math.PI / 2;
        }
        ppAngle = oscillateValue(angleFrequency, 0, ppAngle - maxAngleDeviation, ppAngle + maxAngleDeviation);
        newX = x[0] + Math.cos(ppAngle) * (segLength * newSpeed);
        newY = y[0] + Math.sin(ppAngle) * (segLength * newSpeed);
    }
    return { x: newX, y: newY };
}

function drawMouse(posX, posY) {
    let dx = posX - drawnMousePos.x;
    let dy = posY - drawnMousePos.y;
    let angle = Math.atan2(dy, dx) + Math.PI;
    drawnMousePos.x = posX + Math.cos(angle) * mouseLength;
    drawnMousePos.y = posY + Math.sin(angle) * mouseLength;

    ctx.save();
    ctx.translate(posX, posY);
    ctx.rotate(angle);
    ctx.translate(0, -mouseWidth / 2);

    //ctx.strokeRect(0,0,mouseLength,mouseWidth); 

    // Draw the mouse body
    let bodyRadius = mouseWidth / 2;
    let noseRadius = mouseWidth / 6;
    ctx.fillStyle = mouseColor;

    // Top half
    ctx.beginPath();
    ctx.moveTo(mouseLength, bodyRadius);
    ctx.arcTo(mouseLength, 0, mouseLength - bodyRadius, 0, bodyRadius);
    ctx.arcTo(0, bodyRadius - noseRadius + 1, 0, bodyRadius, noseRadius);
    ctx.closePath();
    ctx.fill();

    // Bottom half
    ctx.beginPath();
    ctx.moveTo(mouseLength, bodyRadius);
    ctx.arcTo(mouseLength, mouseWidth, mouseLength - bodyRadius, mouseWidth, bodyRadius);
    ctx.arcTo(0, bodyRadius + noseRadius - 1, 0, bodyRadius, noseRadius);
    ctx.closePath();
    ctx.fill();

    // Draw the whiskers
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(noseRadius * 2, mouseWidth);
    //ctx.moveTo(noseRadius,0);
    //ctx.lineTo(noseRadius,mouseWidth);
    ctx.moveTo(noseRadius * 2, 0);
    ctx.lineTo(0, mouseWidth);
    ctx.stroke();

    // Draw the tail
    ctx.beginPath();
    ctx.strokeStyle = mouseColor;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.moveTo(mouseLength, bodyRadius);
    ctx.quadraticCurveTo(mouseLength + mouseLength / 6, mouseWidth, mouseLength + mouseLength / 2, bodyRadius);
    ctx.stroke();

    ctx.restore();
}

function drawSnake(posX, posY) {
    // DRAW BETTER HEAD HERE?
    dragSegment(0, posX, posY);

    for (let i = 0; i < x.length - 1; i++) {
        dragSegment(i + 1, x[i], y[i]);
    }

    // DRAW BETTER TAIL HERE ?
}

function dragSegment(i, xin, yin) {
    let dx = xin - x[i];
    let dy = yin - y[i];

    let angle = Math.atan2(dy, dx);

    if (i > 0) {
        let dl = Math.sqrt(dx * dx + dy * dy);
        if (dl > segLength)
            len[i] = segLength + stretchFactor * (dl - segLength);
    }

    x[i] = xin - Math.cos(angle) * len[i];
    y[i] = yin - Math.sin(angle) * len[i];

    ctx.save();

    // We draw the tail from the end of the snake, not to the end
    if (i === x.length - 1) {
        ctx.translate(x[i - 1], y[i - 1]);
        ctx.rotate(angle + Math.PI);
    } else {
        ctx.translate(x[i], y[i]);
        ctx.rotate(angle);
    }


    let segColor;

    // Generate funny colors, CHANGE THIS IF YOU LIKE 
    if (i % 3 == 1)
        segColor = "rgba(51, 146, 37, 255)";
    else if (i % 3 == 2)
        segColor = "rgba(206, 224, 39, 255)";
    else
        segColor = "rgba(229, 208, 39, 255)";

    if (i === 0)
        drawHead(0, 0, headLength, 0, headColor, headWidth);
    else if (i === x.length - 1)
        drawTail(0, 0, tailLength, 0, segColor, tailWidth);
    else
        drawLine(0, 0, len[i], 0, segColor, Math.max(segMinWidth, segWidth * segLength / len[i]));
    drawPattern(0, 0, len[i], 0, Math.max(segMinWidth, segWidth * segLength / len[i]));

    ctx.restore();
}

function drawLine(x1, y1, x2, y2, color, width) {
    ctx.save();

    ctx.strokeStyle = color;
    ctx.lineWidth = width;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    ctx.restore();
}

function drawPattern(x1, y1, x2, y2, width) {
    ctx.save();

    ctx.strokeStyle = pattern1;
    ctx.lineWidth = width;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    ctx.restore();
}

function drawTail(x1, y1, x2, y2, color, width) {
    let left = x1;
    let right = x2;
    let top = y1 - width / 2;
    let bottom = y2 + width / 2;
    let radius = 3;

    ctx.save();

    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.moveTo(left, top);
    ctx.arcTo(right, y2, left, bottom, radius);
    ctx.lineTo(left, bottom);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
}

function drawHead(x1, y1, x2, y2, color, width) {
    let radius = width / 2;
    let left = x1;
    let right = x2;
    let top = y1 - radius;
    let bottom = y2 + radius;
    ctx.save();

    // draw the head
    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.moveTo(left, top);
    ctx.lineTo(right - radius, top);
    ctx.arcTo(right, top, right, y2, radius);
    ctx.arcTo(right, bottom, right - radius, bottom, radius);
    ctx.lineTo(left, bottom);
    ctx.closePath();
    ctx.fill();

    // draw the eyes
    ctx.fillStyle = "black";

    ctx.beginPath();
    ctx.arc((right - radius) / 2, top + radius / 2, radius / 3, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc((right - radius) / 2, bottom - radius / 2, radius / 3, 0, 2 * Math.PI);
    ctx.fill();

    // flick a tongue out every so often
    let currentPos = Math.round(currentTime) % 3000;

    if (currentPos < 100 ||
        (currentPos > 200 && currentPos < 300)) {
        ctx.strokeStyle = "black";
        ctx.lineWidth = width / 10;
        ctx.beginPath();
        ctx.moveTo(right, y2);
        ctx.lineTo(right + (right - left) / 2, y2);
        ctx.stroke();
    }

    ctx.restore();
}

function oscillateValue(frequency, offset, minValue, maxValue) {
    let currentPos = (Math.round(currentTime) + offset) % frequency;
    let oscilationFactor = (1 + Math.sin(currentPos / frequency * 2 * Math.PI)) / 2;
    return minValue + (oscilationFactor * (maxValue - minValue));
}

function oscillateColor(frequency, offset, minColor, maxColor) {
    let r = oscillateValue(frequency, offset, minColor.r, maxColor.r);
    let g = oscillateValue(frequency, offset, minColor.g, maxColor.g);
    let b = oscillateValue(frequency, offset, minColor.b, maxColor.b);
    return "rgba(" + r + "," + g + "," + b + ",255)";
}
