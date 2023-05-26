const canvas = document.getElementById('canvas01')
const ctx = canvas.getContext('2d')

canvas.width = canvas.parentElement.clientWidth
canvas.height = canvas.parentElement.clientHeight

let particlesArr = []
let shapes = []

const STEPS = 70

// handle mouse
const mouse = {
    x: null,
    y: null,
    radius: 150
}

canvas.addEventListener('mousemove', function(e) {

    const target = e.target;

    // Get the bounding rectangle of target
    const rect = target.getBoundingClientRect();

    // Mouse position
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;

    for (let i = 0; i < shapes.length; i++) {
        if(shapes[i].isMouseHover()) {
            console.log('HOVER')
        }
    }
})


class Particle {
    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
        this.size = 3
        this.baseX = this.x
        this.baseY = this.y
        this.density = ((Math.random() * 30) + 1)
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
    }

    update() {

        let dx = mouse.x - this.x
        let dy = mouse.y - this.y
        let distance = Math.sqrt((dx * dx) + (dy * dy))
        if(distance < 50) {
            this.size = 10
        }
        else {
            this.size = 3
        }
    }
}

// Shapes =========

class Shape {
    constructor(name) {
        this.name = name
    }

    create_points(steps) {
        return null
    }

    draw() {
        for (let i = 0; i < this.coordinates.length; i++) {
            this.coordinates[i].draw() 
        }
    }

    isMouseHover() {
        return null
    }
}

class Rect extends Shape {
    constructor(name, startX, startY, width, height, fill, color) {
        super(name)

        this.sX = startX
        this.sY = startY

        this.width = width
        this.height = height

        this.eX = this.sX + this.width
        this.eY = this.sY + this.height

        this.realStartX = null
        this.realStartY = null
        this.realEndX = null
        this.realEndY = null
       
        this.fill = fill

        this.coordinates = []
        this.color = color
    }

    create_points(steps) {
       
        this.realStartX = this.sX * steps
        this.realStartY = this.sY * steps
        this.realEndX = this.eX * steps
        this.realEndY = this.eY * steps
        
        let dx = this.eX - this.sX
        let dy = this.eY - this.sY

    
        for (let i = 0; i <= dx; i++) {
            for (let j = 0; j <= dy; j++) {
                if(!this.fill) {
                    if(j != 0 && j != dy) {            
                        if(i != 0 && i != dx) {
                            continue
                        }
                    }
                }
                this.coordinates.push(new Particle(this.realStartX + (i * steps), this.realStartY + (j * steps), this.color))
            }
        }
    }

    isMouseHover() {
        if(mouse.x < this.realEndX && mouse.x > this.realStartX) {
            if(mouse.y < this.realEndY && mouse.y > this.realStartY) {
                return true
            }   
        }
        
        return false
    }
}

function init() {
    shapes = []
   
    shapes.push(new Rect('t1', 1, 1, 2, 2, false, 'red'))
    shapes.push(new Rect('t2', 2, 2, 2, 2, true, 'green'))

    for (let i = 0; i < shapes.length; i++) {
        shapes[i].create_points(STEPS)        
    }
}

init()

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < shapes.length; i++) {
        shapes[i].draw()
    }   
}

draw()

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

