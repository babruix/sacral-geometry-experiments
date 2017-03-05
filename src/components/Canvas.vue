<template>
  <div class="canvas">
    <canvas id="canvas" width="600" height="600"></canvas>
  </div>
</template>

<script>
  import ComponentAnim from './ComponentAnimation'

  var canvas, ctx, colorspeed, target, speed, width, height, diameter, radius, center, length, divisions, rainbow, rlength;

  export default {
    name: 'Canvas1',
    data () {
      return {
        currentFrame: 0
      }
    },
    methods: {

      drawFrame: function (timestamp) {
        var prev = {};
        var r = Math.floor(timestamp / colorspeed);
        if (timestamp - target.timestamp > speed) {
          target.timestamp = 0;
          var temp = target.origin;
          target.origin = target.destination;
          target.destination = temp;
        }
        if (target.timestamp === 0) {
          target.timestamp = timestamp;
        }
        var factor = this.easeInOutSine(timestamp - target.timestamp, target.origin, target.destination - target.origin, speed);
        ctx.fillRect(0, 0, width, height);
        for (var i = 0; i < length; i++) {
          var point = {};
          point.r = this.linearEase(i, 1, radius - 1, length);
          point.t = (360 / divisions * i + factor * i) * Math.PI / 180;
          point.x = point.r * Math.cos(point.t) + center.x;
          point.y = point.r * Math.sin(point.t) + center.y;
          ctx.beginPath();
          var c = rainbow[(r + i) % rlength];
          ctx.strokeStyle = "rgba(" + c.r + ", " + c.g + ", " + c.b + ", 0.5)";
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(point.x, point.y);
          ctx.stroke();
          prev.x = point.x;
          prev.y = point.y;
        }
        window.requestAnimationFrame(this.drawFrame);
      },

      linearEase: function (ci, sv, civ, ti) {
        return civ * ci / ti + sv;
      },

      easeInOutSine: function (ci, sv, civ, ti) {
        return civ / 2 * (1 - Math.cos(Math.PI * ci / ti)) + sv;
      },

      makeColorGradient: function (len) {
        var f1 = 2 * Math.PI / len * 1;
        var f2 = 2 * Math.PI / len * 1;
        var f3 = 2 * Math.PI / len * 1;
        var o1 = 0;
        var o2 = 2 * Math.PI / 3;
        var o3 = 4 * Math.PI / 3;
        var w = 127;
        var c = 128;
        var a = [];
        for (var i = 0; i < len; i++) {
          var r = Math.round(Math.sin(f1 * i + o1) * w + c);
          var g = Math.round(Math.sin(f2 * i + o2) * w + c);
          var b = Math.round(Math.sin(f3 * i + o3) * w + c);
          a.push({r: r, g: g, b: b});
        }
        return a;
      }

    },
    mounted: function () {
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

      ComponentAnim();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }


</style>
