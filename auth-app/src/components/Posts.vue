<template id="Posts">
  <div>
    <h1>Child component of Dashboard using routes</h1>
    <div class="list-group">
      <a v-for="post in posts" href="#" class="list-group-item clearfix">
        {{ post }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Posts', 
    data(){
        return {
    posts: [
            'Vue.js Routes and children',
            'Vue.js Components',
            'Vue + auth',
            'Vue + axios'
            ]
        }
    }
}
</script>