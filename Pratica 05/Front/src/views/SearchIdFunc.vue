
<template>

  <div id="container">
    <br/>
    <h2>Insira o ID do Funcionário:</h2><br>
    Id: <input type="text" name="" id="0" v-model="id" /> <br/><br/>

    <button @click="fetchByIdFunc">Buscar</button>

    <ul>
      <li>
        <div v-if="id != ''">
          Nome: {{ Funcionarios.nome }} <br/>
          Cargo: {{ Funcionarios.cargo }} <br/>
          Data de Nascimento: {{ Funcionarios.data_nascimento }} <br/>
          Data de Entrada da na Empresa: {{ Funcionarios.data_entrada }} <br/>
        </div>
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
      id: "",
      Funcionarios: [],
      baseURI: "http://localhost:3000/funcionarios",
    }
  },
  methods:{

    fetchByIdFunc: function() {
      axios.get(this.baseURI + "/" + this.id).then((result) => {
        console.log("fetchByIdFunc");
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
