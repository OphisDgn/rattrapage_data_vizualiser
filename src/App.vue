<template>
  <div id="nav">
    <router-link to="/">Liste</router-link> |
    <router-link to="/graph">Graphique</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  created(){
    this.$store.dispatch('retrievePeople')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: left;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
