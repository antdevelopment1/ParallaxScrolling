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
}
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

// Output Setup
var output = {
    x: {
        start: -100,
        end: 100,
        current: 0
    },
    y: {}
}
output.x.range = output.x.end - output.x.start;

// Fraction Value Code
let handleMouseMove = (event) => {
    // Mouse x input
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;

    // Mouse Y Input
    input.mouseY.current = event.clientY;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
    
    output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);
    console.log('output.x.current', output.x.current);
    // console.log("fraction mouse value for X", input.mouseX.fraction);
    // console.log("fraction mouse value for Y", input.mouseY.fraction);
}

let handleResize = () => {
    input.mouseX.end = window.innerWidth;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;

    input.mouseY.end = window.innerHeight;
    input.mouseY.range = input.mouseY.end - input.mouseY.start;
}
// Event Listener to trigger mouse mousemovement
window.addEventListener('mousemove', handleMouseMove);

// Event handeler that handles screen resize should the window's width get wider or smaller it will recalculate the range
window.addEventListener('resize', handleResize);