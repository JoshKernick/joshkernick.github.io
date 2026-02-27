function keyPressed() {
    if (key == "p" || key == " ") {
        paused = !paused;
    }
    if (key == "s") {
        step = true;
        paused = true;
    }
    if (key == "c") {
        dial.consoleLogMarkers();
    }
    if (key == "Shift") {
        shift = true;
    }
    if (key == "Control") {
        ctrl = true;
    }
    if (key == "q") {
        shift = false;
        ctrl = false;
        lmb = false;
    }
    // console.log(key, keyCode);
}

function keyReleased() {
    if (key == "Shift") {
        shift = false;
    }
    if (key == "Control") {
        ctrl = false;
    }
    // console.log(key, keyCode);
}

function mousePressed() {
    if (mouseButton == "left") {
        lmb = true;
    }
    // console.log(mouseButton);
}

function mouseReleased() {
    if (mouseButton == "left") {
        lmb = false;
    }
    // console.log(mouseButton);
}

function mouseWheel() {
    // console.log(event.delta)
}

// ---

function toPixels(mm) {
    return mm * SCALE;
}

function toMM(pixels) {
    return pixels / SCALE;
}
