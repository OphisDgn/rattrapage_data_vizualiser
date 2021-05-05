<template>
    <div class="filter">
      <div class="group-form inputSearch">
        <label for="searchStr">Rechercher </label>
        <input class="input-filter" type= "text" v-model="searchStr" />
      </div>
      <div class="group-form">
        <label for="column">Chercher par la colonne </label>
        <select class="select-filter" name="column" v-model="column">
            <option value="favorite_fruit">Fruit</option>
            <option value="favorite_color">Couleur</option>
            <option value="favorite_pet">Animal</option>
        </select>
        
        <label for="value">Avec la valeur </label>
        <select class="select-filter" name="value" v-model="value">
            <option v-for="val in options[column]" :key="val">{{ val }}</option>
        </select>
        <br/>
        <button class="resetfilter" @click="resetFilter">Annuler les filtres</button>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Filter',
  data(){
    return {
      searchStr: '',
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
    searchString(value) {
      this.$store.dispatch('searchStrUpdate', value);
    },
    value(value) {
      this.$store.dispatch('filterUpdate', { column: this.column, value: value });
    },
  },
  methods:{
    resetFilter() {
      this.searchStr = '';
      this.$store.dispatch('resetFilter')
    },
  }
}
</script>

<style scoped>
.filter {
    text-align: left;
}
.group-form {
    display: inline-block;
    width: 40%;
}
.inputSearch {
    padding-right: 50px;
    text-align: right;
}
.select-filter {
  width: auto;
  padding: .375rem 2.25rem .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right .75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.input-filter {
  width: auto;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.resetfilter {
  border: 1px solid #f44336;
  color: red;
  background-color: white;
  padding: 7px 10px;
  font-size: 14px;
  cursor: pointer;
}
.resetfilter:hover {
  background: #f44336;
  color: white;
}
</style>
