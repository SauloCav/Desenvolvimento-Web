
<template>

  <div id="container">
    <br/>
    <h2>Insira o ID do Funcionário:</h2><br>
    Id: <input type="text" name="" id="0" v-model="id" /> <br/><br/>

    <button @click="deleteFunc">Deletar</button>

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

    deleteFunc: function() {
      axios.delete(this.baseURI + "/" + this.id).then((result) => {
        console.log(result);
      });
    },

  },
}
</script>

<style scoped>
#container {
  text-align: center;
}

</style>
