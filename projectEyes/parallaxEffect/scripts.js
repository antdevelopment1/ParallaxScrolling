// HTML Setup
let itemsHTMLCollection = document.getElementsByClassName("parallax-item");
let itemsArray = Array.from(itemsHTMLCollection);

// Input Setup
let input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: 0
  },
  mouseY: {
    start: 0,
    end: window.innerHeight,
    height: 0
  }
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

// Output Setup
var output = {
  x: {
    start: -150,
    end: 150,
    current: 0
  },
  y: {
	  start: -150,
	  end: 150,
	  current: 0
  }
};

output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

// Fraction Value Code
let handleMouseMove = event => {
  	// Mouse x input
	input.mouseX.current = event.clientX;
	input.mouseX.fraction =
		(input.mouseX.current - input.mouseX.start) / input.mouseX.range;

  	// Mouse Y Input
	input.mouseY.current = event.clientY;
	input.mouseY.fraction =
		(input.mouseY.current - input.mouseY.start) / input.mouseY.range;

  	// Mouse Output X 
  	output.x.current = output.x.end - input.mouseX.fraction * output.x.range;
  	// output.x.opposite = output.x.start + input.mouseX.fraction * output.x.range;

	// Mouse Output Y
	output.y.current = output.y.end - input.mouseY.fraction * output.y.range;
	// output.y.opposite = output.y.start + input.mouseY.fraction * output.y.range;

	// To make eyeballs go in the SAME DIRECTION as the mouse you can do...
	// output.y.current = output.y.start + input.mouseY.fraction * output.y.range;
	// output.x.current = output.x.start + input.mouseX.fraction * output.x.range;


	itemsArray.forEach(function (item, i) {
        let depth = parseFloat(item.dataset.depth, 10);
        let itemOutput = {
            x: output.x.current - (output.x.current * depth),
            y: output.y.current - (output.y.current * depth),
            zIndex: 10000 - (10000 * depth)
        }
        console.log(i, depth, "depth")
        item.style.zIndex =  itemOutput.zIndex;
        item.style.transform = 'translate(' + itemOutput.x + 'px,' + itemOutput.y + 'px)';
	})

	console.log(output.y.current, "This is th e outp")
    console.log("output.x.current", output.x.current);
	// console.log("fraction mouse value for X", input.mouseX.fraction);
	// console.log("fraction mouse value for Y", input.mouseY.fraction);
};

let handleResize = () => {
	input.mouseX.end = window.innerWidth;
	input.mouseX.range = input.mouseX.end - input.mouseX.start;

	input.mouseY.end = window.innerHeight;
	input.mouseY.range = input.mouseY.end - input.mouseY.start;
};
// Event Listener to trigger mouse mousemovement
window.addEventListener("mousemove", handleMouseMove);

// Event handeler that handles screen resize should the window's width get wider or smaller it will recalculate the range
window.addEventListener("resize", handleResize);
