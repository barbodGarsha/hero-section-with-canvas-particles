import graphics from './graphics'
import globals from './globals.js'

globals.canvas.addEventListener('mousemove', function(e) {

    const target = e.target;

    // Get the bounding rectangle of target
    const rect = target.getBoundingClientRect();

    // Mouse position
    globals.mouse.x = e.clientX - rect.left;
    globals.mouse.y = e.clientY - rect.top;

    for (let i = 0; i < globals.shapes.length; i++) {
        if(globals.shapes[i].isMouseHover()) {
            
        }
    }
})
