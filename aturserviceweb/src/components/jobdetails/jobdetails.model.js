import {
    mapState, mapActions
} from "vuex";

export default {

    computed: mapState({
        selectedJob : state => state.jobDetails.selectedJob,
        isProfessional : state => state.userDetails.isProfessional,
        displayConfirm : state => !state.userDetails.isProfessional  && state.jobDetails.selectedJob.status == "REQUEST"
    }),
    methods: {
        handleConfirm() {

            this.$store.dispatch("scheduleNewJob", {status:"CREATED"});

            const h = this.$createElement;

            this.$notify({
                title: 'Job created',
                message: h('i', {
                    style: 'color: teal'
                }, 'Job created succesfully.')
            });

            this.$store.dispatch("setDisplayJobDetails", false);

        },

        handleCancel() {
            this.$store.dispatch("setDisplayProfessionalDetails" , true);
            this.$router.go(-1);
        },

        ...mapActions(["handleJobCancel", "handleJobAccepted", "handleJobCompleted"])
    },
    filters: {
        datefilter: function (date) {
            if (!date) return ''
            return date.toLocaleString();
        }
    }
};