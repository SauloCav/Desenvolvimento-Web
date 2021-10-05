<template>

  <div id="container">
    <br/>
    <h2>Insira o Cargo do Funcionário:</h2><br>
    Cargo: <input type="text" class="inputs_form" name="" id="2" v-model="cargo"><br/><br/>

    <button @click="fetchByCargoFunc">Buscar</button> <br/><br/>

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
      cargo: "",
      Funcionarios: [],
      baseURI: "http://localhost:3000/funcionarios",
    }
  },
  methods:{

    fetchByCargoFunc: function() {
      axios.get(this.baseURI + "/search?cargo=" + this.cargo).then((result) => {
        console.log("fetchByCargoFunc");
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
