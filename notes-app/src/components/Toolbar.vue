<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>