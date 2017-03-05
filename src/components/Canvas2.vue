<template>
  <div class="canvas">
    <canvas id="canvas" width="600" height="600"></canvas>
  </div>
</template>

<script>
  import ComponentAnim from './ComponentAnimation'

  var canvas, ctx, colorspeed, target, speed, width, height, diameter, radius, center, length, divisions;

  export default {
    name: 'Canvas2',
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
        var factor = timestamp / colorspeed;
        ctx.fillRect(0, 0, width, height);
        for (var i = 0; i < length; i++) {
          var point = {};
          point.r = 100;
          point.t = (360 / divisions * i + factor * i) * Math.PI / 180;
          point.x = point.r * Math.cos(point.t) + center.x;
          point.y = point.r * Math.sin(point.t) + center.y;
          ctx.beginPath();

          var c = {'r': 10, g: 100, 'b': 50};
          ctx.strokeStyle = "rgba(" + c.r + ", " + c.g + ", " + c.b + ", 0.5)";

          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(point.x, point.y);
          ctx.stroke();
          prev.x = point.x;
          prev.y = point.y;
        }
        window.requestAnimationFrame(this.drawFrame);
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
