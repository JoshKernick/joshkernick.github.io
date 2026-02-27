class Circle {
    constructor(info, marker) {
        this.x = info.x;
        this.y = info.y;
        this.colour = info.colour;
        this.angle = info.angle;

        this.diameter = marker.diameter;
        this.thickness = marker.thickness || 0.05;
    }

    display() {
        push();
        noFill();
        stroke(this.colour);
        strokeWeight(toPixels(this.thickness));
        ellipse(this.x, this.y, toPixels(this.diameter));
        pop();
    }
}

class Dot {
    constructor(info, marker) {
        this.x = info.x;
        this.y = info.y;
        this.colour = info.colour;
        this.angle = info.angle;

        this.diameter = marker.diameter || 1;
    }

    display() {
        push();
        fill(this.colour);
        ellipse(this.x, this.y, toPixels(this.diameter));
        pop();
    }
}

class Rectangle {
    constructor(info, marker) {
        this.x = info.x;
        this.y = info.y;
        this.colour = info.colour;
        this.angle = info.angle;

        this.width = marker.width || 1;
        this.height = marker.height || 1;

        this.w = toPixels(this.width);
        this.h = toPixels(this.height);
    }

    display() {
        push();
        fill(this.colour);
        translate(this.x, this.y);
        rotate(this.angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}

class Triangle {
    constructor(info, marker) {
        this.x = info.x;
        this.y = info.y;
        this.colour = info.colour;
        this.angle = info.angle;

        this.width = marker.width || 5;
        this.height = marker.height || 5;

        this.w = toPixels(this.width);
        this.h = toPixels(this.height);
    }

    display() {
        push();
        fill(this.colour);
        translate(this.x, this.y);
        rotate(this.angle);
        triangle(-this.w / 2, -this.h / 2, this.w / 2, -this.h / 2, 0, this.h / 2);
        pop();
    }
}

class Number {
    constructor(info, marker) {
        this.x = info.x + toPixels(marker.offsetX || 0);
        this.y = info.y + toPixels(marker.offsetY || 0);
        this.colour = info.colour;

        this.angle = 0;  // default

        if (marker.rotation === "outward" || (marker.rotation == undefined && marker.numbers == "minute")) {
            this.angle = info.angle;
            if (this.angle > Math.PI / 2 && this.angle < 3 * Math.PI / 2) {
                this.angle += Math.PI;
            }
        }

        let degree_to_number = Math.round((degrees(info.angle) / 30)) % 12;

        let digits = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        if (marker.numbers == "minute") {
            digits = [60, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
            if (marker.five) { digits[1] = "05"; }
        }

        if (marker.numbers == "13-24") {
            digits = [24, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        }

        if (marker.numbers == "24hour") {
            digits = [24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
            degree_to_number = Math.round((degrees(info.angle) / 15)) % 12;
        }

        this.number = digits[degree_to_number];
        this.size = toPixels(marker.size || 2);

        this.font = fonts.includes(marker.font) ? marker.font : default_font;
    }

    display() {
        push();
        fill(this.colour);
        translate(this.x, this.y);
        rotate(this.angle);
        textAlign(CENTER, CENTER);
        textSize(this.size);
        textFont(this.font);
        text(this.number, 0, 0);
        pop();
    }
}

class Numeral {
    constructor(info, marker) {
        this.x = info.x + toPixels(marker.offsetX || 0);
        this.y = info.y + toPixels(marker.offsetY || 0);
        this.colour = info.colour;
        this.angle = marker.rotation ? info.angle : 0;

        let numberals = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
        if (marker.IIII) { numberals[4] = "IIII"; }
        let degree_to_number = Math.round((degrees(info.angle) / 30)) % 12;

        this.number = numberals[degree_to_number];
        this.size = toPixels(marker.size || 2);

        this.font = fonts.includes(marker.font) ? marker.font : default_font;
    }

    display() {
        push();
        fill(this.colour);
        translate(this.x, this.y);
        rotate(this.angle);
        textAlign(CENTER, CENTER);
        textSize(this.size);
        textFont(this.font);
        text(this.number, 0, 0);
        pop();
    }
}

class Text {
    constructor(info, marker) {
        this.x = info.x;
        this.y = info.y;
        this.colour = info.colour;
        this.angle = info.angle;

        this.text = marker.text || "TEXT";
        this.size = toPixels(marker.size || 2);

        this.font = fonts.includes(marker.font) ? marker.font : default_font;
    }

    display() {
        push();
        fill(this.colour);
        textAlign(CENTER, CENTER);
        textSize(this.size);
        textFont(this.font);
        text(this.text, this.x, this.y);
        pop();
    }
}

shapes = {
    "Circle": Circle,
    "Dot": Dot,
    "Rectangle": Rectangle,
    "Triangle": Triangle,
    "Number": Number,
    "Numbers": Number,
    "Numeral": Numeral,
    "Numerals": Numeral,
    "Text": Text
}
