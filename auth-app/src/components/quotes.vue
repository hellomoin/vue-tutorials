<template>
    <div>
        <h1>Registered as seperate compoent and used in Dashboard</h1>
        <div class="col-sm-6 col-sm-offset-3">      
            <button class="btn btn-warning" v-on:click="getQuote()">Get a Quote</button>
            <div class="quote-area" v-if="quote">
            <h3><blockquote>{{ quote }}</blockquote></h3>
            </div>
        </div>
    </div>
</template>

<script>
import {NavApp} from '@/main.js'
import auth from '@/auth'

const API_URL = 'http://localhost:3001/'
const QUOTE_URL = API_URL + 'api/protected/random-quote'

export default {
    name: 'quotes',
    data () {
    return {
        quote: '',
        token: auth.getAuthHeader()
        }
    },
    mounted(){
        if(!auth.checkAuth())
            {
            this.$router.push('Login')
            }
    },
    methods: {
        getQuote(){
            NavApp.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt_user_token_id');
            NavApp.axios.get(QUOTE_URL).then((response)=>{
                this.quote = response.data
            }).catch((error) => console.log(error))
        }
    }
}
</script>