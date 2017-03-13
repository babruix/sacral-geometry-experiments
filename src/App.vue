<template>
  <div id="app">
    <a href="#/">Fibonacci Spiral</a>
    <a href="#/spiral">Flexible Spiral</a>
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

  @Component
  export default class App extends Vue {

    enterFullscreen () {
      const el = document.getElementById('fullscreen').nextSibling.nextSibling;
      el.webkitRequestFullScreen
        ? el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
        : el.mozRequestFullScreen();
    }

    @Watch('$route')
    onRouteChanged(to, from) {

      // Remove dat.gui element from previous route.
      let element = document.querySelector('.main.a');
      element && element.remove()
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
