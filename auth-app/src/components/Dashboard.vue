<template>
    <div>
        <div>
            <router-view></router-view>
        </div>
        <quotes> </quotes>
    </div>
</template>

<script>
import Vue from 'vue'
import auth from '@/auth'
import quotes from './quotes'

export default {
    name: 'Dashboard',
    data () {
    return {
        }
    },
    components:{
        quotes
    },
    mounted(){
        if(!auth.checkAuth())
            {
            this.$router.push('Login')
            }
    },
    methods: {
        }
}
</script>