<template>
  <div id="app"> 
    <cool-header></cool-header>
    <router-view/>
    <cool-footer></cool-footer>
  </div>
</template>  

<script>
import style from "./assets/stylesheets/styles.scss";
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    'cool-header': Header,
    'cool-footer': Footer
  }
}
 
</script>
 