<template>
    <div id="app">
      <nav class="navbar navbar-default">
        <div class="container">
          <ul class="nav navbar-nav">
            <li><router-link to="home">Home</router-link></li>

            <li v-if="!user.authenticated">
                <router-link to="login">Login</router-link>
            </li>
            <li v-if="!user.authenticated">
                <router-link to="signup">Sign Up</router-link>
            </li>
            <li v-if="user.authenticated">
                <router-link to="dashboard">Dashboard</router-link>
            </li>
            <li v-if="user.authenticated">
                <router-link to="logout" v-on:click.native="logout">Logout</router-link>
            </li>
          </ul>
        </div>    
      </nav>
      <div class="container">
        <router-view></router-view>
      </div>
  </div>
</template>


<script>
import auth from '@/auth'

export default {
    name: 'app',
    data(){
        return {
            user: auth.user
        }
    },
    methods: {
      logout() {        
        auth.logout(this)        
        console.log('logged out and redirecting it to login page now')
        this.$router.push('/login')
      }
    }
}
</script>

