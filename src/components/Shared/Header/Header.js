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
          //active: false
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
        link.active =  link.id == param && param!="about";
      });
      this.$router.push({name: param})
    }
  },
  mounted() {  
    this.checkLinks( this.$route.name);
  }
}
/*  validations: {
     email: {
         required,
         email
     },
       recoveryMail: {
           required,
           email
       },  
     password: {
         required
     }
 } */

/* 
$("#form-contact-us").validate({
    rules: {
      contact_email: "required",
      contact_message: "required"
    },
    submitHandler: function () {
      if (!disabled) {
        button.disabled = true;
        button.val("Sending...");
        var data = $(this.currentForm).serialize();
        $.post('mailer/', data, function (response) {
          disabled = false;
          button.val("Send");
          button.disabled = false;
          if (response.error) {
            toastr.error(response.message)
          } else {
            toastr.success(response.message)
            $("#contact_email").val("");
            $("#contact_message").val("");
          }
        }, 'json');
      }
      disabled = true;
    }
  });

  function setActiveMenuItem() {
    $(".sidemenu a, .overlay-menu a").each(function (index) {
      if ($(this).attr("data-id") == dataId) {
        $(this).addClass('active-link');
      } 
    });
  }
*/
