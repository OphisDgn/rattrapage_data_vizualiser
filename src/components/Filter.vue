<template>
    <div class="filter">
        <div class="group-form inputSearch">
            <label for="searchStr">Rechercher </label>
            <input name="searchStr" type= "text" v-model="searchStr"/>
        </div>
        <div class="group-form">
            <label for="column">Chercher par la colonne </label>
            <select name="column" v-model="column">
                <option value="favorite_fruit">Fruit</option>
                <option value="favorite_color">Couleur</option>
                <option value="favorite_pet">Animal</option>
            </select>
            
            <label for="value">Avec la valeur </label>
            <select name="value" v-model="value">
                <option v-for="val in options[column]" :key="val">{{ val }}</option>
            </select>
            <br/>
            <button @click="resetFilter">Annuler les filtres</button>
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

</style>
