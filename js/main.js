const canvas = document.getElementById('canvas01')
const ctx = canvas.getContext('2d')

canvas.width = canvas.parentElement.clientWidth
canvas.height = canvas.parentElement.clientHeight

let particlesArr = []

const STEPS = 50

// handle mouse
const mouse = {
    x: null,
    y: null,
    radius: 150
}

window.addEventListener('mousemove', function(e) {
    mouse.x = e.x
    mouse.y = e.y
})


class Particle {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 3
        this.baseX = this.x
        this.baseY = this.y
        this.density = ((Math.random() * 30) + 1)
    }

    draw() {
        ctx.fillStyle = 'white'
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

function init() {
    particlesArr = []

   
    /* for (let i = 0; i < 500; i++) {
        let x = Math.random() * canvas.width
        let y = Math.random() * canvas.height
        particlesArr.push(new Particle(x, y))   
    }
    */
       
    for (let i = 0; i < canvas.width; i+=STEPS) {
        for (let j = 0; j < canvas.height; j+=STEPS) {
            particlesArr.push(new Particle(i, j))   
        }
    }
    
}

init()

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < particlesArr.length; i++) {
        particlesArr[i].draw()
        particlesArr[i].update()
    }
    requestAnimationFrame(animate)
}

//animate()


// Shapes =========

class Rect {
    constructor(startX, startY, width, height /*, color */) {
        this.sX = startX
        this.sY = startY

        this.width = width
        this.height = height

        this.eX = this.sX + this.width
        this.eY = this.sY + this.height

        this.coordinates = []
        //this.color = color
    }

    create_points(steps) {
        let realStartX = this.sX * steps
        let realStartY = this.sY * steps
        let realEndX = this.eX * steps
        let realEndY = this.eY * steps

        let dx = this.eX - this.sX
        let dy = this.eY - this.sY

    
        for (let i = 0; i < dx; i++) {
            for (let j = 0; j < dy; j++) {
                this.coordinates.push(new Particle(realStartX + (i * steps), realStartY + (j * steps)))
            }
        }
    }

    draw() {
        console.log(this.coordinates)
        for (let i = 0; i < this.coordinates.length; i++) {
            this.coordinates[i].draw() 
        }
    }
}

test = new Rect(1, 2, 10, 5)
test.create_points(STEPS)
test.draw()