<template>
  <div id="app">
    <router-link to="/team">Team</router-link>
    <router-link to="/background">Background</router-link>
    <p>
      <router-view></router-view>
</div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  overflow: scroll;
}

li {
  /* display: inline-block; */
  margin: 0 10px;
  border: solid red 1px;
}

a {
  color: #42b983;
}
</style>
