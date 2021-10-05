
<template>

  <div id="container">
    <br/>
    <h2>Lista de Funcionários:</h2><br>
    <button @click="fetchFunc">Buscar Todos</button> <br/><br/>

    <ul>
      <li v-for="func in Funcionarios" :key="func.id">
        Nome: {{ func.nome }} <br/>
        Cargo: {{ func.cargo }} <br/>
        Data de Nascimento: {{ func.data_nascimento }} <br/>
        Data de Entrada da na Empresa: {{ func.data_entrada }} <br/><br/>
      </li>
    </ul>

  </div>

</template>

<script>
import axios from "axios";
export default {
  name: 'Funcionarios',
  data() {
    return {
      Funcionarios: [],
      baseURI: "http://localhost:3000/funcionarios",
    }
  },
  methods:{

    fetchFunc: function() {
      axios.get(this.baseURI).then((result) => {
        console.log("fetchFunc");
        console.log(result);
        this.Funcionarios = result.data;
      });
    },

  },
}
</script>

<style scoped>

#container {
  text-align: center;
}
ul {
  list-style-type: none;
}

</style>
