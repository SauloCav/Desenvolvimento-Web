<template>
  <button @click="fetchPosts" id="puts">Fetch Posts</button>
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
      <li v-for="post in posts" :key="post.id">
        <div v-if="post.userId === user.id">
          <div id="ponto">Post:</div> <br/>
          Title: {{ post.title }} <br/>
          Body: {{ post.body }} <br/><br/>

            <ul>
              <div id="ponto">Comentários desse Post:</div> <br/> 
            <li v-for="comment in comments" :key="comment.id">
              <div v-if="comment.postId === post.id">
                Name: {{ comment.name }} <br/>
                Email: {{ comment.email }} <br/>
                Body: {{ comment.body }} <br/><br/>
              </div>
            </li>
            <br/>
            </ul>

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
  name: 'Posts',
  data() {
    return {
      users: [],
      posts: [],
      comments: [],
      usersURI: "https://jsonplaceholder.typicode.com/users",
      postsURI: "https://jsonplaceholder.typicode.com/posts",
      commentsURI: "https://jsonplaceholder.typicode.com/comments"

    }
  },
  methods: {
    fetchPosts: function() {
      axios.get(this.usersURI).then((result) => {
        this.users = result.data;
      });
      axios.get(this.postsURI).then((result) => {
        this.posts = result.data;
      });
      axios.get(this.commentsURI).then((result) => {
        this.comments = result.data;
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
    background-color:rgb(224, 145, 88);
}

li#lista {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background-color: rgb(228, 220, 220);
  padding: 4px;
  border-radius: 4px;
  margin: auto;
  text-align: center;
}

div#ponto {
  color: rgb(255, 0, 0);
}

</style>
