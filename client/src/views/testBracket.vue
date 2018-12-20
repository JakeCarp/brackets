<template>
  <div class="testBracket">
    <div v-if="bracketArray.length">
      {{theBracket}}
    </div>
    <button type="button" class="btn btn-outline-primary" @click="buildTree">Primary</button>
  </div>
</template>

<script>
  // import Treant from '@/assets/treant/Treant.js'
  // import Treant from 'treant-js'
  export default {
    name: 'testBracket',
    data() {
      return {
        sweetSpots: [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
        config2: {
          container: "#OrganiseChart-simple",
          levelSeparation: 20,
          siblingSeparation: 15,
          subTeeSeparation: 15,
          rootOrientation: "EAST",
          node: {
            HTMLclass: "tennis-draw",
            drawLineThrough: true
          },
          connectors: {
            type: "straight",
            style: {
              "stroke-width": 2,
              "stroke": "#ccc"
            }
          }
        },
        theBracket: {}
      }
    },
    computed: {
      tournament() {
        return this.$store.state.tournament.entries
      },
      bracketArray() {
        return this.$store.state.bracketArray
      }
    },
    methods: {
      buildTree() {
        // debugger
        this.$store.dispatch("buildTree", { entries: this.tournament, sweetSpots: this.sweetSpots })
      },
      bracketMaker(bracketA) {
        // return new Treant([this.config2, ...bracketA])
      }
    },
    components: {
      // Treant
    },
    props: [],
    watch: {
      // bracketArray(val) {
      //   this.theBracket = this.bracketMaker(this.bracketArray)
    },
    // simple_chart_config1: [
    //   this.config2, ...this.bracketArray
    // ]
  }
  // mounted() {
  //   this.$store.dispatch("getTournaments")
  //   console.log(this.tournament)
  // }

</script>

<style>


</style>