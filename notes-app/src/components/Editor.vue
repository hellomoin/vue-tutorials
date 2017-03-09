<template>
  <div id="note-editor">
    <textarea :value="activeNoteText" @input="editNote" class="form-control">
    </textarea>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>