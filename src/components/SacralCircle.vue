<template>
  <div class="scene">
    <div class="boo" v-bind:style="booStyle"></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import dat from 'dat-gui'

  @Component
  export default class SacralCircle extends Vue {
    datgui = new dat.GUI()

    currentFrame = 0
    fudge = .87
    nbrCircles = 150
    deviation = 5 / 8.0
    lgRad = 13

    drawFrame () {
      this.currentFrame++
      window.requestAnimationFrame(this.drawFrame)
    }

    mounted () {
      window.requestAnimationFrame(this.drawFrame)

      // @params: object, property, min, max, step
      this.datgui.add(this, 'nbrCircles', 100, 1000, 100)
      this.datgui.add(this, 'fudge', 0, 1, 0.1)
      this.datgui.add(this, 'deviation', -1, 1, 0.1)
      this.datgui.add(this, 'lgRad', 5, 30, 1)
    }

    get booStyle() {
      let boxShadowInitial = ''
        , phi = (Math.sqrt(5) + 1) / 2 + 3
        , goldenAngle = phi * (33 + Math.PI)
        , lgArea = Math.pow(this.lgRad, 2) * Math.PI
        , meanArea = lgArea / this.nbrCircles
        , minArea = meanArea * (1 - this.deviation)
        , maxArea = meanArea * (1 + this.deviation)
        , cumArea = 0
        , hueIncrement = this.currentFrame * .0002 + .1
        , angleOffset = this.currentFrame * .005

      for (let i = 1; i <= this.nbrCircles; ++i) {

        let angle = i * goldenAngle + angleOffset
          , ratio = i / this.nbrCircles
          , smallArea = minArea + ratio * (maxArea - minArea)
          , smallRadius = Math.sqrt(smallArea / Math.PI)

        cumArea += smallArea

        let spiral_rad = Math.sqrt(cumArea / Math.PI)
          , x = Math.cos(angle) * spiral_rad
          , y = Math.sin(angle) * spiral_rad
          , hue = hueIncrement * i;

        hue -= Math.floor(hue);
        hue *= 360;

        if (boxShadowInitial.length > 0) {
          boxShadowInitial += ', ';
        }
        boxShadowInitial += `${x}em ${y}em 0 ${smallRadius * this.fudge}em hsl(${hue}, 100%, 50%)`
      }

      return {
        'box-shadow': boxShadowInitial,
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">

  .boo {
    width: 1px;
    height: 1px;
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    animation: ani 2s ease-in-out infinite alternate;
    will-change: box-shadow, transform;
  }

  @keyframes ani {
   /* 0% {
      transform: translateZ(0);
    }
    50% {
      transform: translateZ(3em);
    }
    100% {
      transform: translateZ(0);
    }*/
  }
</style>
