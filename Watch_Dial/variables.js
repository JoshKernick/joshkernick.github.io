// const WIDTH = 1260;
const WIDTH = 800;
const HEIGHT = 800;

const fr = 32;
let timeDelta = 1000 / fr;

let iterations = fr;
let default_iterations = fr;

let time_of_count = performance.now();
let sim_count = 0;
let sims_per_second = 0;
let last_recorded = 0;

let dial;
let focused_object = undefined;

let lmb = false;
let shift = false;
let ctrl = false;
let paused = false;
let step = false;

let shapes;

const DIAL_X = 400;
const DIAL_Y = 400;
const DIAL_DIAMETER = 40;  // 40mm = 800px, 1mm = 20px, 1px = 0.05mm
const SCALE = 20;

let ticks_per_second = 5;

// ---

let black = [0, 0, 0];
let white = [255, 255, 255];
let grey = [33, 37, 43];

let box_colour = [0, 0, 0, 200];
let border_colour = [62, 68, 82];
let text_colour = [230, 230, 230];

let red = [220, 38, 38];
let green = [30, 140, 40];
let blue = [37, 99, 235];
let light_blue = [56, 189, 248];
let orange = [251, 136, 50];
let yellow = [235, 192, 52];

let colors = [red, green, blue, light_blue, orange, yellow];

let dial_colour = black;
let hand_colour = white;
let marker_colour = white;
