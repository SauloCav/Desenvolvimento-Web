
<template>

  <div id="container">
    <br/>
    <h2>Insira a Quantidade de Funcionários:</h2><br>
    Quantidade: <input type="text" name="" id="5" v-model="num" /> <br/><br/>

    <button @click="fetchByNumFunc">Buscar</button>

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
      num: "",
      Funcionarios: [],
      baseURI: "http://localhost:3000/funcionarios",
    }
  },
  methods:{

    fetchByNumFunc: function() {
      axios.get(this.baseURI + "/getnum?num=" + this.num).then((result) => {
        console.log("fetchByNumFunc");
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
