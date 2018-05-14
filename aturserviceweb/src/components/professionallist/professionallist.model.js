import { mapState } from "vuex";
import professionaldetails from "./professionaldetails/professionaldetails.vue";


export default {
   components: {
    professionaldetails
  },

  computed:  mapState({
    professionalsList: state => state.professionals.professionalsList,
    selectedProfessional: state => state.professionals.selectedProfessional,
    dialogVisible: state => state.professionals.displayProfessionalsList,
    selectedServiceDetails: state => state.proServices.selectedServiceDetails,
    professionalListHeader : state => "Professionals list for " + state.proServices.selectedServiceDetails.display_name
  }),

  methods: {
    handleClose() {
      this.$store.dispatch("setDisplayProfessionalsList", false);
      this.$store.dispatch("setDisplayJobLocation", true);
      this.$router.go(-1);
    },
    handleProfessionalSelection(selectedProfessional) {
      selectedProfessional && this.$store.dispatch("setSelectedProfessional", selectedProfessional);
      this.$router.push({ name: 'professionaldetails' });
    
    }
  },

  created: function() {
   
  }
};