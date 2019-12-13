<!--TODO:
# Customise splitter
# Add vuex store and expose it on dialog as {store} to manipulate dsl
# Integrate with code-mirror
 -->
<template>
  <Splitpanes vertical class="default-theme">
    <Pane><editor /></Pane>
    <Pane>
      <SeqDiagram />
    </Pane>
  </Splitpanes>
</template>

<script>
  import { SeqDiagram } from 'vue-sequence'

  import { Splitpanes, Pane } from 'splitpanes'
  import 'splitpanes/dist/splitpanes.css'
  import Editor from "./Editor";

  export default {
  name: 'Workspace',
  data: function() {
    return {
      dsl: 'A.method()'
    }
  },
  components: {
    Editor,
    Splitpanes,
    Pane,
    SeqDiagram
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
