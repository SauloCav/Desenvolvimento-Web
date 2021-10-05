<template>
  <div id="nav">
    <router-link to="/"> Inserir Post || </router-link>
    <router-link to="/feed"> Feed </router-link> 
    <!--<router-link v-else to="/">Login <br></router-link>
    <a v-if="logged" href="#" @click="logout"> Logout <br><br></a>--> 
    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      logged: false,
    };
  },
  methods: {
    logout() {
      axios.get("http://localhost:3000/users/logout").then((result) => {
        this.logged = false;
        localStorage.removeItem("user");
        console.log(result);
      });
    },
  },
  created() {
    if (localStorage.getItem("user")) {
      this.logged = true;
    }
  },
};
</script>

<style>
#app {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #372c50;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #110e3a;
}

#nav a.router-link-exact-active {
  font-weight: bold;
  color: #2217bd;
}
</style>
