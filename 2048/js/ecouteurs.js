function ecouteursClavier(dl, dc) {
    document.onkeydown = (e) => {
        e = e || window.event;
        console.log(event.key);
        switch(e.key) {
            case "ArrowLeft":
                dl=0;dc=-1;
                break;
            case "ArrowRight":
                dl=0;dc=1;
                break;
            case "ArrowDown":
                dl=-1;dc=0;
                break;
            case "ArrowUp":
                dl=1;dc=0;
                break;
        }
        return [dl, dc];
    }
    
}

export {ecouteursClavier};