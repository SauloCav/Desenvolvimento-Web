<template>
  <div id="options">
    <router-link to="/">Inserir</router-link> ||
    <router-link to="/UpdateFunc">Atualizar</router-link> ||
    <router-link to="/DeleteFunc">Deletar</router-link> ||
    <router-link to="/ShowFunc">Mostrar Todos</router-link> ||
    <router-link to="/SearchIdFunc">Buscar por Id</router-link> ||
    <router-link to="/SearchCargoFunc">Buscar por Cargo</router-link> ||
    <router-link to="/SearchNumFunc">Buscar por Quantidade</router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #372c50;
}

#options {
  padding: 30px;
}

#options a {
  color: #110e3a;
}

#options a.router-link-exact-active {
  font-weight: bold;
  color: #2217bd;
}
</style>