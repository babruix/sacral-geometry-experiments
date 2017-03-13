<template>
  <div class="canvas">
    <canvas id="canvas" width="600" height="600"></canvas>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import dat from 'dat-gui'

  @Component
  export default class Canvas extends Vue {
    datgui = new dat.GUI()

    length = 200
    divisions = 6
    speed = 120 * 1000
    colorSpeed = 60

    drawFrame (timestamp) {
      const prev = {};
      const r = Math.floor(timestamp / this.colorSpeed);
      if (timestamp - this.target.timestamp > this.speed) {
        this.target.timestamp = 0;
        const temp = this.target.origin;
        this.target.origin = this.target.destination;
        this.target.destination = temp;
      }
      if (this.target.timestamp === 0) {
        this.target.timestamp = timestamp;
      }
      const factor = this.easeInOutSine(timestamp - this.target.timestamp, this.target.origin, this.target.destination - this.target.origin, this.speed);
      this.ctx.fillRect(0, 0, this.width, this.height);
      for (let i = 0; i < this.length; i++) {
        const point = {};
        point.r = this.linearEase(i, 1, this.radius - 1, this.length);
        point.t = (360 / this.divisions * i + factor * i) * Math.PI / 180;
        point.x = point.r * Math.cos(point.t) + this.center.x;
        point.y = point.r * Math.sin(point.t) + this.center.y;
        this.ctx.beginPath();
        const c = this.rainbow[(r + i) % this.rLength];
        this.ctx.strokeStyle = "rgba(" + c.r + ", " + c.g + ", " + c.b + ", 0.5)";
        this.ctx.moveTo(prev.x, prev.y);
        this.ctx.lineTo(point.x, point.y);
        this.ctx.stroke();
        prev.x = point.x;
        prev.y = point.y;
      }
      window.requestAnimationFrame(this.drawFrame);
    }

    linearEase (ci, sv, civ, ti) {
      return civ * ci / ti + sv;
    }

    easeInOutSine (ci, sv, civ, ti) {
      return civ / 2 * (1 - Math.cos(Math.PI * ci / ti)) + sv;
    }

    makeColorGradient (len) {
      const f1 = 2 * Math.PI / len * 1;
      const f2 = 2 * Math.PI / len * 1;
      const f3 = 2 * Math.PI / len * 1;
      const o1 = 0;
      const o2 = 2 * Math.PI / 3;
      const o3 = 4 * Math.PI / 3;
      const w = 127;
      const c = 128;
      const a = [];
      for (let i = 0; i < len; i++) {
        const r = Math.round(Math.sin(f1 * i + o1) * w + c);
        const g = Math.round(Math.sin(f2 * i + o2) * w + c);
        const b = Math.round(Math.sin(f3 * i + o3) * w + c);
        a.push({r: r, g: g, b: b});
      }
      return a;
    }

    mounted () {
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext("2d");
      this.ctx.fillStyle = "#000";
      this.ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      this.ctx.lineWidth = 2;

      this.width = this.canvas.width;
      this.height = this.canvas.height;
      this.diameter = this.width - (this.width * 0.1);
      this.radius = this.diameter / 2;
      this.center = {x: this.width / 2, y: this.height / 2};
      this.rainbow = this.makeColorGradient(this.length);
      this.rLength = this.rainbow.length;

      this.target = {
        origin: -180,
        destination: 180,
        timestamp: 0
      };
      window.requestAnimationFrame(this.drawFrame);

      // @params: object, property, min, max, step
      this.datgui.add(this, 'length', 200, 500, 10)
      this.datgui.add(this, 'divisions', 0, 10)
      this.datgui.add(this, 'speed', 120, 112000, 100)
      this.datgui.add(this, 'colorSpeed', 5, 100, 1)
    }
  }
</script>
