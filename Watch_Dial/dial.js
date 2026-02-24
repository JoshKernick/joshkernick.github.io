class Dial {
    constructor() {
        // TODO:
        // Improve centering of text based on it's height and width

        this.hourHand = new Hand({ length: 9, width: 1, hole: 2, shape: "Line", colour: [220, 220, 220] });
        this.minuteHand = new Hand({ length: 17.5, width: 1, hole: 1.5, shape: "Line" });
        this.secondHand = new Hand({ length: 19.5, width: 0.75, colour: red, shape: "Line" });

        let markers = [
            {
                shape_info: { shape: "Rectangle", width: 0.05, height: 0.5 },
                markerCount: 300, skipEvery: 5, diameter: 39.5
            },
            {
                shape_info: { shape: "Rectangle", width: 0.1, height: 0.5 },
                markerCount: 60, skipEvery: 5, diameter: 39.5
            },
            {
                shape_info: { shape: "Rectangle", width: 0.25, height: 0.5 },
                markerCount: 12, diameter: 39.5
            },

            {
                shape_info: { shape: "Rectangle", width: 0.2, height: 1 },
                markerCount: 60, skipEvery: 5, diameter: 38
            },
            {
                shape_info: { shape: "Rectangle", width: 0.5, height: 1.5 },
                markerCount: 12, skipEvery: 3, diameter: 37.5
            },
            {
                shape_info: { shape: "Triangle", width: 1, height: 2 },
                markerCount: 4, diameter: 37
            },

            {
                shape_info: { shape: "Circle", diameter: 40, thickness: 2 }
            },
            {
                shape_info: { shape: "Circle", diameter: 39 }
            },

            {
                shape_info: { shape: "Numeral", size: 3.5 },
                markerCount: 12, diameter: 31
            },

            {
                shape_info: { shape: "Text", text: "TEST DIAL" },
                y: -7.5
            },
            {
                shape_info: { shape: "Dot", diameter: 2 },
                colour: [255, 255, 255, 100]
            }
        ];

        this.markers = [];

        markers.forEach(marker => {
            this.markers.push(new Markers(marker));
        });
    }

    getHandAngles() {
        let now = new Date();
        let hourAngle = (now.getHours() % 12 + now.getMinutes() / 60) * (360 / 12) - 90;
        let minuteAngle = (now.getMinutes() + now.getSeconds() / 60) * (360 / 60) - 90;
        let secondAngle = (now.getSeconds() + Math.floor(now.getMilliseconds() / 1000 * ticks_per_second) / ticks_per_second) * (360 / 60) - 90;
        return { hour: hourAngle, minute: minuteAngle, second: secondAngle };
    }

    display() {
        push();

        // Face
        fill(dial_colour);
        ellipse(DIAL_X, DIAL_Y, toPixels(DIAL_DIAMETER));

        // Markers
        this.markers.forEach(marker => { marker.display() });

        // Hands
        let angles = this.getHandAngles();
        if (this.hourHand) {
            this.hourHand.display(radians(angles.hour));
        }
        if (this.minuteHand) {
            this.minuteHand.display(radians(angles.minute));
        }
        if (this.secondHand) {
            this.secondHand.display(radians(angles.second));
        }

        pop();
    }
}
