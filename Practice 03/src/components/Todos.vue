<template>
  <button @click="fetchTodos();" id="puts">Fetch Todos</button>
  <ul>
    <li id="lista" v-for="user in users" :key="user.id">
      <div id="ponto">Usuário:</div> <br/>
      Name: {{ user.name }} <br/>
      User Name: {{ user.username }} <br/>
      Email: {{ user.email }} <br/>
      Street: {{ user.address.street }} <br/>
      Suite: {{ user.address.suite }} <br/>
      City: {{ user.address.city }} <br/>
      Zip Code: {{ user.address.zipcode }} <br/>
      Geo: {{ user.address.geo }} <br/><br/>

      <ul>
        <div id="ponto">Todos com completed True desse Usuário:</div> <br/>
      <li v-for="todo in todos" :key="todo.id">
        <div v-if="todo.userId === user.id"> 
          Title: {{ todo.title }} <br/>
          <br/>
        </div>
      </li>  
      </ul>

      <hr>

    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: 'Todos',
  data() {
    return {
      users: [],
      todos: [],
      array: [],
      usersURI: "https://jsonplaceholder.typicode.com/users",
      todossURI: "https://jsonplaceholder.typicode.com/todos"
    }
  },
  methods: {
    fetchTodos: function() {
      axios.get(this.usersURI).then((result) => {
        this.users = result.data;
        this.users
      });
      axios.get(this.todossURI).then((result) => {
        this.todos = result.data.filter(data => data.completed == true);
      });
    },
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

button#puts {
  font-size: 12pt;
    font-family: 'Times New Roman', Times, serif;
    width: 200px;
    padding: 2px;
    border-radius: 3px;
    margin: 15px;
    text-align: center;
    background-color: rgb(183, 224, 145);
}

li#lista {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background-color: rgb(228, 220, 220);
  width: 800px;
  padding: 4px;
  border-radius: 4px;
  margin: auto;
  text-align: center;
}

div#ponto {
  color: rgb(255, 0, 0);
}

</style>
