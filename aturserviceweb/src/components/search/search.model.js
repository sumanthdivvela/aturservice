
import { mapActions } from "vuex";

export default {
  computed: {

    serviceName: {
      set(serviceName) {
          this.$store.dispatch("setSelectedService", { serviceName });
      },

      get() {
        return this.$store.state.proServices.serviceName;
      }
    }

  },
  methods: {
    ...mapActions(["getProServicesByFilter"]),

    loadAll() {
      return [];
    },
    querySearchAsync(queryString, cb) {
      this.$store.dispatch("getProServicesByFilter", { queryString, cb });
    },

    handleSelect(selectedService) {
        this.$store.dispatch("setSelectedService" , selectedService);
        this.$store.dispatch("getServiceDetails" , selectedService);
    }
  },

  created() {
    // this.$store.dispatch('getAllProducts')
  }
};