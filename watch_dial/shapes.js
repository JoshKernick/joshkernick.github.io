class Circle {
    constructor(info) {
        this.x = info.x;
        this.y = info.y;
        this.colour = info.colour;
        this.angle = info.angle;

        this.diameter = toPixels(info.shape_info.diameter);
        this.thickness = info.shape_info.thickness || 1;
    }

    display() {
        push();
        noFill();
        stroke(this.colour);
        strokeWeight(this.thickness);
        ellipse(this.x, this.y, this.diameter);
        pop();
    }
}

class Dot {
    constructor(info) {
        this.x = info.x;
        this.y = info.y;
        this.colour = info.colour;
        this.angle = info.angle;

        this.diameter = toPixels(info.shape_info.diameter || 1);
    }

    display() {
        push();
        fill(this.colour);
        ellipse(this.x, this.y, this.diameter);
        pop();
    }
}

class Rectangle {
    constructor(info) {
        this.x = info.x;
        this.y = info.y;
        this.colour = info.colour;
        this.angle = info.angle;

        this.width = toPixels(info.shape_info.width || 1);
        this.height = toPixels(info.shape_info.height || 1);
    }

    display() {
        push();
        fill(this.colour);
        translate(this.x, this.y);
        rotate(this.angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}

class Triangle {
    constructor(info) {
        this.x = info.x;
        this.y = info.y;
        this.colour = info.colour;
        this.angle = info.angle;

        this.width = toPixels(info.shape_info.width || 5);
        this.height = toPixels(info.shape_info.height || 5);
    }

    display() {
        push();
        fill(this.colour);
        translate(this.x, this.y);
        rotate(this.angle);
        triangle(-this.width / 2, -this.height / 2, this.width / 2, -this.height / 2, 0, this.height / 2);
        pop();
    }
}

class Number {
    constructor(info) {
        this.x = info.x;
        this.y = info.y;
        this.colour = info.colour;
        this.angle = info.shape_info.rotation ? info.angle : 0;

        let degree_to_number = Math.round((degrees(info.angle) / 30)) % 12;

        this.number = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][degree_to_number];
        this.size = toPixels(info.shape_info.size || 2);
    }

    display() {
        push();
        fill(this.colour);
        translate(this.x, this.y);
        rotate(this.angle);
        textAlign(CENTER, CENTER);
        textSize(this.size);
        text(this.number, 0, 0);
        pop();
    }
}

class Numeral {
    constructor(info) {
        this.x = info.x;
        this.y = info.y;
        this.colour = info.colour;
        this.angle = info.shape_info.rotation ? info.angle : 0;

        let numberals = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
        if (info.shape_info.traditional) { numberals[4] = "IIII"; }
        let degree_to_number = Math.round((degrees(info.angle) / 30)) % 12;

        this.number = numberals[degree_to_number];
        this.size = toPixels(info.shape_info.size || 2);
    }

    display() {
        push();
        fill(this.colour);
        translate(this.x, this.y);
        rotate(this.angle);
        textAlign(CENTER, CENTER);
        textSize(this.size);
        textFont('Times New Roman');
        text(this.number, 0, 0);
        pop();
    }
}

class Text {
    constructor(info) {
        this.x = info.x;
        this.y = info.y;
        this.colour = info.colour;
        this.angle = info.angle;

        this.text = info.shape_info.text || "TEXT";
        this.size = toPixels(info.shape_info.size || 2);
    }

    display() {
        push();
        fill(this.colour);
        textAlign(CENTER, CENTER);
        textSize(this.size);
        textFont('Times New Roman');
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
    "Numeral": Numeral,
    "Text": Text
}
