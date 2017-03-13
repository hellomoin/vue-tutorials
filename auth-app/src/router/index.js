import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Dashboard from '@/components/Dashboard'
import auth from '@/auth'

Vue.use(Router)

function requireAuth(to, from, next){
  if(auth.user.authenticated){
    next();
  } else {
    next({
      path: '/login'
    })
  }
}
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      beforeEnter: requireAuth
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component:Dashboard,
      beforeEnter: requireAuth
    },   
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/logout',
      redirect: '/login'
    },   
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
