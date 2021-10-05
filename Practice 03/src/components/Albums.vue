<template>
  <button @click="fetchAlbums" id="puts">Fetch Albums</button>
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
      <li v-for="album in albums" :key="album.id">
        <div v-if="album.userId === user.id">
          <div id="ponto">Album:</div> <br/>
          Title: {{ album.title }} <br/><br/>

          <ul>
            <div id="ponto">Fotos desse Album:</div> <br/>
            <li v-for="photo in photos" :key="photo.id">
              <div v-if="photo.albumId === album.id">
                Title: {{ photo.title }} <br/>
                <img :src="photo.url" title="Imagem" />
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
  name: 'Albums',
  data() {
    return {
      users: [],
      albums: [],
      photos: [],
      usersURI: "https://jsonplaceholder.typicode.com/users",
      albumsURI: "https://jsonplaceholder.typicode.com/albums",
      photosURI: "https://jsonplaceholder.typicode.com/photos"

    }
  },
  methods: {
    fetchAlbums: function() {
      axios.get(this.usersURI).then((result) => {
        this.users = result.data;
      });
      axios.get(this.albumsURI).then((result) => {
        this.albums = result.data;
      });
      axios.get(this.photosURI).then((result) => {
        this.photos = result.data;
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
    background-color: rgb(145, 189, 224);
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
