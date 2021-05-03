<template>
  <div class="paginate">
    <ul>
      <li v-for="(p, index) in pages" :key="index" @click="changePage(index)" :class="{active: index === currentPage}">
        {{index+1}}
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'Paginate',
  props: {
    limit: Number,
    offset: Number,
    total: Number,
  },
  emits: ['pageChanged'],
  computed:{
    pages(){
      return Math.ceil(this.total / this.limit)
    },
    currentPage(){
      return this.offset / this.limit
    }
  },
  methods:{
    changePage(index){
      this.$emit('pageChanged', index * this.limit);
    }
  }
}
</script>

<style scoped>
ul{
  list-style: none;
}
ul li {
  padding: 10px;
  border-radius: 10px;
  display: inline-block;
  margin: 10px;
  cursor: pointer;
}
ul li:hover{
  background-color: #75534d3d;
}
ul li.active{
  background-color: #75534da1;
  color: white;
}
</style>
