<template>
    <div class="col-xs-12 col-md-6">
      <textarea id="editor" class="form-control" v-model="rawMarkdown" v-on:input="SendInput"></textarea>
    </div>
</template>

<script>
export default {
  name: 'editor',
  data () {
    return {
      rawMarkdown: ''
    }
  },
  methods:{
    SendInput(){
      this.$emit('inputSent', this.rawMarkdown)
    }
  }
}
</script>

<style>
#editor {
    height: 300px;
    max-height: 500px;
    margin-bottom: 20px;
    margin-top: 20px;
}
</style>
