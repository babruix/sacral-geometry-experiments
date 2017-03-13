<template>
  <div class="canvas">
    <canvas id="canvas" width="500" height="500"></canvas>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Watch } from 'vue-property-decorator'
  import Sunflower from './Sunflower'
  import dat from 'dat-gui'

  @Component
  export default class SunflowerComponent extends Vue {
    datgui = new dat.GUI()

    seeds = 2000
    rotateOn = false
    radius = 2

    mounted () {
      this.sunflower = new Sunflower('canvas');
      this.sunflower.animate();


      // @params: object, property, min, max, step
      this.datgui.add(this, 'seeds', 70, 3000, 10)
      this.datgui.add(this, 'rotateOn')
      this.datgui.add(this, 'radius', 2, 100, 1)
    }

    @Watch('seeds')
    onSeedsChanged() {
      this.sunflower.seeds = this.seeds
    }

    @Watch('rotateOn')
    onRotateChanged() {
      this.sunflower.rotateOn = this.rotateOn
    }

    @Watch('radius')
    onRadiusChanged() {
      this.sunflower.radius = this.radius
    }
  }
</script>
