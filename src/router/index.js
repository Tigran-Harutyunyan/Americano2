import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import HealthPlan from '../components/HealthPlan/HealthPlan.vue'
import Members from '../components/Members/Members.vue'
import Contacts from '../components/Contacts/Contacts.vue' 
import AboutUs from '../components/AboutUs/AboutUs.vue' 
import Careers from '../components/Careers/Careers.vue' 
Vue.use(Router)
  
export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/health-plan',
      name: 'plan',
      component: HealthPlan
    },
    {
      path: '/members',
      name: 'members',
      component: Members
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs
    } ,
    {
      path: '/careers',
      name: 'careers',
      component: Careers
    }   
  ]
})
