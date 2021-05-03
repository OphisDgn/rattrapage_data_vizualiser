<template>
  <div class="graph">
    <h1>Graphique</h1>
    <Chart />
  </div>
</template>


<script>
import { mapState } from 'vuex'
import Chart from '@/components/Chart.vue'

export default {
  name: 'Graph',
  components: {
    Chart
  },
  computed: {
    ...mapState(['people'])
  },
  // created(){
  //   this.$store.dispatch('retrievePeople')
  // }
}
</script>