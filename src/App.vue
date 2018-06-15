<template>
  <div id="app">
    <!-- <Project1/> -->
    <!-- <Project2/> -->
    <!-- <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <nav>
       <router-link to="/">Home</router-link>
       <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
// import Project1 from './components/Project1.vue'
import Project2 from './components/Project2.vue'

export default {
  name: 'app',
  components: {
    Project2
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

/* body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
body, html {
  margin: 0;
  height: 100%;
} */
#app {
    width: 50%;
}
body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}
</style>
