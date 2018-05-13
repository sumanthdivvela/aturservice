import {
    mapState,
    mapActions
} from "vuex";
import search from "../search/search.vue";
import servicecat from "../servicescat/servicescat.vue";


export default {
    components: {
        search,
        servicecat
    },
    computed: Object.assign({
            cityName: {
                set(cityName) {
                    this.$store.dispatch("setSelectedCity", cityName);
                },

                get() {
                    return this.$store.state.locDetails.cityName;
                }
            },
        },
        mapState({
            displayLogin: state => state.userDetails.displayLogin,
            isLoggedIn: state => state.userDetails.isLoggedIn,
            cityList: state => state.locDetails.cityList,
        })),

    methods: {
        ...mapActions(["getServiceCatagories"]),
        handleLoginBtn: function () {

            this.$store.dispatch("setDisplayLogin", true);
            this.$router.push({
                name: 'login'
            });

        },

        handleLogoutBtn: function () {
            this.$store.dispatch("handleUserLogout");
        }
    },

    created() {
        this.$store.dispatch("setSelectedCity", this.$store.state.locDetails.cityName);
    },

    /*
    mounted() {
    		this.$nextTick(function() {
    				window.addEventListener('resize', this.getWindowWidth);
    				window.addEventListener('resize', this.getWindowHeight);
    		})
      },
      */
};