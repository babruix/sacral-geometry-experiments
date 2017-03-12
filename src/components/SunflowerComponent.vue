<template>
  <div class="canvas">
    <canvas id="canvas" width="600" height="600"></canvas>
    <div>
      Size: <input id="slider" min="70" type="range" max="2000" value="2000" v-model="seeds"/>
      Rotate: <input type="checkbox" v-model="rotateOn" width="200px">
      Radius: <input type="text" v-model="radius"/>
      you can use <a href="#/canvas3" @click.prevent="setRadiusExpression()">expressions</a>
      or  <a href="#/canvas3" @click.prevent="setRadiusExpression(3)">number</a>
    </div>
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

    setRadiusExpression (number) {
      this.radius = number || 'Math.cos(theta) * Math.sin(theta) * this.PHI * 25';
    }

    mounted () {
      this.sunflower = new Sunflower('canvas');
      this.sunflower.animate();
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
