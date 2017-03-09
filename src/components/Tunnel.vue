<template>
  <div>
    <div class="scene" id="tunnel-scene">
    <div class="wrapper">
      <ul class="tunnel">
        <li v-for="n in countDivs" class="ring"></li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>

  export default {
    name: 'Tunnel',
    data () {
      return {
        countDivs: 72
      }
    },
    methods: {

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

  body {
    background-color: #000000;
  }

  .scene {
    width: 70%;
    height: 600px;
    margin: 0 auto;
    perspective: 15em;
    transform: translate(0%, 0%);
    overflow: hidden;
    background-color: black;
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

  .wrapper {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: translateZ(3em)  translateY(-2em) translateX(10%);
  }

  .tunnel {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    transform-style: preserve-3d;
    animation: roundandround 10s infinite linear;
    will-change: transform;
  }

  .tunnel .ring {
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
      box-shadow:  $boxShad;
    }
  }


</style>
