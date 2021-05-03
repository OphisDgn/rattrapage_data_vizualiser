<template>
  <div class="graph">
    <Chart :data="filteredData"/>
  </div>
</template>


<script>
import { mapState, mapGetters } from 'vuex'
import Chart from '@/components/Chart.vue'

export default {
  name: 'Graph',
  components: {
    Chart
  },
  computed: {
    ...mapState(['people']),
    ...mapGetters(['filteredData'])
  }
}
</script>