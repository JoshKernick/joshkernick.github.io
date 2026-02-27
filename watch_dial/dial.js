class Dial {
    constructor() {
        this.marker_settings = dial_markers_5;

        this.adjustMarkers();

        this.markers = [];

        this.marker_settings.forEach(marker => {
            if (marker.marker) {
                this.markers.push(new Markers(marker));
            }
            else {  // if no marker, assume it is the settings
                dial_colour = marker.dial_colour;
                marker_colour = marker.marker_colour;
                if (marker.center_hole) {
                    this.markers.push(new Markers({
                        marker: { shape: "Dot", diameter: 1 },
                        colour: [150]
                    }));
                }
            }
        });        

        this.hourHand = new Hand({ length: 9, width: 1, hole: 2, shape: "Line" });
        this.minuteHand = new Hand({ length: 15.9, width: 1, hole: 1.5, shape: "Line" });
        this.secondHand = new Hand({ length: 17.75, width: 0.75, shape: "Line", colour: red });
    }

    adjustMarkers() {  // Adjusts markers in marker_settings to fit different dial sizes
        let n = this.marker_settings[0].size ? this.marker_settings[0].size - DIAL_DIAMETER : 0;
        this.marker_settings.forEach(marker => {
            if (marker.marker && marker.x == undefined && marker.y == undefined) {
                if (marker.diameter) {
                    marker.diameter -= n;
                }
                else if (marker.marker.shape == "Circle") {
                    marker.marker.diameter -= n;
                }
            }
        });
    }

    getHandAngles() {
        let now = new Date();
        let hourAngle = (now.getHours() % 12 + now.getMinutes() / 60) * (360 / 12) - 90;
        let minuteAngle = (now.getMinutes() + now.getSeconds() / 60) * (360 / 60) - 90;
        let secondAngle = (now.getSeconds() + Math.floor(now.getMilliseconds() / 1000 * ticks_per_second) / ticks_per_second) * (360 / 60) - 90;
        return { hour: hourAngle, minute: minuteAngle, second: secondAngle };
    }

    consoleLogMarkers() {
        let marker_text = "let markers = [";
        this.markers.forEach(marker => {
            marker_text += "{";
            marker_text += "   marker: " + JSON.stringify(marker.marker) + ",";
            marker_text += "   x: " + marker.x + ", y: " + marker.y + ", diameter: " + marker.diameter + ", colour: [" + marker.colour + "], markerCount: " + marker.markerCount + ", skipEvery: " + marker.skipEvery + ", skipIndex: " + marker.skipIndex;
            marker_text += "},\n";
        });
        marker_text += "]";
        console.clear();
        console.log(marker_text);
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
