<template>
  <div class="datas">
    <h1>hello DAtas</h1>

    <table>
      <thead>
        <th>Nom Prénom</th>
        <th>Adresse </th>
        <th></th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="people in paginateData" :key="people.id">
          <td>{{ people.lastname + ' ' + people.firstname }}</td>
          <td>{{ people.gender }}</td>
          <td>{{ people.contact.address }}</td>
          <td>{{  }}</td>
          <td>{{  }}</td>
          <td>{{  }}</td>
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
      return this.data.slice(this.pageOffset, this.pageOffset+parseInt(this.pageSize))
    }
  }
}
</script>

<style scoped>

</style>
