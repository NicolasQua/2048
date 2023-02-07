let depl = [0, 0];

function ecouteursClavier() {
    document.onkeydown = (e) => {
        depl = [0, 0];
        e = e || window.event;
        console.log(event.key);
        switch(e.key) {
            case "ArrowLeft":
                depl = [0, -1];
                break;
            case "ArrowRight":
                depl = [0, 1];
                break;
            case "ArrowDown":
                depl = [-1, 0];
                break;
            case "ArrowUp":
                depl = [1, 0];
                break;
        }
    }
    depl = [0, 0]
}

export {ecouteursClavier, depl};