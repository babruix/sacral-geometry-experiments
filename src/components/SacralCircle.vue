<template>
  <div class="hello">
    <div id="rangeSlider">
      {{currentFrame}}
      <input style="width: 500px" type="range" min="1" max="1000" step="1" v-model="currentFrame">
    </div>
    <div class="boo" v-bind:style="booStyle"></div>
  </div>
</template>

<script>

  export default {
    name: 'hello',
    data () {
      return {
        currentFrame: 0
      }
    },
    methods: {},
    computed: {

      booStyle() {

        let width = 30
          , height = 30
          , frame_number = this.currentFrame
          , boxShadowInitial = ''
          , nbr_circles = 150
          , deviation = 5 / 8.0
          , phi = (Math.sqrt(5) + 1) / 2 + 3
          , golden_angle = phi * (33 + Math.PI)
          , lg_rad = width * .45
          , lg_area = Math.pow(lg_rad, 2) * Math.PI
          , mean_area = lg_area / nbr_circles
          , min_area = mean_area * (1 - deviation)
          , max_area = mean_area * (1 + deviation)
          , cum_area = 0
          , fudge = .87
          , cx = width / 2
          , cy = height / 2
          , hue_incr = frame_number * .0002 + .1
          , angle_offset = frame_number * .01

        for (var i = 1; i <= nbr_circles; ++i) {

          let angle = i * golden_angle + angle_offset
            , ratio = i / nbr_circles
            , sm_area = min_area + ratio * (max_area - min_area)
            , sm_rad = Math.sqrt(sm_area / Math.PI)

          cum_area += sm_area;

          let spiral_rad = Math.sqrt(cum_area / Math.PI)
            , x = cx + Math.cos(angle) * spiral_rad
            , y = cy + Math.sin(angle) * spiral_rad
            , hue = hue_incr * i;

          hue -= Math.floor(hue);
          hue *= 360;

          if (boxShadowInitial.length > 0) {
            boxShadowInitial += ', ';
          }
          boxShadowInitial += `${x}em ${y}em 0 ${sm_rad * fudge}em hsl(${hue}, 100%, 50%)`

          var self = this;
          setInterval(function () {
            self.currentFrame++;
            if (self.currentFrame > 1000) {
              self.currentFrame = 0;
            }
          }, 60);
        }

        return {
          'margin': -width / 2 + 'em',
          'width': 0.2 + 'em',
          'height': 0.2 + 'em',
          'box-shadow': boxShadowInitial,
          'position': 'fixed',
          'top': '50%',
          'left': '50%',
          'border-radius': '50%',
          'animation': 'ani 2s ease-in-out infinite alternate'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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



  #rangeSlider {
    position: fixed;
    left: 0;
    top: 0;
  }

</style>
