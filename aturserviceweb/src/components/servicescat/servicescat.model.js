import { mapState } from "vuex";


export default {

  computed: mapState({
    serviceCatagories: state => state.proServices.serviceCatagories,
  }),
  methods: {
    serviceCatSelection(selection) {
      this.$store.dispatch("serviceCatSelection", { categoryName: selection });
      this.$router.push({ name: 'serviceslist'   });
    }
  },
  created: function() {
    this.$store.dispatch("initServiceCategories");
  }
};