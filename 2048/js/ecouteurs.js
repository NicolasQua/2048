function ecouteursClavier() {
    let depl = [0, 0];
    document.onkeydown = (e) => {
        depl = [0, 0];
        e = e || window.event;
        console.log(event.key);
        switch(e.key) {
            case "ArrowLeft":
                depl = [0, -1];
                console.log ("touche left appuyé et depl = " + depl);
                return depl;
            case "ArrowRight":
                depl = [0, 1];
                return depl;
            case "ArrowDown":
                depl = [-1, 0];
                return depl;
            case "ArrowUp":
                depl = [1, 0];
                return depl;
        }
        return depl;
    }
    depl = [0, 1];
    return depl;
}

export {ecouteursClavier};