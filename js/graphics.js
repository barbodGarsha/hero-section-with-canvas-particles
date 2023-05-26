import globals from './globals.js'



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
        globals.ctx.fillStyle = this.color
        globals.ctx.beginPath()
        globals.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        globals.ctx.closePath()
        globals.ctx.fill()
    }

    update() {

        let dx = globals.mouse.x - this.x
        let dy = globals.mouse.y - this.y
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
        if(globals.mouse.x < this.realEndX && globals.mouse.x > this.realStartX) {
            if(globals.mouse.y < this.realEndY && globals.mouse.y > this.realStartY) {
                return true
            }   
        }
        
        return false
    }
}



function draw(shapes) {
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height)

    for (let i = 0; i < shapes.length; i++) {
        shapes[i].draw()
    }   
}

export default {
    draw,
    Particle,
    Shape, 
    Rect
}