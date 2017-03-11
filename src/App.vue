<template>
  <div id="app">
    <a href="#/">Box shadow 1</a>
    <a href="#/canvas">Canvas 1</a>
    <a href="#/tunnel">Tunnel</a>
    <a href="#/sunflower">Sunflower</a>
    <button id="fullscreen" @click="enterFullscreen()">GO FULL SCREEN</button>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
    methods: {
      enterFullscreen: function () {
        const el = document.getElementById('fullscreen').nextSibling.nextSibling;
        if (el.webkitRequestFullScreen) {
          el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else {
          el.mozRequestFullScreen();
        }
      }
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
