import { mapState } from "vuex";


export default {

  computed: mapState({
    isProfessional: state => state.userDetails.isProfessional,
    jobsList: state => state.jobDetails.jobsList
  }),

  methods: {
    handleClose() {
         this.$store.dispatch("setSelectedJob",null);
        this.$router.go(-1);
    },
    handleJobSelection(selectedJob){

        this.$store.dispatch("setSelectedJob",selectedJob);
        this.$router.push({ name: 'jobdetails' });
    }

  },

  created : function(){
    this.$store.dispatch("getJobsList");
  }

};