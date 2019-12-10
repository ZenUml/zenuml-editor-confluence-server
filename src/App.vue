<template>
  <div id="app">
    <workspace></workspace>
  </div>
</template>

<script>
import Workspace from "./components/Workspace";

export default {
  name: 'app',
  components: {
    Workspace
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
