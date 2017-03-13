import {NavApp} from '@/main.js'

const API_URL = 'http://localhost:3001/'
const LOGIN_URL = API_URL + 'sessions/create/'
const SIGNUP_URL = API_URL + 'users/'

export default {
    user: {
        authenticated: false
    },

    login(context, creds, redirect){
        NavApp.axios.post(LOGIN_URL, creds).then((response) => {
            localStorage.setItem('jwt_user_token_id', response.data.id_token)          
            this.user.authenticated = true
            if(redirect){
                NavApp.$router.push(redirect)
            }
        }).catch((err) => { 
            context.error = err
            console.log(err) 
        })
    },

    signup(context, creds, redirect){
        NavApp.axios.post(SIGNUP_URL, creds).then((response) => {
        localStorage.setItem('jwt_user_token_id', response.data.id_token)
        this.user.authenticated = true
        if(redirect) {
            NavApp.$router.push(redirect)
            }
        }).catch((error) => {context.error = error})
    },

    logout(context){
        localStorage.removeItem('jwt_user_token_id')
        this.user.authenticated = false
        NavApp.axios.defaults.headers.common['Authorization'] = ''        
    },

    checkAuth(){
        var jwt = localStorage.getItem('jwt_user_token_id')
        if(jwt) {
        this.user.authenticated = true
        }
        else {
        this.user.authenticated = false      
        }
    return this.user.authenticated
    },

    getAuthHeader(){
        return {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt_user_token_id')
        }
    }
}