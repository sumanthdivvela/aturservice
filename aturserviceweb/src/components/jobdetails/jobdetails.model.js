import {
    mapState
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
        handleJobCancel(){

        },
        handleJobAccepted(){

        },
        handleJobCompleted(){

        },
        handleCancel() {
            this.$store.dispatch("setDisplayProfessionalDetails" , true);
            this.$router.go(-1);
        }
    },
    filters: {
        datefilter: function (date) {
            if (!date) return ''
            return date.toLocaleString();
        }
    }
};