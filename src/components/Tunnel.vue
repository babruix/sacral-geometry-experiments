<template>
  <div>
    <div class="scene" id="tunnel-scene" v-bind:style="sceneStyle">
    <div class="wrapper" v-bind:style="wrapperStyle">
      <ul class="tunnel">
        <li v-for="n in countDivs" class="ring" v-bind:style="ringStyle"></li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import dat from 'dat-gui'

  @Component
  export default class Tunnel extends Vue {
    datgui = new dat.GUI()

    countDivs = 72
    transformOrigin = 25
    perspective = 20
    wrapperTransformZ = 3
    wrapperTransformY = -2
    wrapperTransformX = 10

    mounted() {
      // @params: object, property, min, max, step
      this.datgui.add(this, 'transformOrigin', 20, 50)
      this.datgui.add(this, 'perspective', 15, 50)
      this.datgui.add(this, 'wrapperTransformZ', -40, 20).name('Z translate')
      this.datgui.add(this, 'wrapperTransformY', -20, 20).name('Y translate')
      this.datgui.add(this, 'wrapperTransformX', -100, 100).name('X translate')
    }

    get ringStyle() {
      return {
        'transform-origin': this.transformOrigin + '% ' + this.transformOrigin + '%',
      };
    }

    get sceneStyle() {
      return {
        'perspective': this.perspective + 'em',
      };
    }

    get wrapperStyle() {
        let zTrans = `translateZ(${this.wrapperTransformZ}em) `
        let yTrans = `translateY(${this.wrapperTransformY}em) `
        let xTrans = `translateX(${this.wrapperTransformX}%)`
      return {
        'transform': zTrans + yTrans + xTrans,
      };
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

  @keyframes roundandround {
    @for $i from 0 through 10 {
      $percent: 0% + $i * 10;
      $zRotate: -1deg;
      @if $i == 0 {$zRotate: 0deg;}
      @if $i % 2 == 0 {$zRotate: 1deg;}
      @if $i == 10 {$zRotate: 0deg;}
      #{$percent} {
        transform: rotateY($i * 36deg) rotateZ($zRotate);
      }
    }
  }

  .scene {
    width: 70%;
    height: 600px;
    margin: 0 auto;
    perspective: 20em;
    transform: translate(0%, 0%);
    overflow: hidden;
    background-color: black;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: translateZ(3em)  translateY(-2em) translateX(10%);
  }

  .tunnel {
    position: relative;
    width: 250px;
    height: 250px;
    margin: 0 auto;
    transform-style: preserve-3d;
    animation: roundandround 20s infinite linear;
    will-change: transform;

    .ring {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid;
      border-radius: 50%;
      transform-origin: 27% 50%;
      transform: translateX(-5em);
      will-change: color, transform;
    }

    @for $i from 1 through 72 {
      $clr: ($i) *5deg;

      .ring:nth-child(#{$i}) {

        color: hsl($clr, 100, 50);
        transform: rotateY($clr) translateX(10em);

        $boxShad: 1px 1px hsl($clr , 100, 50);
        @for $j from 0 through 72 {
          $clr2: ($i+$j) *5deg;
          $boxShad: $boxShad, -#{$j/10}px #{$j/10}px #{$j}px hsl($clr2 , 100, 50);
        }
        box-shadow: $boxShad;
      }
    }
  }

  :-webkit-full-screen {
    .scene {
      overflow: visible;
    }
  }

  :-moz-full-screen {
    .scene {
      overflow: visible;
    }
  }

  :-ms-full-screen {
    .scene {
      overflow: visible;
    }
  }

  :-o-full-screen {
    .scene {
      overflow: visible;
    }
  }

  :full-screen {
    .scene {
      overflow: visible;
    }
  }
</style>
