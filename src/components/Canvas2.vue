<template>
  <div class="scene">
    <div class="wrapper">
      <ul class="tunnel">
        <li v-for="n in countDivs" class="ring"></li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Canvas2',
    data () {
      return {
        currentFrame: 0,
        countDivs: 72
      }
    },
    methods: {
      drawFrame: function (timestamp) {
        window.requestAnimationFrame(this.drawFrame);
      },
    },
    mounted: function () {
//      window.requestAnimationFrame(this.drawFrame);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

  @keyframes roundandround {
    to {
      transform: rotateY(360deg);
    }
  }

  body {
    background-color: #000000;
  }

  .scene {
    width: 600px;
    height: 600px;
    margin: 0 auto;
    perspective: 300px;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    /*transform: rotateX(-10deg) translateX(-5em) translateY(1em) translateZ(1em);*/
    transform: translateZ(5em);
  }

  .tunnel {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    transform-style: preserve-3d;
    animation: roundandround 20s infinite linear;
  }

  .tunnel .ring {
    position: absolute;
    top: 200px;
    left: 0;
    width: 100%;
    height: 100%;
    border: 16px solid;
    border-radius: 50%;
    transform-origin: 50% 50%;
    transform: translateX(-2em);
    will-change: color, transform;
  }

  @for $i from 1 through 72 {
    .ring:nth-child(#{$i}) {
      color: hsl($i *5deg, 100, 50);
      transform: rotateY($i *5deg) translateX(10em);
    }
  }


</style>
