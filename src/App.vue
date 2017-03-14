<template>
  <div id="app">
    <a id="fullscreen" @click="enterFullscreen()">FULL SCREEN</a>
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Watch } from 'vue-property-decorator'

  import NavMenu from './components/NavMenu'
  Vue.component('nav-menu', require('./components/NavMenu'));

  @Component
  export default class App extends Vue {

    enterFullscreen () {
      const el = document.getElementById('fullscreen').nextSibling.nextSibling.nextSibling.nextSibling
      console.log(el);
      el.webkitRequestFullScreen
        ? el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
        : el.mozRequestFullScreen()
    }

    @Watch('$route')
    onRouteChanged(to, from) {
      // Remove dat.gui element from previous route.
      let element = document.querySelector('.main.a')
      element && element.remove()
    }
  }
</script>

<style lang="scss"  rel="stylesheet/scss">
  @import url(http://fonts.googleapis.com/css?family=Fresca);
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
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

  // Colors
  $blue: #4cbeff;
  $dark: #0F1014;

  #fullscreen {
    cursor: pointer;
    background: linear-gradient(#3D4246, #24282B);
    border-radius: 7px;
    padding: 10px 20px;
    display: block;
    font-weight: bold;
    color: $blue;
    text-decoration: none;
    text-shadow: rgba(#fff,0.4)  0 0 35px,
    rgba($blue,0.95)  0 0 25px;
    border: 1px solid #53575C;
    border-right-color: $dark;
    border-bottom-color: $dark;
    width: 145px;
    margin: 5px auto;
    box-shadow: 0 2px 1px #17191C inset,
    0px -2px 8px #17191C,
    0px 2px 5px rgba(0, 0, 0, 0.1),
    0px 8px 10px rgba(0, 0, 0, 0.1);
    -webkit-transition: box-shadow 0.5s;
    &:hover{
      box-shadow: 0 2px 1px #3D4246 inset,
        0px -2px 20px #3D4246,
        0px 2px 5px rgba(0, 0, 0, 0.1),
        0px 8px 10px rgba(0, 0, 0, 0.1);
    }
    &:active{
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) inset,
        0px -2px 20px #3D4246,
        0px 1px 5px rgba(0, 0, 0, 0.1),
        0px 2px 10px rgba(0, 0, 0, 0.1);
      background:linear-gradient(#24282B, #3D4246);
    }
  }
</style>
