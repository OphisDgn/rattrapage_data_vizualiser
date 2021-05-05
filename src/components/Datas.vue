<template>
  <div class="datas">
    <h1>La liste des gens</h1>
    <br/>
    <table class="tablePeople">
      <thead>
        <tr>
          <th>Nom prénom</th>
          <th>Genre</th>
          <th>Adresse</th>
          <th>Animal</th>
          <th>Couleur</th>
          <th>Fruit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="people in paginateData" :key="people.id">
          <td>{{ people.lastname + ' ' + people.firstname }}</td>
          <td>{{ people.gender }}</td>
          <td>{{ people.contact.address }} <br/> - {{ people.contact.city + ', ' + people.contact.country }}</td>
          <td>{{ people.preferences.favorite_pet }}</td>
          <td>{{ people.preferences.favorite_color }}</td>
          <td>{{ people.preferences.favorite_fruit }}</td>
        </tr>
      </tbody>
    </table>

    <Paginate :limit="pageSize" :offset="pageOffset" :total="totalData" @pageChanged="pageOffset = parseInt($event)"/>

    <select class="select-form" v-model="pageSize">
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="75">75</option>
      <option value="100">100</option>
    </select>

  <br/>

  <div class="download">
    <h3>Souhaitez-vous conserver les données que vous venez de voir ?</h3>
    <p>Alors n'attendez plus ! Télécharger sous format JSON avec le bouton ci-après</p>
    <button class="btnDownload" @click="downloadJson">Ce bouton là</button>
  </div>
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
  },
  methods: {
    createBlob(content, fileName, contentType) {
      const data = document.createElement('a');
      const fileBlob = new Blob([content], { type: contentType });
      data.href = URL.createObjectURL(fileBlob);
      data.download = fileName;
      data.click();
    },
    downloadJson() {
      console.log('dans downloadJson');
      this.createBlob(JSON.stringify(this.data), "people.json", "text/plain");
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
.select-form {
  width: 10%;
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
.download {
  text-align: left;
}
.btnDownload {
  border: 1px solid #04AA6D;
  color: green;
  background-color: white;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
}
.btnDownload:hover {
  background-color: #04AA6D;
  color: white;
}

</style>
