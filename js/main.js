const canvas = document.getElementById('canvas01')
const ctx = canvas.getContext('2d')

canvas.width = canvas.parentElement.clientWidth
canvas.height = canvas.parentElement.clientHeight

let particlesArr = []

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

//init()

// Shapes =========

class Rect {
    constructor(startX, startY, width, height, fill /*, color */) {
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
        //this.color = color
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
                this.coordinates.push(new Particle(this.realStartX + (i * steps), this.realStartY + (j * steps)))
            }
        }
    }

    draw() {
        for (let i = 0; i < this.coordinates.length; i++) {
            this.coordinates[i].draw() 
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


test = new Rect(1, 1, 2, 2, false)
test.create_points(STEPS)
test.draw()

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    test.draw()
    if(test.isMouseHover()) {
        document.body.style.cursor = "pointer"
    }
    else {
        document.body.style.cursor = "auto"
    }
    requestAnimationFrame(animate)
}

animate()


