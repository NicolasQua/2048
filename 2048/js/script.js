window.onload = init;
function init() {
    let element = document.querySelector('#canvas');

    let width = 500;
    let height = 500;

    let ctx = element.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, width, height);
}