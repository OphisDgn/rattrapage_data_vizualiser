<template>
  <div class="home">
    <Filter />
    <Datas :data="filteredData"/>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Datas from '@/components/Datas.vue'
import Filter from '@/components/Filter.vue'

export default {
  name: 'Home',
  components: {
    Datas,
    Filter
  },
  computed: {

    ...mapState(['people']),
    ...mapGetters(['filteredData'])
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>
