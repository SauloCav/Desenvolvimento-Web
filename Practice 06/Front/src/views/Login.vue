<template>
  <div id="container">
    
    <div id="inputs">
      <input type="text" id="1" v-model="login" placeholder="Usuário"/> <br />
      <input type="password" name="" id="2" v-model="password" placeholder="Senha"/> <br />
    </div>

    <button @click="logar" id="buttonLogar">Entrar</button>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      login: "",
      password: "",
      baseLogin: "http://localhost:3000/users/login",
    };
  },
  methods: {
    logar: function() {
      axios
        .post(
          this.baseLogin,
          {
            login: this.login,
            password: this.password,
          },
          { withCredentials: true }
        )
        .then((result) => {
          let userId = this.getCookie("userId");

          if (userId) {
            localStorage.setItem("user", JSON.stringify(result.data));
          }
          this.$router.go();
        });
    },
    getCookie(name) {
      let match = document.cookie.match(new RegExp(name + "=([^;]+)"));
      if (match) return match[1];
      return;
    },
  },
};
</script>

<style>
*{
 background-color: rgb(236, 236, 236);
}
#container{
    width: 350px;
  height: 300px;
  
  border-radius: 7px;

  margin: auto auto auto auto;
  margin-top: 2em;

  box-shadow: 2px 2px rgb(41, 41, 41), 1em 0 2em rgb(94, 94, 94);

  background-color: rgb(255, 255, 255);
}
input{
  width: 200px;
  height: 27px;
  font-size: 16px;
  border-top-color: transparent;
  border-bottom-color:#24642e;
  border-left-color: transparent;
  border-right-color: transparent;
  
  color: rgb(85, 85, 85);
  background-color: transparent;
  transition: background-color 0.2s;

  margin-top: 2em;
  
}
input:hover{
  outline: none;
  border-bottom:3px solid #399c48;
}
input:focus{
  outline: none;
  border-bottom:3px solid #399c48;
}
input::placeholder{
 color:rgba(0, 66, 0, 0.507);
}
#inputs{
  margin-top: 2em;
  background-color: transparent;
}

button{
  width: 15.5em;
  height: 2.2em;
  margin-top: 4em;
  outline: none;
  transition: background-color 0.2s;
  border: none;
}
button:hover{
  cursor: pointer;
  color: white;
  background-color: rgb(103, 255, 111);

}
button:focus{
  outline: none;
}

</style>
