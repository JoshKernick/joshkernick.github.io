function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(fr);
	noStroke();
	textAlign(LEFT, CENTER);
	textSize(15);

	simulationSetup();
}

function draw() {
	if (!paused) {
		if (iterations == Infinity) {
			let startTime = performance.now();
			while (performance.now() - startTime <= timeDelta) {
				simulate();
			}
		}
		else {
			if (iterations >= fr) {
				for (let i = 0; i < iterations / fr; i++) {
					simulate();
				}
			}
			else if ((frameCount % fr) % (fr / iterations) == 0) {
				simulate();
			}
		}
	}
	else if (step) {
		simulate();
		step = false;
	}

	if (performance.now() - time_of_count >= 1000) {
		last_recorded = sims_per_second;
		time_of_count = performance.now();
		sims_per_second = 0;
	}

	background(grey);

	dial.display();

	text(DIAL_DIAMETER + "mm Dial", 10, 15);
	text("x " + (mouseX - DIAL_X) / SCALE, 10, 30);
	text("y " + (mouseY - DIAL_Y) / SCALE, 10, 45);

	if (lmb) {
		if (shift) {
			// brush
		}
		else if (!ctrl) {
			// scroll
		}
	}
}

function simulate() {
	sim_count++
	sims_per_second++;
}

function simulationSetup() {
	dial = new Dial();
}
