<template>
  <div class="testBracket">
    <div id="treeMe" v-if="bracketArray.length">

    </div>
    <button type="button" class="btn btn-outline-primary" @click="buildTree">Primary</button>
  </div>
</template>

<script>
  import navbar from "@/components/navbar"
  import raphael from '@/assets/treant/raphael.js'
  import Treant from '@/assets/treant/Treant.js'
  export default {
    name: 'testBracket',
    data() {
      return {
        sweetSpots: [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
        config2: {
          container: "#treeMe",
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
        theBracket: {},
        treant: {}
      }
    },
    computed: {
      tournament() {
        return this.$store.state.tournament.entries
      },
      bracketArray() {
        return this.$store.state.bracketArray || []
      }
    },
    methods: {
      buildTree() {
        // debugger
        this.$store.dispatch("buildTree", { entries: this.tournament, sweetSpots: this.sweetSpots })
        var config = [this.config2, ...this.bracketArray]
        this.treant = new Treant.Treant(config)
        // this.treant = new Treant.Treant(config)
        console.log(this.treant)
      },
      bracketMaker(bracketA) {
        // return new Treant([this.config2, ...bracketA])
      }
    },
    components: {
      navbar
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
    mounted() {
      console.log("treant", Treant)
      this.$store.dispatch("getTournaments")
      console.log(this.tournament)
    }
  }

</script>

<style>


</style>