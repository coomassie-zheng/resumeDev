import Vue from 'vue'
import VueRouter from 'vue-router'
const Basic = () => import('../pages/basic/basic.vue')
const Profile = () => import('../pages/profile/profile.vue')
const Contact = () => import('../pages/contact/contact.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/basic'
  },
  {
    path: '/basic',
    component: Basic
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/contact',
    component: Contact
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: '/',
  routes
})

export default router
