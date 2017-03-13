<template>
  <div class="hello">

    <div class="boo" v-bind:style="booStyle"></div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import dat from 'dat-gui'

  @Component
  export default class Spiral extends Vue {
    datgui = new dat.GUI()

    dotsCount = 20
    colorsCount = 7
    colorsRepeat = 3
    cutOff = .25
    diam = 0.125
    scaleFactor = 15
    cutOffFactor = 4
    multiply = 2
    cutOffShift = 1

    mounted() {
      // @params: object, property, min, max, step
      this.datgui.add(this, 'dotsCount', 10, 100)
      this.datgui.add(this, 'colorsCount', 1, 15)
      this.datgui.add(this, 'colorsRepeat', 1, 10)
      this.datgui.add(this, 'cutOff', 0.1, 1, 0.1)
      this.datgui.add(this, 'diam', 0.1, 1, 0.1)
      this.datgui.add(this, 'scaleFactor', 1, 50)
      this.datgui.add(this, 'cutOffShift', 1, 10)
    }

    get booStyle() {

      let n = this.colorsCount
        , m = this.colorsRepeat
        , p = this.dotsCount
        , d = this.diam
        , cutoff = this.cutOff
        , boxShadowInitial = ''
        , boxShadowTo = ''
        , multiply = this.multiply

      for (let i = 0, totalColors = n * m; i <= totalColors; i++) {
        let betaAngle = i * multiply * Math.PI / totalColors
          , colorHue = i * 360 / n
          , x = 0
          , y = 0
          , xFrom = 0
          , yFrom = 0
          , xTo = 0
          , yto = 0

        for (let j = 1; j <= p; j++) {
          let gammaAngle = j * multiply * Math.PI / p
            , s = this.scaleFactor
            * (cutoff * p - j)
            * (j - (this.cutOffShift + cutoff / this.cutOffFactor) * p)
            / Math.pow((0.5 + cutoff) * p, multiply)

          if (j < cutoff * p) {
            s = 0
          }

          x = x + 1.65 * (s + 1) * d
          y = x * Math.sin(gammaAngle) / 5

          xFrom = x * Math.cos(betaAngle) - y * Math.sin(betaAngle)
          yFrom = x * Math.sin(betaAngle) + y * Math.cos(betaAngle)

          if (boxShadowInitial.length > 0) {
            boxShadowInitial += ', '
          }
          boxShadowInitial += `${xFrom}em ${yFrom}em 0 ${s * d}em hsl(${colorHue}, 100%, 50%)`

          xTo = x * Math.cos(betaAngle + gammaAngle)
          yto = x * Math.sin(betaAngle + gammaAngle)
          if (boxShadowTo.length > 0) {
            boxShadowTo += ', '
          }
          boxShadowTo += `${xTo}em ${yto}em 0 ${d / multiply}em hsl(${colorHue}, 100%, 50%)`
        }
      }

      // Inject animation
      // @todo: Is there better way to do it?
      let style = document.createElement('style')
      style.type = 'text/css'
      style.innerHTML = `
        @keyframes flexibleSpiral {
          to {
            box-shadow: ${boxShadowTo}
          }
        }`
      document.getElementsByTagName('head')[0].appendChild(style)

      return {
        'margin': -d / 2 + 'em',
        'width': d + 'em',
        'height': d + 'em',
        'box-shadow': boxShadowInitial,
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'border-radius': '50%',
        'background-color': 'black',
        'animation': 'flexibleSpiral 2s ease-in-out infinite alternate',
      }
    }
  }
</script>
