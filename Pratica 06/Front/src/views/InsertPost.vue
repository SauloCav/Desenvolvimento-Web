
<template>
  
  <div id="container">
    <h2>Seu Post:</h2>
    Texto: <input type="text" class="inputs_form" name="" id="textInput" v-model="text"/> <br/><br/>
    Data: <input type="text" class="inputs_form" name="" id="2" v-model="date"><br/><br/>
    Horário: <input type="text" class="inputs_form" name="" id="3" v-model="time"/><br/><br/>
    Imagem: <input type="file" id="file" ref="file" name="image" /> <br /><br />

    <button @click="inserirPosts">Inserir</button> <br /><br />

  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "InsertPost",
  data() {
    return {
      id: "",
      userId: "",
      text: "",
      date: "",
      time: "",
      posts: [],
      post: "",
      baseURI: "http://localhost:3000/posts",
      baseUpload: "http://localhost:3000/upload",
    };
  },
  methods: {
    handleFileUpload(id) {
      this.file = this.$refs.file.files[0];
 
      let obj = {
        resource: "posts",
        id: id,
      };
      let json = JSON.stringify(obj);
 
      let form = new FormData();
      form.append("obj", json);
      form.append("file", this.file);
 
      console.log(form.getAll("file"));
 
      axios
        .post(this.baseUpload, form, {
          headers: {
            "Content-Type": "multipart/form-data",
          }, 
        })
        .then((result) => {
          console.log(result);
        });
    },
    inserirPosts: function() {
      axios
        .post(this.baseURI, {
          text: this.text,
          date: this.date,
          time: this.time,
        })
        .then((result) => {
          if (result.status == 201) {
            alert("Inserido com sucesso !!");
            this.handleFileUpload(result.data.id);
          }
        })
        .catch((error) => {
          if (error.response.status == 400) {
            alert("Dados incorretos !!");
          } else {
            alert("Problema desconhecido !!");
          }
        });
    },
  },
  created() {
    if (localStorage.getItem("user")) {
      console.log("OK");
    } else {
      this.$router.push("/");
    }
  },
};
</script>

<style>
#textInput {
  width: 1000px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
