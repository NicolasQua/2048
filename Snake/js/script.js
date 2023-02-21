import  { inputStates, definitEcouteurs }  from  "./ecouteurs.js" ;
import { height_box_main_center, width_box_main_center } from "../../js/utils/variables.js";
import { query_selector_root } from "../../js/components/request.queryselector.js";

let ctx;

// Trick to create arrays filled with zero values
let x = Array.apply(null, Array(10)).map(Number.prototype.valueOf, 0);
let y = Array.apply(null, Array(10)).map(Number.prototype.valueOf, 0);
let len = Array.apply(null, Array(20)).map(Number.prototype.valueOf, 10);
x[0] = 10;
y[0] = 10;

let mousePos;
let drawnMousePos = { x: 0, y: 0 };


let INSTRUCT = "instruct";
let PLAY = "play";
let mode = INSTRUCT;

// Static snake settings
let segLength = 10;
let segWidth = 12;
let segMinWidth = 8;
let headWidth = 10;
let headLength = 15;
let tailLength = 50;
let tailWidth = 10;
let headColor = "green";

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
let maxAngleDeviation = Math.PI / 3; // Max deviation from correct angle

// Game variables
let startTime = 0;
let mouseLeftPlayingArea = false;
let canvas;


let canvasWidth = width_box_main_center - 10; // set the width of the canvas as a global letiable (the width of the canvas)
let canvasHeight = height_box_main_center; // set the height of the canvas as a global letiable (the height of the canvas)
let pattern1;

let direction = { x: canvasWidth, y: canvasHeight };

export function initCanvas() {
    x[0] = 10;
    y[0] = 10;
    canvas = document.createElement('canvas'); // create the canvas element (the canvas)
    canvas.width = canvasWidth; // set the width of the canvas
    canvas.height = canvasHeight; // set the height of the canvas

    canvas.style.border = '3px solid grey'; // set the border of the canvas
    canvas.style.margin = '5px auto'; // set the margin of the canvas
    canvas.style.display = 'block'; // set the display of the canvas
    canvas.style.backgroundColor = '#ddd'; // set the background color of the canvas
    query_selector_root().appendChild(canvas); // add the canvas to the body of the page (add the canvas to the page)

    ctx = canvas.getContext('2d');

    definitEcouteurs();

    let imageObj = new Image();
    imageObj.src = "http://www.abm.sk/HTML5/examples/img/snakePattern.png";
    imageObj.onload = function () {
        pattern1 = ctx.createPattern(imageObj, "repeat");
    };

    canvas.addEventListener('mousemove', function (evt) {
        if( !mouseLeftPlayingArea)  // Mouse can only move if they stayed in the area.
          mousePos = getMousePos(canvas, evt);
    }, false);

    canvas.addEventListener('click', function (evt) {
        if( mode === INSTRUCT) {
          mode = PLAY;
          startTime = getCurrentTime();
          mouseLeftPlayingArea = false;
          requestAnimationFrame(animate);
        }
    }, false);

    canvas.addEventListener('mouseleave', function (evt) {
        mouseLeftPlayingArea = true;
    });

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
    let line = 1;
    let lineHeight = 20;
    let margin = 10;

    // ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.font = "bold 15px Georgia";
    ctx.fillText('Welcome to "Save the Mouse"', margin, margin + line++ * lineHeight);
    ctx.font = "15px Georgia";
    ctx.fillText('Move your pointer to keep the mouse from the snake.', margin, margin + line++ * lineHeight);
    ctx.fillText('You must keep your pointer inside the square.', margin, margin + line++ * lineHeight);
    ctx.fillText('The snake gets faster as he gets more hungry!', margin, margin + line++ * lineHeight);
    ctx.fillText('Click anywhere in the box to start.', margin, margin + line++ * lineHeight);
}

function drawResults() {

}

function animate(timestamp) {
    currentTime = getCurrentTime();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ADD A NICE BACKGROUND HERE?

    // draw the snake, only when the mouse entered at
    // least once the canvas surface
    if (mousePos !== undefined) {
        drawMouse(mousePos.x, mousePos.y);
        let newPos = closePredatorPreyGap();
        drawSnake(newPos.x, newPos.y);
    }

    // DRAW EXTRA THINGS HERE?

    // // Stop if the mouse has been caught.
    if (mode === PLAY)
        requestAnimationFrame(animate);
    else
        drawResults();
}

function setNewDirection(){
    let newDirection = { x: direction.x, y:  direction.y };
    let cX = x[0] - x[1];
    let cY = y[0] - y[1];
    for(;;){
        newDirection.x += cX;
        newDirection.y += cY;
        if (newDirection.x <= 0 || newDirection.y <= 0 || newDirection.x >= canvasWidth || newDirection.y >= canvasHeight)
            break;
    }
    return newDirection;
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
        mode = INSTRUCT;
        newX = drawnMousePos.x;
        newY = drawnMousePos.y;
    }else {
        newSpeed = oscillateValue(speedFrequency, 0, minSnakeSpeed, maxSnakeSpeed);
        newSpeed += (currentTime - startTime) / 1000 * accelerationPerSecond;      // Increase speed over time.
        if (inputStates.gauche) {
            ppAngle -= Math.PI / 2;
            direction = setNewDirection();
        }
        if (inputStates.droite) {
            ppAngle += Math.PI / 2;
            direction = setNewDirection();
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
