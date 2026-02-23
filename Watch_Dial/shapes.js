class Circle {
    constructor(info) {
        this.x = info.x;
        this.y = info.y;
        this.colour = info.colour;
        this.angle = info.angle;

        this.radius = info.shape_info.radius;
        this.thickness = info.shape_info.thickness || 1;
    }

    display() {
        push();
        noFill();
        stroke(this.colour);
        strokeWeight(this.thickness);
        ellipse(this.x, this.y, this.radius * 2);
        pop();
    }
}

class Dot {
    constructor(info) {
        this.x = info.x;
        this.y = info.y;
        this.colour = info.colour;
        this.angle = info.angle;

        this.radius = info.shape_info.radius || 5;
    }

    display() {
        push();
        fill(this.colour);
        ellipse(this.x, this.y, this.radius * 2);
        pop();
    }
}

class Rectangle {
    constructor(info) {
        this.x = info.x;
        this.y = info.y;
        this.colour = info.colour;
        this.angle = info.angle;

        this.width = info.shape_info.width || 10;
        this.height = info.shape_info.height || 10;
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

class Number {
    constructor(info) {
        this.x = info.x;
        this.y = info.y;
        this.colour = info.colour;
        this.angle = info.shape_info.rotation ? info.angle : 0;

        this.number = info.i || 12;
        this.size = info.shape_info.size || 20;
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

        if (info.shape_info.traditional) {
            numberals[4] = "IIII";
        }

        let degree_to_number = Math.round((degrees(info.angle) / 30)) % 12;
        this.number = numberals[degree_to_number];
        this.size = info.shape_info.size || 20;
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

shapes = {
    "Circle": Circle,
    "Dot": Dot,
    "Rectangle": Rectangle,
    "Number": Number,
    "Numeral": Numeral
}
