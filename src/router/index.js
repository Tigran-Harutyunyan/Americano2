import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import HealthPlan from '../components/HealthPlan/HealthPlan.vue'
import Members from '../components/Members/Members.vue'
import Contacts from '../components/Contacts/Contacts.vue' 
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/health-plan',
      name: 'HealthPlan',
      component: HealthPlan
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    } 
  ]
})
