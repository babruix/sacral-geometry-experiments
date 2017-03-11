export default class Sunflower {
  constructor (id) {
    let canvas = document.getElementById(id)
    this.ctx = canvas.getContext('2d')

    this.seeds = 2000
    this.rotateOn = false
    this.radius = 2
    this.SCALE_FACTOR = 4
    this.MAX_D = canvas.width
    this.xc = this.MAX_D / 2
    this.yc = this.MAX_D / 2
    this.TAU = Math.PI * 2
    this.PHI = (Math.sqrt(5) + 1) / 2

    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function () {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (/* function */ callback, /* DOMElement */ element) {
          window.setTimeout(callback, 1000 / 60)
        }
    })()
  }

  // Animate the sunflower, rotating it
  animate () {
    window.requestAnimFrame(this.animate.bind(this))
    if (this.rotate === 360) {
      this.rotate = 0
    }
    this.drawFrame()
  }

    // Draw the complete figure for the current number of seeds.
  drawFrame () {
    this.ctx.clearRect(0, 0, this.MAX_D, this.MAX_D)
    this.ctx.translate(this.xc, this.yc)
    if (this.rotateOn) {
      this.ctx.rotate(Math.PI / 180)
    }
    this.ctx.translate(-this.xc, -this.yc)
    for (let i = 0; i < this.seeds; i++) {
      let theta = i * this.TAU / this.PHI,
        r = Math.sqrt(i) * this.SCALE_FACTOR,
        x = this.xc + r * Math.cos(theta),
        y = this.yc - r * Math.sin(theta)
      this.drawSeed(x, y, theta)
    }
  }

  // Draw a small circle representing a seed centered at (x,y).
  drawSeed (x, y, theta) {
    this.ctx.beginPath()
    this.ctx.lineWidth = 0
    this.ctx.fillStyle = `hsl(${Math.cos(theta) * Math.sin(theta) * 10000}, 100%, 50%)`

      // let radius = Math.cos(theta)* Math.sin(theta) * this.PHI *25
    let radius = eval(this.radius)
    radius = radius < 0 ? radius * -1 : radius
    this.ctx.arc(x, y, radius, 0, this.TAU, false)
    this.ctx.fill()
    this.ctx.closePath()
    this.ctx.stroke()
  }
}
