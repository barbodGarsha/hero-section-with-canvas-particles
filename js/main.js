import graphics from './graphics'
import globals from './globals.js'
import events from './events'

let particlesArr = []

function init() {
    globals.shapes = []
   
    globals.shapes.push(new graphics.Rect('t1', 1, 1, 2, 2, false, 'red'))
    globals.shapes.push(new graphics.Rect('t2', 2, 2, 2, 2, true, 'green'))

    for (let i = 0; i < globals.shapes.length; i++) {
        globals.shapes[i].create_points(globals.STEPS)        
    }
}

init()

graphics.draw(globals.shapes)

/*

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < shapes.length; i++) {
        shapes[i].draw()
    }   
    requestAnimationFrame(animate)
}

animate()
*/

