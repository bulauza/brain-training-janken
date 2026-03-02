document.onkeydown = e => {
    console.log(e.key);
    const parent = document.getElementById("myhand-content");
    switch(e.code) {
        case "Enter":
            document.getElementById("start-btn").click();
            break;
    }

    if(!is_started) return 0;

    switch(e.code) {
        case "KeyA":
            parent.children[0].click();
            break;
        case "KeyS":
            parent.children[1].click();
            break;
        case "KeyD":
            parent.children[2].click();
            break;
        
    }
};