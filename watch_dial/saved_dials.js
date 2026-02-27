let dial_markers_1 = [
    {  // settings
        size: 40,
        dial_colour: white,
        marker_colour: black,
        center_hole: true
    },
    {
        marker: { shape: "Rectangle", width: 0.05, height: 0.5 },
        markerCount: 300, skipEvery: 5, diameter: 39.5
    },
    {
        marker: { shape: "Rectangle", width: 0.1, height: 0.5 },
        markerCount: 60, skipEvery: 5, diameter: 39.5
    },
    {
        marker: { shape: "Rectangle", width: 0.25, height: 0.5 },
        markerCount: 12, diameter: 39.5
    },

    {
        marker: { shape: "Rectangle", width: 0.2, height: 1 },
        markerCount: 60, skipEvery: 5, diameter: 38
    },
    {
        marker: { shape: "Rectangle", width: 0.5, height: 1.5 },
        markerCount: 12, skipEvery: 3, diameter: 37.5
    },
    {
        marker: { shape: "Triangle", width: 1, height: 2.5 },
        markerCount: 4, diameter: 36.5
    },

    {
        marker: { shape: "Circle", diameter: 40 }
    },
    {
        marker: { shape: "Circle", diameter: 39 }
    },

    {
        marker: { shape: "Numeral", size: 4, offsetY: 0.3, IIII: true },
        markerCount: 12, diameter: 29
    },

    {
        marker: { shape: "Text", text: "KERNICK" },
        y: -7.2
    }
]

let dial_markers_2 = [
    {  // settings
        size: 40,
        dial_colour: white,
        marker_colour: black,
        center_hole: true
    },
    {
        marker: { shape: "Rectangle", width: 0.24, height: 0.8 },
        markerCount: 12, diameter: 37.5
    },
    {
        marker: { shape: "Rectangle", width: 0.16, height: 1.2 },
        markerCount: 60, skipEvery: 5, diameter: 37.1
    },
    {
        marker: { shape: "Rectangle", width: 0.12, height: 0.8 },
        markerCount: 240, skipEvery: 4, diameter: 37.5
    },
    {
        marker: { shape: "Number", size: 1.3, minute: true, rotation: "outward", five: true, font: "Trebuchet MS" },
        markerCount: 12, diameter: 35.0
    },
    {
        marker: { shape: "Number", size: 4.5, offsetY: 0.3, font: "Trebuchet MS" },
        markerCount: 12, diameter: 29
    },
    {
        marker: { shape: "Text", text: "AUTOMATIC", size: 1.8, font: "Trebuchet MS" },
        y: 7
    }
]

let dial_markers_3 = [
    {  // settings
        size: 40,
        dial_colour: black,
        marker_colour: white,
        center_hole: true
    },
    {
        marker: { shape: "Circle", diameter: 40 }
    },
    {
        marker: { shape: "Rectangle", width: 0.05, height: 0.8 },
        markerCount: 300, skipEvery: 5, diameter: 39.2
    },
    {
        marker: { shape: "Rectangle", width: 0.1, height: 0.8 },
        markerCount: 60, diameter: 39.2
    },
    {
        marker: { shape: "Circle", diameter: 38.4 }
    },
    {
        marker: { shape: "Triangle", width: 1, height: 1 },
        markerCount: 12, diameter: 37.4
    },
    {
        marker: { shape: "Rectangle", width: 0.2, height: 1 },
        markerCount: 60, skipEvery: 5, diameter: 37.4
    },
    {
        marker: { shape: "Number", size: 1.5, numbers: "minute", rotation: "outward", five: true, font: "Trebuchet MS" },
        markerCount: 12, diameter: 34.5
    },
    {
        marker: { shape: "Number", size: 4.5, offsetY: 0.3, font: "Trebuchet MS" },
        markerCount: 12, diameter: 28.5
    },
    {
        marker: { shape: "Circle", diameter: 22.5 }
    },
    {
        marker: { shape: "Number", size: 1.5, numbers: "13-24", font: "Trebuchet MS" },
        markerCount: 12, diameter: 19
    }
]

