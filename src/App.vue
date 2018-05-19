<template>
  <div id="app"> 
    <cool-header></cool-header>
    <router-view/>
    <cool-footer></cool-footer>
  </div>
</template>  

<script>
import style from "./assets/stylesheets/styles.scss";
import Header from './components/Shared/Header/Header.vue';
import Footer from './components/Shared/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    'cool-header': Header,
    'cool-footer': Footer
  }
}
 
</script>
 