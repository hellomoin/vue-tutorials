<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
import Toolbar from './Toolbar'
import NotesList from './NotesList'
import Editor from './Editor'

export default {
  name: 'app',
  components: {
    Toolbar, NotesList, Editor
  }
}
</script>

<style>

</style>
