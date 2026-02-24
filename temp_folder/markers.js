class Markers {
    constructor(options = {}) {
        this.x = DIAL_X + toPixels(options.x) || DIAL_X;
        this.y = DIAL_Y + toPixels(options.y) || DIAL_Y;
        this.diameter = toPixels(options.diameter || 0);
        this.colour = options.colour || marker_colour;
        this.markerCount = options.markerCount || 1;
        this.skipEvery = options.skipEvery;
        this.skipIndex = options.skipIndex ?? -1;

        this.shape_info = options.shape_info || { shape: "Dot", diameter: 5 };

        this.setMarkers();
    }

    setMarkers() {
        this.markers = [];
        const angleStep = 360 / this.markerCount;

        for (let i = 0; i < this.markerCount; i++) {
            if (!(i % this.skipEvery == 0) && !(i == this.skipIndex)) {
                this.markers.push(new shapes[this.shape_info.shape]({
                    x: this.x + (this.diameter / 2) * Math.cos(radians(i * angleStep - 90)),
                    y: this.y + (this.diameter / 2) * Math.sin(radians(i * angleStep - 90)),
                    angle: radians(i * angleStep),
                    colour: this.colour,
                    i: i,
                    shape_info: this.shape_info
                }));
            }
        }
    }

    display() {
        push();
        this.markers.forEach(marker => { marker.display() });
        pop();
    }
}