let dial_markers_4 = [
    {  // settings
        size: 40,
        dial_colour: black,
        marker_colour: white,
        center_hole: true
    },
    {
        marker: { shape: "Circle", diameter: 40 }
    },
    {
        marker: { shape: "Rectangle", width: 0.15, height: 2.2 },
        markerCount: 60, skipEvery: 5, diameter: 37.8
    },
    {
        marker: { shape: "Rectangle", width: 1, height: 1.55 },
        markerCount: 12, diameter: 38.5
    },
    {
        marker: { shape: "Triangle", width: 1, height: 0.4 },
        markerCount: 4, diameter: 36.55, colour: red
    },
    {
        marker: { shape: "Circle", diameter: 37.1, thickness: 0.15 }
    },
    {
        marker: { shape: "Number", size: 1.2, numbers: "minute", rotation: "outward", five: true, font: "Helvetica" },
        markerCount: 12, diameter: 35
    },
    {
        marker: { shape: "Number", size: 4.5, offsetY: 0.3, font: "Helvetica" },
        markerCount: 12, diameter: 28
    },

]

let dial_markers_4_ss = [
    {  // settings
        size: 40,
        dial_colour: black,
        marker_colour: white,
        center_hole: true
    },
    {
        marker: { shape: "Circle", diameter: 40 }
    },
    {
        marker: { shape: "Rectangle", width: 0.15, height: 2.2 },
        markerCount: 60, skipEvery: 5, diameter: 37.8
    },
    {
        marker: { shape: "Rectangle", width: 1, height: 1.55 },
        markerCount: 12, diameter: 38.5
    },
    {
        marker: { shape: "Triangle", width: 1, height: 0.4 },
        markerCount: 4, diameter: 36.55, colour: red
    },
    {
        marker: { shape: "Circle", diameter: 37.1, thickness: 0.15 }
    },
    {
        marker: { shape: "Number", size: 1.2, numbers: "minute", rotation: "outward", five: true, font: "Helvetica" },
        markerCount: 12, diameter: 35
    },
    {
        marker: { shape: "Number", size: 4.5, offsetY: 0.3, font: "Helvetica" },
        markerCount: 12, skip: 6, diameter: 28
    },

    {
        marker: { shape: "Circle", diameter: 10, thickness: 0.15 },
        y: 8.5
    },
    {
        marker: { shape: "Rectangle", width: 0.15, height: 0.8 },
        markerCount: 12, y: 8.5, diameter: 9.2
    },
    {
        marker: { shape: "Number", size: 1, offsetY: 0.1, font: "Helvetica" },
        markerCount: 4, y: 8.5, diameter: 7
    },
    {
        marker: { shape: "Dot", diameter: 0.5 },
        y: 8.5, colour: [150]
    }

]

let dial_markers_5 = [
    {  // settings
        size: 40,
        // dial_colour: [95, 108, 133],
        dial_colour: black,
        marker_colour: white,
        center_hole: true
    },
    {
        marker: { shape: "Number", size: 1.4, numbers: "minute", five: true, font: "Helvetica" },
        markerCount: 12, diameter: 37.5
    },
    {
        marker: { shape: "Dot", diameter: 0.3 },
        markerCount: 60, skipEvery: 5, diameter: 37.5
    },
    {
        marker: { shape: "Rectangle", width: 0.25, height: 1.2 },
        markerCount: 60, skipEvery: 5, diameter: 33.8
    },
    {
        marker: { shape: "Rectangle", width: 0.5, height: 1.8 },
        markerCount: 12, diameter: 33.2
    },
    {
        marker: { shape: "Number", size: 3.8, offsetY: 0.3, font: "Helvetica" },
        markerCount: 12, diameter: 26.5
    },
    {
        marker: { shape: "Circle", diameter: 21, thickness: 0.2 }
    },
    {
        marker: { shape: "Number", size: 1.2, offsetY: 0.05, numbers: "13-24",  font: "Helvetica" },
        markerCount: 12, diameter: 18
    }
]
