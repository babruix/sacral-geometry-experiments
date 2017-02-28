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
        exampleContent: 'This is TEXT',
        currentFrame: 0
      }
    },
    methods: {
      onSliderChange(value, a, b, c) {
        debugger;
        this.currentFrame = value;
        debugger;
      }
    },
    computed: {

      booStyle() {

        var width = 50,
          height = 50,
          frame_number = this.currentFrame,
          boxShadowInitial = '';


        var nbr_circles = 1500;
        var deviation = 5 / 8.0;

        var phi = (Math.sqrt(5) + 1) / 2 + 3;            // golden ratio
        var golden_angle = phi * (33 + Math.PI);            // golden angle


        var lg_rad = width * .45;
        var lg_area = Math.pow(lg_rad, 2) * Math.PI;

        var mean_area = lg_area / nbr_circles;

        var min_area = mean_area * (1 - deviation);
        var max_area = mean_area * (1 + deviation);

        var cum_area = 0;

        var fudge = .87; // Fudge factor, since our circles don't actually fill up space entirely.

        var cx = width / 2;
        var cy = height / 2;

        var hue_incr = frame_number * .0002 + .1;
        var angle_offset = frame_number * .01;

        for (var i = 1; i <= nbr_circles; ++i) {

          var angle = i * golden_angle + angle_offset;

          var ratio = i / nbr_circles;
          var sm_area = min_area + ratio * (max_area - min_area);
          var sm_rad = Math.sqrt(sm_area / Math.PI);

          cum_area += sm_area;

          var spiral_rad = Math.sqrt(cum_area / Math.PI);
          var x = cx + Math.cos(angle) * spiral_rad;
          var y = cy + Math.sin(angle) * spiral_rad;

          var hue = hue_incr * i;
          hue -= Math.floor(hue);
          hue *= 360;

          if (boxShadowInitial.length > 0) {
            boxShadowInitial += ', ';
          }
          boxShadowInitial += `${x}em ${y}em 0 ${sm_rad * fudge}em hsl(${hue}, 100%, 50%)`;

          var self = this;
          setInterval(function () {
            self.currentFrame++
            if(self.currentFrame > 1000 ){
              self.currentFrame=0;
            }
          }, 20);
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
    },
    mounted: function () {
      this.circles = 1500
      this.goldenRatio = (Math.sqrt(5) + 1) / 2 + 3
      this.goldenAngle = this.goldenRatio * (33 + Math.PI)
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

  body {
    padding: 0;
    margin: 0;
  }

  #rangeSlider {
    position: fixed;
    left: 0;
    top: 0;
  }

</style>
