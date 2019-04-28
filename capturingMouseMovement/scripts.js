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
console.log(input.mouseY.range)

// Fraction Value Code
let handleMouseMove = (event) => {
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;

    input.mouseY.current = event.clientY;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
    
    // This code can be used to add exclude sections you dont want to track by adding divs for example inside the css
    // if (input.mouseX.fraction > 1) {
    //     input.mouseX.fraction = 1;
    // }
    
    // if (input.mouseX.fraction < 0) {
    //     input.mouseX.fraction = 0;
    // }

    console.log("fraction mouse value for X", input.mouseX.fraction);
    console.log("fraction mouse value for Y", input.mouseY.fraction);
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