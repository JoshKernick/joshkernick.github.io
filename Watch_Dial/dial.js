class Dial {
    constructor() {
        this.hourHand = new Hand({ length: 150, width: 15, shape: "Diamond" });
        this.minuteHand = new Hand({ length: 300, width: 15, shape: "Diamond" });
        this.secondHand = new Hand({ x: DIAL_X - 225, length: 75, width: 8, shape: "Diamond" });

        this.markers = [];

        this.addMarker({ shape_info: { shape: "Circle", radius: 400, thickeness: 2}});

        this.addMarker({ shape_info: { shape: "Rectangle", width: 1, height: 10 }, positions: "300-5", radius: 395 });
        this.addMarker({ shape_info: { shape: "Rectangle", width: 3, height: 10 }, positions: "60-5", radius: 395 });
        this.addMarker({ shape_info: { shape: "Rectangle", width: 5, height: 10 }, positions: "12", radius: 395 });
        
        this.addMarker({ shape_info: { shape: "Rectangle", width: 20, height: 20 }, positions: "4", radius: 380, colour: red });

        this.addMarker({ shape_info: { shape: "Circle", radius: 390}});

        this.addMarker({ shape_info: { shape: "Rectangle", width: 10, height: 20 }, positions: "12-3", radius: 380 });
        this.addMarker({ shape_info: { shape: "Dot", radius: 3 }, positions: "60-5", radius: 380 });

        this.addMarker({ shape_info: { shape: "Circle", radius: 370}});

        this.addMarker({ shape_info: { shape: "Numeral", size: 75, traditional: true}, positions: "12--9", radius: 310 });

        this.addMarker({ shape_info: { shape: "Dot", radius: 20}, colour: [0, 0, 0, 100]});

        // Small seconds        
        this.addMarker({ shape_info: { shape: "Circle", radius: 84}, x: DIAL_X - 225});
        this.addMarker({ shape_info: { shape: "Rectangle", width: 2, height: 4}, positions: "12", x: DIAL_X - 225, radius: 82 });
        this.addMarker({ shape_info: { shape: "Rectangle", width: 1, height: 4}, positions: "60-5", x: DIAL_X - 225, radius: 82 });
        this.addMarker({ shape_info: { shape: "Circle", radius: 80}, x: DIAL_X - 225});
        this.addMarker({ shape_info: { shape: "Dot", radius: 5}, x: DIAL_X - 225, colour: [0, 0, 0, 100]});
    }

    addMarker(options) {
        this.markers.push(new Markers(options));
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
        fill(dial_colour)
        ellipse(DIAL_X, DIAL_Y, DIAL_DIAMETER);

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
