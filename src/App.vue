<template>
  <div id="app">
    <a href="#/">Fibonacci Spiral</a>
    <a href="#/canvas">Canvas</a>
    <a href="#/tunnel">Tunnel</a>
    <a href="#/sunflower">Sunflower</a>
    <button id="fullscreen" @click="enterFullscreen()">GO FULL SCREEN</button>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Watch } from 'vue-property-decorator'
  import dat from 'dat-gui'

  window.datgui = new dat.GUI()

  @Component
  export default class App extends Vue {
    enterFullscreen () {
      const el = document.getElementById('fullscreen').nextSibling.nextSibling;
      if (el.webkitRequestFullScreen) {
        el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } else {
        el.mozRequestFullScreen();
      }
    }

    @Watch('$route')
    onRouteChanged(to, from) {
      // @todo: remove this ugly hack :)
      // to prevent datgui growing
      location.reload();
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    margin-top: 60px;
  }

  a {
    color: white;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: black;
  }

  canvas {
    vertical-align: top;
  }
  :-webkit-full-screen {
    background-color: black;
  }

  :-moz-full-screen {
    background-color: black;
  }

  :-ms-full-screen {
    background-color: black;
  }

  :-o-full-screen {
    background-color: black;
  }

  :full-screen {
    background-color: black;
  }
</style>
