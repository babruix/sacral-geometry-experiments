<template>
  <div id="app">
    <a href="/">Box shadow</a>
    <a href="#/canvas">Canvas</a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  padding: 0;
  margin: 0;
  /*background-color: black;*/
}

canvas {
  vertical-align: top;
}
</style>
