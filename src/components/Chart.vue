<template>
  <div class="chart">
    <h1>Quelques graphiques des gens</h1>
    <div class="group-form">
      <div class="chartAnimal chartjs">
        <label for="Animaux">Les animaux préférés</label>
        <TypeChart type="polarArea" title="Animaux" :labels="pets.labels" :data="pets.data" :options="{responsive: true}" />
      </div>
      <div class="chartColor chartjs">
        <label for="Animaux">Les couleurs préférés</label>
        <TypeChart type="radar" title="Couleur" :labels="colors.labels" :data="colors.data" :options="{responsive:true}"/>
      </div>
      <div class="chartFruit chartjs">
        <label for="Animaux">Les fruits préférés</label>
        <TypeChart type="doughnut" title="Fruits" :labels="fruits.labels" :data="fruits.data" :options="{responsive:true}"/>
      </div>
      <div class="chartCountry chartjs">
        <label for="Pays">Les pays</label>
        <TypeChart type="doughnut" title="Pays" :labels="countries.labels" :data="countries.data" :options="{responsive:true}"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import TypeChart from '@/components/TypeChart';

export default {
  name: 'Chart',
  components: {
    TypeChart
  },
  props: {
    data: Array,
  },
  computed: {
    pets(){
      return this.aggregateDataForColumn(this.data, 'preferences.favorite_pet');
    },
    fruits(){
      return this.aggregateDataForColumn(this.data, 'preferences.favorite_fruit');
    },
    colors(){
      return this.aggregateDataForColumn(this.data, 'preferences.favorite_color');
    },
    countries(){
      return this.aggregateDataForColumn(this.data, 'contact.country');
    }
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
.chartjs {
  margin: 30px 0px;
}
</style>