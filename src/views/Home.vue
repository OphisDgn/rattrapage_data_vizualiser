<template>
  <div class="home">
    <Datas/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Datas from '@/components/Datas.vue'

export default {
  name: 'Home',
  components: {
    Datas
  },
  computed: {
    ...mapState(['people'])
  }
}
</script>
