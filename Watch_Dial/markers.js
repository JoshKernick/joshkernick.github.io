class Markers {
    constructor(options = {}) {
        this.positions = options.positions || "1";
        this.x = options.x || DIAL_X;
        this.y = options.y || DIAL_Y;
        this.radius = options.radius || 0;
        this.colour = options.colour || marker_colour;

        this.shape_info = options.shape_info || { shape: "Dot", radius: 5 };

        this.setMarkers();
    }

    setMarkers() {
        this.markers = [];

        let parts = this.positions.split("-");
        let iterations = parseInt(parts[0]);
        let skip_mod = parseInt(parts[1]);
        let skip_number = parseInt(parts[2]);
        let n = 360 / iterations;

        for (let i = 0; i < iterations; i++) {
            if (i % skip_mod !== 0 && i !== skip_number) {
                this.markers.push(new shapes[this.shape_info.shape]({
                    x: this.x + this.radius * Math.cos(radians(i * n - 90)),
                    y: this.y + this.radius * Math.sin(radians(i * n - 90)),
                    angle: radians(i * n),
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
