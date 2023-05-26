import graphics from './graphics'
import globals from './globals.js'
import events from './events'

let particlesArr = []

function init() {
    globals.shapes = []
   
    globals.shapes.push(new graphics.Rect('designs', 0, 0, 5, 5, true, 'red'))
    globals.shapes.push(new graphics.Rect('designs', 3, 3, 5, 5, true, 'red'))
    globals.shapes.push(new graphics.Rect('designs', globals.canvas.width / globals.STEPS - 2, 0, 2, 2, true, 'red'))
    globals.shapes.push(new graphics.Rect('designs', globals.canvas.width / globals.STEPS - 5, globals.canvas.height / globals.STEPS - 5, 5, 5, true, 'green'))
    globals.shapes.push(new graphics.Rect('designs', globals.canvas.width / globals.STEPS - 7, globals.canvas.height / globals.STEPS - 7, 5, 5, false, 'red'))
    globals.shapes.push(new graphics.Rect('designs', 0, globals.canvas.height / globals.STEPS - 5, 5, 20, true, 'green'))

    globals.shapes.push(new graphics.Rect('designs', 0, globals.canvas.height / globals.STEPS / 3 *  2, globals.canvas.width / globals.STEPS, globals.canvas.height / globals.STEPS / 4, true, 'yellow'))
    //globals.shapes.push(new graphics.Rect('t2', 2, 2, 2, 2, true, 'green'))

    for (let i = 0; i < globals.shapes.length; i++) {
        globals.shapes[i].create_points(globals.STEPS)        
    }
}

init()

graphics.draw()


graphics.animate()

