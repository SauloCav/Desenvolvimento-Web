<template>
  <Posts />
  <Albums />
  <Todos />
</template>

<script>
import Posts from './components/Posts.vue'
import Todos from './components/Todos.vue'
import Albums from './components/Albums.vue'

export default {
  name: 'App',
  components: {
    Posts,
    Todos,
    Albums
  }
}
</script>

<style>
#app {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 80px;
}
</style>
