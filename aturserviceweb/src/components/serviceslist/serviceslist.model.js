import { mapState } from "vuex";


export default {

  computed: mapState({
    servicesList: state => state.proServices.servicesList,
    dialogVisible: state => state.proServices.displayServiceList,
  }),

  methods: {
    handleClose() {
        this.$store.dispatch("setDisplayServiceList" , false);
        this.$router.go(-1);
    },
    handleServiceSelection(selectedService){
        this.$store.dispatch("setSelectedService" , selectedService);
        this.$store.dispatch("getServiceDetails" , selectedService);
        this.$store.dispatch("setDisplayServiceList" , false);

        this.$router.push({ name: 'servicedetails' });

    }

  }
};