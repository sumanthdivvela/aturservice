import { mapState } from "vuex";


export default {

  computed: mapState({
    serviceDetails: state => state.proServices.selectedServiceDetails,
    displayServiceDetails: state => state.proServices.displayServiceDetails,
  }),
  methods: {
    handleNext() {

      this.$store.dispatch("setDisplayJobLocation" ,true) ;
      this.$store.dispatch("setDisplayServiceDetails" , false);

      this.$router.push({ name: 'joblocation' });

    },
    handleCancel() {
      this.$store.dispatch("setDisplayServiceDetails" , false);
       this.$store.dispatch("setDisplayServiceList" , true);

       this.$router.go(-1);

    }
  },
  created: function() {
    this.$store.dispatch("initServiceCategories");
  }
};