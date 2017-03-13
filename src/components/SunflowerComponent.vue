<template>
  <div class="canvas">
    <canvas id="canvas" width="600" height="600"></canvas>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Watch } from 'vue-property-decorator'
  import Sunflower from './Sunflower'

  @Component
  export default class SunflowerComponent extends Vue {

    seeds = 2000
    rotateOn = false
    radius = 2

    mounted () {
      this.sunflower = new Sunflower('canvas');
      this.sunflower.animate();

      // @params: object, property, min, max, step
      window.datgui.add(this, 'seeds', 70, 3000, 10)
      window.datgui.add(this, 'rotateOn')
      window.datgui.add(this, 'radius', 1, 100, 1)
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
