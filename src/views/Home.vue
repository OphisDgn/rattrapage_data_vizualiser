<template>
  <div class="home">
    <Filter />
    <Datas/>

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
