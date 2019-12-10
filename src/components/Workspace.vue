<template>
  <Splitpanes vertical>
    <Pane>This the editor part</Pane>
    <Pane>
      <sequence-diagram>{{dsl}}</sequence-diagram>
    </Pane>
  </Splitpanes>
</template>

<script>
  import { Splitpanes, Pane } from 'splitpanes'
  import 'splitpanes/dist/splitpanes.css'

  export default {
  name: 'Workspace',
  data: function() {
    return {
      dsl: 'A.method()'
    }
  },
  components: {
    Splitpanes, Pane
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
