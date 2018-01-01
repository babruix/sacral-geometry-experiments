<template>
  <div class="star">
    <div v-for="w in countWaves" class="wave">
      <div v-for="l in countLines" class="line">
        <div class="dot">{{l.toString(2)}}</div>
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

    countWaves = 4
    countLines = 50

    mounted () {
//      this.datgui.add(this, 'transformOrigin', 20, 50)
    }

  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

  $star-quantity: 4;
  $dot-quantity: 50;
  $speed: 2s;

  body {
    * {
      position: absolute;
      top: 120px;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  }

  .star {
    .wave {
      @for $i from 1 through $star-quantity {
        &:nth-child(#{$i}) {
          transform: scale($i * 0.25);
        }
      }
      .line {
        width: 200px;
        height: 10px;
        @for $i from 0 through ($dot-quantity - 1) {
          &:nth-child(#{$i + 1}) {
            transform: rotate($i * -360deg / $dot-quantity) translate(100px);
            .dot {
              animation-delay: -$i * $speed / 10;
              background-color: hsla($i * 360 / $dot-quantity, 100%, 50%, 1);
              box-shadow: hsla($i * 360 / $dot-quantity, 100%, 50%, 1) 50px 0px 10px 10px;
            }
          }
        }
        .dot {
          width: 70px;
          height: 5px;
          border-radius: 50%;
          left: initial;
          animation: $speed Wave ease-in-out infinite;
        }
      }
    }
  }

  @keyframes Wave {
    80% {
      transform: translate(100px) scale(0.25);
    }
  }
</style>
