/*
@author Winry
@date 2022-1-8

 */
let font

function preload() {
    font = loadFont('data/meiryo.ttf')
}

let a, b

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)

    a = new p5.Vector(100, -60)
    b = new p5.Vector(200, 60)
}

function draw() {
    background(234, 34, 24)
    a = new p5.Vector(mouseX, mouseY)

    strokeWeight(4)
    stroke(0, 0, 100)

    // vector lines. First two lines are either not working or extra debug info.
    let pos = new p5.Vector(100, 200)
    // line(pos.x, pos.y, pos.x + a.x, pos.y + a.y)
    // line(pos.x, pos.y, a.x, a.y)
    line(pos.x, pos.y, pos.x + b.x, pos.y + b.y)

    // line from pos to modified B (target scalar projection). extra debug info
    let v = vectorProjection(a.copy().sub(pos), b)
    strokeWeight(8)
    stroke(240, 100, 80)
    // first line is correct
    // line(pos.x, pos.y, pos.x + v.x, pos.y + v.y)
    // line(pos.x, pos.y, v.x, v.y)

    // the line connecting the A vector to the V vector. extra debug info
    strokeWeight(1)
    stroke(0, 0, 100)
    // line(a.x, a.y, v.x + pos.x, v.y + pos.y)

    // point at position. extra debug info
    strokeWeight(14)
    stroke(120, 90, 80)
    // point(pos.x, pos.y)

    // point at a
    strokeWeight(14)
    stroke(120, 90, 80)
    point(a.x, a.y)

    // point at the scalar projection
    strokeWeight(14)
    stroke(0, 90, 80)
    point(v.x + pos.x, v.y + pos.y)
}

function vectorProjection(a, b) {
    let bCopy = b.copy().normalize()
    let sp = a.dot(bCopy)
    bCopy.mult(sp)
    return bCopy
}
