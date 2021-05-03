<template>
  <div>
    <input type="text" v-model="search" />


    <label for="column">favorite</label>
    <select name="column" v-model="column">
      <option value="favorite_fruit">Fruit</option>
      <option value="favorite_color">Color</option>
      <option value="favorite_pet">Pet</option>
    </select>

    <label for="value">equal</label>
    <select name="value" v-model="value">
      <option v-for="opt in options[column]" :key="opt">{{opt}}</option>
    </select>

    <button @click="resetFilter">Reset Filters</button>

  </div>
</template>

<script>

export default {
  name: 'Filter',
  data(){
    return {
      search: '',
      column: null,
      value: null,
      options: {
        favorite_fruit: ['Apple', 'Pineapple', 'Pear', 'Strawberry', 'Orange', 'Mango'],
        favorite_color: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple'],
        favorite_pet: ['Cat', 'Dog', 'Bird', 'Rat'],
      }
    }
  },
  watch:{
    searchString(value){
      this.$store.dispatch('searchUpdate', value)
    },
    value(value){
      this.$store.dispatch('filterUpdate', {column:this.column, value:value})
    },
  },
  methods:{
    resetFilter(){
      this.search = '';
      this.$store.dispatch('resetFilter')
    },
  }
}
</script>

<style scoped>

</style>
