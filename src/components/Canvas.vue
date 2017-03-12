<template>
  <div class="canvas">
    <canvas id="canvas" width="600" height="600"></canvas>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  let canvas, ctx, colorspeed, target, speed, width, height, diameter, radius, center, length, divisions, rainbow, rlength;

  @Component
  export default class Canvas1 extends Vue {

    drawFrame (timestamp) {
      const prev = {};
      const r = Math.floor(timestamp / colorspeed);
      if (timestamp - target.timestamp > speed) {
        target.timestamp = 0;
        const temp = target.origin;
        target.origin = target.destination;
        target.destination = temp;
      }
      if (target.timestamp === 0) {
        target.timestamp = timestamp;
      }
      const factor = this.easeInOutSine(timestamp - target.timestamp, target.origin, target.destination - target.origin, speed);
      ctx.fillRect(0, 0, width, height);
      for (let i = 0; i < length; i++) {
        const point = {};
        point.r = this.linearEase(i, 1, radius - 1, length);
        point.t = (360 / divisions * i + factor * i) * Math.PI / 180;
        point.x = point.r * Math.cos(point.t) + center.x;
        point.y = point.r * Math.sin(point.t) + center.y;
        ctx.beginPath();
        const c = rainbow[(r + i) % rlength];
        ctx.strokeStyle = "rgba(" + c.r + ", " + c.g + ", " + c.b + ", 0.5)";
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
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
      canvas = document.getElementById('canvas');
      ctx = canvas.getContext("2d");
      ctx.fillStyle = "#000";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 2;

      width = canvas.width;
      height = canvas.height;
      diameter = width - (width * 0.1);
      radius = diameter / 2;
      center = {x: width / 2, y: height / 2};
      length = 100;
      divisions = 6;
      speed = 120 * 1000;

      colorspeed = 60;
      rainbow = this.makeColorGradient(length);
      rlength = rainbow.length;

      target = {
        origin: -180,
        destination: 180,
        timestamp: 0
      };
      window.requestAnimationFrame(this.drawFrame);
    }
  }
</script>
