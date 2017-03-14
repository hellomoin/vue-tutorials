<template>
  <div id="app" class="container">
      <div class="row">
          <div class="col-xs-12 header-text">
              <h1>GitHub Markdown Preview</h1>
              <h4>help taken from coligo.io</h4>
          </div>
      </div>  
    <div class="row">
      <Editor v-on:inputSent="InputReceived"></Editor>
      <Preview v-bind:previewData="rawDataToPreview"></Preview>
    </div>
    <div class="row">
        <div class="col-xs-12">
            <button type="button" class="btn btn-primary pull-right" @click="renderPreview">Preview</button>
        </div>
    </div>    
  </div>
</template>

<script>
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  name: 'app',
  components: {
    Editor, Preview
  },
  data(){
    return {
      rawDataToPreview: '',
      rawMarkdown: ''
    }
  },
  methods:{
    InputReceived(rawMarkdown)
      {
      this.rawMarkdown = rawMarkdown
      },
    renderPreview(){
        var data = {text: this.rawMarkdown, mode: 'gfm'}
        this.axios.post('https://api.github.com/markdown', data).then((response)=> {
        this.rawDataToPreview = response.data
        console.log(this.rawDataToPreview)
      }).catch((error) => {
        console.log(error)
      })
    }
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

.header-text h4 {
      color: #454552;
  }

.header-text h1 {
      color: #e85a71;
  }

.panel {
    overflow-y: auto;
    max-height: 500px;
    padding: 10px;
}

.container {
    padding-bottom: 30px;
}
</style>
