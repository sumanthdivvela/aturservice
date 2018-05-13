import { mapState } from "vuex";
import professionaldetails from "./professionaldetails/professionaldetails.vue";


export default {
   components: {
    professionaldetails
  },

  computed: mapState({
    professionalsList: state => state.professionals.professionalsList,
    selectedProfessional: state => state.professionals.selectedProfessional,
    dialogVisible: state => state.professionals.displayProfessionalsList,
    selectedServiceDetails: state => state.proServices.selectedServiceDetails
  }),

  methods: {
    handleClose() {
      this.$store.dispatch("setDisplayProfessionalsList", false);
    },
    handleProfessionalSelection(selectedProfessional) {
      selectedProfessional && this.$store.dispatch("setSelectedProfessional", selectedProfessional);
    
    }
  },

  created: function() {
   
  }
};