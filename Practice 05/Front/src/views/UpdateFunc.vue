
<template>

  <div id="container">
    <br/>
    <h2>Insira as informações do Funcionário:</h2><br>
    Id: <input type="text" name="" id="0" v-model="id" /> <br/><br/>
    Nome: <input type="text" class="inputs_form" name="" id="1" v-model="nome"/> <br/><br/>
    Cargo: <input type="text" class="inputs_form" name="" id="2" v-model="cargo"><br/><br/>
    Data de Nascimento: <input type="text" class="inputs_form" name="" id="3" v-model="data_nascimento"/><br/><br/>
    Data de Entrada na Empresa: <input type="text" class="inputs_form" name="" id="4" v-model="data_entrada"/><br/><br/>

    <button @click="putFunc">Atualizar</button> <br/><br/>

  </div>

</template>

<script>
import axios from "axios";
export default {
  name: 'Funcionarios',
  data() {
    return {
      id: "",
      nome: "", 
      cargo: "",
      data_nascimento: "",
      data_entrada: "", 
      Funcionarios: [],
      baseURI: "http://localhost:3000/funcionarios",
    }
  },
  methods:{

    putFunc: function() {
      axios
        .put(this.baseURI + "/" + this.id, {
          nome: this.nome,
          cargo: this.cargo,
          data_nascimento: this.data_nascimento,
          data_entrada: this.data_entrada,
        })
        .then((result) => {
          console.log(result.data);
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
