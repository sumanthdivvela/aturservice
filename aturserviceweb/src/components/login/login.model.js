import {
    mapState
} from "vuex";


export default {
    props : {message:null},
    computed: Object.assign({
            username: {
                set(username) {
                    this.$store.dispatch("setUsername", {
                        username
                    });
                },

                get() {
                    return this.$store.state.userDetails.username;
                }
            },

            password: {
                set(password) {
                    this.$store.dispatch("setPassword", {
                        password
                    });
                },

                get() {
                    return "********";
                }
            }
        },
        mapState({
            displayLogin: state => state.userDetails.displayLogin,
        })
    ),

    methods: {

        handleLogin() {
            if (this.username && this.password) {
                try {
                    let cb =  (store,message) => success => {
                        if(success){
                            store.dispatch("setDisplayLogin", false);
                            message = null;
                        }else{
                            message = "Invalid username or password";
                        }
                    }

                    this.$store.dispatch("validateUserlogin" , cb(this.$store, this.message));
                } catch (e) {
                    console.log(e);
                }
            }



        },
        handleCancel() {
            this.$store.dispatch("setDisplayLogin", false);
        }
    }
};