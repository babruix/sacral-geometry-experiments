<template>
  <div class="wrapper-1">
    <ul id="nav">
      <router-link tag="li" to="/color-spiral"><a>1</a></router-link>
      <router-link tag="li" to="/spiral"><a>2</a></router-link>
      <router-link tag="li" to="/canvas"><a>3</a></router-link>
      <router-link tag="li" to="/tunnel"><a>4</a></router-link>
      <router-link tag="li" to="/sunflower"><a>5</a></router-link>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class Navmenu extends Vue {

  }
</script>

<style lang="scss"  rel="stylesheet/scss">
  // Colors
  $blue: #4cbeff;
  $dark: #0F1014;

  .wrapper-1 {
    margin: 0 auto 7px auto;
    width: 412px;
    background: linear-gradient(#3D4246, #24282B);
    height: 60px;
    border-radius: 4px;
    border-top: 1px solid #53575C;
    border-left: 1px solid #53575C;
    box-shadow: 1px 1px #17191C,
    0 0 10px #323338;
    padding: 8px 8px 12px 8px;

    #nav {
      width: 410px;
      height: 100%;
      border: 1px solid $dark;
      border-radius: 3px;
      background: $dark;
      margin: 0 !important;
      padding: 0;

      li {
        float: left;
        width: 80px;
        height: 100%;
        color: #D9D9D9;
        text-align: center;
        text-shadow: 0 1px $dark;
        display: table;
        background: linear-gradient(#44494F, #2F3237);
        border-radius: 3px;
        border: 1px solid #53575C;
        border-right-color: $dark;
        border-bottom-color: $dark;
        box-shadow: 1px 1px #17191C;
        cursor: pointer;

        a {
          display: block;
          height: 100%;
          margin-top: 10px;
          font-size: 33px;
          font-weight: bold;
          text-decoration: none;
          text-shadow: rgba(#fff,0.4)  0 0 35px,
          rgba($blue,0.95)  0 0 25px;
          background:none;
          color:$blue;
          font-family: 'Fresca', sans-serif;
        }
      }
    }
  }

  #nav li:active, #nav li.router-link-active {
    color: #171820;
    background: #2A2D31;
    box-shadow: inset 0 0 5px 2px rgba(15, 16, 20, 0.5);
    border: 1px solid $dark;
  }

  #nav li:not(.router-link-active):hover {
    text-shadow: 1px 1px 10px Yellow;
  }
</style>
