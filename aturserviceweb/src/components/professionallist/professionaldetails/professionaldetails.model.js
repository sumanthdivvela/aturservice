
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

    },
    handleCancel() {
      this.$store.dispatch("setDisplayProfessionalsList" , true);
      this.$store.dispatch("setDisplayProfessionalDetails" , false);
    }
  }
};