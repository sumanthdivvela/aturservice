
import { mapState } from "vuex";
import jobdetails from "../../jobdetails/jobdetails.vue";

export default {

 components: {
    jobdetails
  },

  computed: mapState({
    selectedProfessionalDetails: state => state.professionals.selectedProfessionalDetails,
    displayProfessionalDetails: state => state.professionals.displayProfessionalDetails,
  }),
  methods: {
    handleNext() {

      this.$store.dispatch("setDisplayJobDetails" ,true) ;
      this.$store.dispatch("setDisplayProfessionalDetails" , false);
      this.$router.push({ name: 'jobdetails' });

    },
    handleCancel() {
      this.$store.dispatch("setDisplayProfessionalsList" , true);
      this.$store.dispatch("setDisplayProfessionalDetails" , false);
      this.$router.go(-1);
    }
  }
};