<template>
  <div class="Home">
    <div>Current user token is: {{token}}</div>
  </div>
</template>

<script>
import auth from '@/auth'

export default {
  name: 'Home',  
  data (){
    return {
      user: auth.user,
      token: auth.getAuthHeader()
      }
    },
  mounted() {
    auth.checkAuth()
  }
}
</script>

