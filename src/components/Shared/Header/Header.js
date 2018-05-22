//import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'; 
export default {
  data() {
    return {
      currentRoute: "",
      links: [{
          id: 'home',
          title: 'Home',
          active: false
        },
        {
          id: 'about',
          title: 'About us',
          active: false
        },
        {
          id: 'careers',
          title: 'Careers',
          active: false
        }, {
          id: 'contacts',
          title: 'Contact us',
          active: false
        }, {
          id: 'members',
          title: 'Members & guests',
          active: false
        }, {
          id: 'plan',
          title: 'Health plans',
          active: false
        }
      ]
    }
  },
  watch: {
    '$route' (to, from) { 
      this.checkLinks(to.name);
    }
  },
  methods: {
    changeRoute(item){
      this.checkLinks(item.id);
    },
    checkLinks(param){
      this.links.forEach(link => {
        link.active =  link.id == param;
      });
      this.$router.push({name: param})
    }
  },
  mounted() {  
    this.checkLinks( this.$route.name);
  }
} 