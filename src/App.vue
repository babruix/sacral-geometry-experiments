<template>
  <div id="app">
    <a href="#/">Box shadow 1</a>
    <a href="#/canvas">Canvas 1</a>
    <a href="#/tunnel">Tunnel</a>
    <a href="#/sunflower">Sunflower</a>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted: function () {

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
</style>
