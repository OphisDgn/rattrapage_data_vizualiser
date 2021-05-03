<template>
  <div class="pages">
    <div class="container">
      <ul class="nav nav-tabs">
        <li class="active">
         <a href="#tab1" data-toggle="tab"><i class="fas fa-list-ul"></i> Liste </a>
        </li>
        <li>
         <a href="#tab2" data-toggle="tab"><i class="fas fa-chart-pie"></i> Graphiques </a>
        </li>
      </ul>
    </div>
   
    <div class="container">
      <div class="tab-content">
        <div class="tab-pane active" id="tab1">

        </div>
        <div class="tab-pane" id="tab2">

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
//import Datas from '@/components/Datas';

export default {
  name: 'Page',
  components: {
    //Datas
  },
  computed: {
    ...mapState(['people'])
  }
}
</script>

<style scoped>
</style>
