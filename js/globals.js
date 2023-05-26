const canvas = document.getElementById('canvas01')
const ctx = canvas.getContext('2d')

canvas.width = canvas.parentElement.clientWidth
canvas.height = canvas.parentElement.clientHeight

let shapes = []

const STEPS = 70

// handle mouse
const mouse = {
    x: null,
    y: null,
    radius: 150
}

export default {
    STEPS,
    mouse,
    canvas,
    ctx
}