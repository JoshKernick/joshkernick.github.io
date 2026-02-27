class Hand {
    constructor(options = {}) {
        this.x = options.x || DIAL_X;
        this.y = options.y || DIAL_Y;
        this.length = toPixels(options.length);
        this.width = toPixels(options.width || 1);
        this.hole = toPixels(options.hole || 1);
        this.shape = Shapes[options.shape || "Line"];
        this.colour = options.colour || marker_colour;
    }

    display(angle) {
        push();
        fill(this.colour);
        ellipse(this.x, this.y, this.hole);

        translate(this.x, this.y);
        rotate(angle);
        
        // Start drawing the shape.
        beginShape();

        for (let point of this.shape.points) {
            vertex(point[0] * this.length, point[1] * this.width);
        }

        // Stop drawing the shape.
        endShape(CLOSE);

        pop();
    }
}

// Hand Shapes
// (0, 0) is the pivot
// Length is the distance from the pivot to the tip, default is 1
// Width is the thickness of the hand at the pivot, default is 0.1

let Shapes = {
    "Line": {
        points: [[0, -0.5], [0.9, -0.5], [1, 0], [0.9, 0.5], [0, 0.5]]
    },
    "Diamond": {
        points: [[0, -0.25], [0.25, -0.75], [1, 0], [0.25, 0.75], [0, 0.25]]
    }
}
