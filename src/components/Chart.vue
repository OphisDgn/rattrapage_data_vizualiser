<template>
  <div class="chart">
    <h1>hello graph</h1>
    <div class="group-form">
      <div class="chartAnimal chartjs">
        <PieChart title="Animaux" :labels="pets.labels" :data="pets.data" :options="{responsive: true}" />
      </div>
      <!-- <div class="chartColor chartjs">
        <PieChart title="Couleur" :labels="color.labels" :data="color.data" :options="{responsive:true}"/>
      </div>
    </div>
    <div class="group-form">
      <div class="chartFruit chartjs">
        <PieChart title="Fruits" :labels="fruits.labels" :data="fruits.data" :options="{responsive:true}"/>
      </div> -->
    </div>
    
  </div>
</template>

<script>
import PieChart from '@/components/PieChart';

export default {
  name: 'Chart',
  components: {
    PieChart
  },
  props: {
    data: Array,
  },
  computed: {
    pets(){
      return this.aggregateDataForColumn(this.data, 'preferences.favorite_pet');
    },
    // fruits(){
    //   return this.aggregateDataForColumn(this.data, 'preferences.favorite_fruit');
    // },
    // colors(){
    //   return this.aggregateDataForColumn(this.data, 'preferences.favorite_color');
    // },
  },
  methods:{
    aggregateDataForColumn(data, column){
      let result = data.reduce((acc, obj) => {

        let keyValue = this.findValueAtPath(obj, column);
        if(!acc[keyValue]){
          acc[keyValue] = 1;
        }else{
          acc[keyValue]++;
        }
        return acc;
      }, {})
      return { labels:Object.keys(result), data:Object.values(result) }
    },
    findValueAtPath(obj, path, defaultValue = '') {
      const value = path.split('.').reduce(function(acc, part) { return acc && acc[part]; }, obj);
      return value !== null && value !== undefined ? value : defaultValue;
    }
}
}
</script>

<style>
/* .chartjs {
  width: 200px;
  height: 300px;
} */
</style>