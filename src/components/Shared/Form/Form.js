import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';
export default {
    data() {
        return {
            email: "",
            message: ""
        }
    },
    methods: {
        onSubmit() { 
            if (!this.$v.$invalid) {
                let url = 'mailer/';
                let data = { email: this.email, message: this.message };

                fetch(url, {
                        method: 'POST', // or 'PUT'
                        body: JSON.stringify(data), // data can be `string` or {object}!
                        headers: new Headers({
                            'Content-Type': 'application/json'
                        })
                    }).then(res => res.json())
                    .catch(error => console.error('Error:', error))
                    .then(response => console.log('Success:', response));
            }
        }
    },
    validations: {
        email: {
            required,
            email
        },
        message: {
            required
        }
    }
}