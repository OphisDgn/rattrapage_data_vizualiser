<template>
  <div class="datas">
    <br/>
    <table class="tablePeople">
      <thead>
        <th>Nom prénom</th>
        <th>Genre</th>
        <th>Adresse</th>
        <th>Animal</th>
        <th>Couleur</th>
        <th>Fruit</th>
      </thead>
      <tbody>
        <tr v-for="people in paginateData" :key="people.id">
          <td>{{ people.lastname + ' ' + people.firstname }}</td>
          <td>{{ people.gender }}</td>
          <td>{{ people.contact.address + ' \n - ' + people.contact.city + ', ' + people.contact.country }}</td>
          <td>{{ people.preferences.favorite_pet }}</td>
          <td>{{ people.preferences.favorite_color }}</td>
          <td>{{ people.preferences.favorite_fruit }}</td>
        </tr>
      </tbody>
    </table>

    <Paginate :limit="pageSize" :offset="pageOffset" :total="totalData" @pageChanged="pageOffset = parseInt($event)"/>

    <select v-model="pageSize">
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="75">75</option>
      <option value="100">100</option>
    </select>

  </div>
</template>

<script>
import Paginate from '@/components/Paginate';

export default {
  name: 'Datas',
  components: {
    Paginate
  },
  props: {
    data: Array
  },
  data() {
    return {
      pageSize: 10,
      pageOffset: 0
    }
  },
  computed: {
    totalData() {
      return this.data.length;
    },
    paginateData() {
      return this.data.slice(this.pageOffset, this.pageOffset + parseInt(this.pageSize))
    }
  }
}
</script>

<style scoped>

.tablePeople {
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
.tablePeople td {
  border-bottom: 1px solid #cecece;
  padding: 10px;
}
.tablePeople th {
  border-bottom: 1px solid #4b3e3e;
}
</style>
