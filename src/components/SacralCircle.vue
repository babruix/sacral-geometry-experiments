<template>
  <div class="hello">
    Frame: {{ currentFrame }}
    <div class="boo" v-bind:style="booStyle"></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class SacralCircle extends Vue {
    currentFrame = 0

    drawFrame () {
      this.currentFrame++;
      window.requestAnimationFrame(this.drawFrame);
    }

    mounted () {
      window.requestAnimationFrame(this.drawFrame);
    }

    get booStyle() {
        let width = 30
          , height = 30
          , boxShadowInitial = ''
          , nbrCircles = 150
          , deviation = 5 / 8.0
          , phi = (Math.sqrt(5) + 1) / 2 + 3
          , goldenAngle = phi * (33 + Math.PI)
          , lgRad = width * .45
          , lgArea = Math.pow(lgRad, 2) * Math.PI
          , meanArea = lgArea / nbrCircles
          , minArea = meanArea * (1 - deviation)
          , maxArea = meanArea * (1 + deviation)
          , cumArea = 0
          , fudge = .87
          , cx = width / 2
          , cy = height / 2
          , hueIncr = this.currentFrame * .0002 + .1
          , angleOffset = this.currentFrame * .005

        for (var i = 1; i <= nbrCircles; ++i) {

          let angle = i * goldenAngle + angleOffset
            , ratio = i / nbrCircles
            , sm_area = minArea + ratio * (maxArea - minArea)
            , sm_rad = Math.sqrt(sm_area / Math.PI)

          cumArea += sm_area;

          let spiral_rad = Math.sqrt(cumArea / Math.PI)
            , x = cx + Math.cos(angle) * spiral_rad
            , y = cy + Math.sin(angle) * spiral_rad
            , hue = hueIncr * i;

          hue -= Math.floor(hue);
          hue *= 360;

          if (boxShadowInitial.length > 0) {
            boxShadowInitial += ', ';
          }
          boxShadowInitial += `${x}em ${y}em 0 ${sm_rad * fudge}em hsl(${hue}, 100%, 50%)`
        }

        return {
          'box-shadow': boxShadowInitial,
          'margin': -width / 2 + 'em'
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .boo {
    width: 0.2em;
    height: 0.2em;
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    animation: ani 2s ease-in-out infinite alternate;
    will-change: box-shadow, transform;
  }

  @keyframes ani {
    0%   { transform: scaleX(1.1); }
    100% { transform: scaleX(-0.3); }
  }
</style>
