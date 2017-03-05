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
  import Sunflower from './Sunflower'
  import ComponentAnim from './ComponentAnimation'

  export default {
    name: 'Canvas3',
    data () {
      return {
        seeds: 2000,
        rotateOn: false,
        radius: 2,
      }
    },
    methods: {
      setRadiusExpression: function (number) {
        this.radius = number || 'Math.cos(theta) * Math.sin(theta) * this.PHI * 25';
      }
    },
    watch: {
      seeds() {
        this.sunflower.seeds = this.seeds;
      },
      rotateOn() {
        this.sunflower.rotateOn = this.rotateOn;
      },
      radius() {
        this.sunflower.radius = this.radius;
      }
    },
    mounted: function () {
      this.sunflower = new Sunflower('canvas');
      this.sunflower.animate();
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


</style>
