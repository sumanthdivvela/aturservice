import {
    mapState
} from "vuex";

export default {

    computed: mapState({
        selectedProfessionalDetails: state => state.professionals.selectedProfessionalDetails,
        selectedServiceDetails: state => state.proServices.selectedServiceDetails,
        locationDetails: state => state.jobDetails.address,
        displayJobDetails: state => state.jobDetails.displayJobDetails,
        cityName: state => state.locDetails.cityName,
        jobdate: state => state.jobDetails.jobDate,
    }),
    methods: {
        handleConfirm() {
            //this.$store.dispatch("scheduleNewJob" , false);
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
            this.$store.dispatch("setDisplayProfessionalsList", true);
            this.$store.dispatch("setDisplayJobDetails", false);
        }
    },
    filters: {
        datefilter: function (date) {
            if (!date) return ''
            return date.toLocaleString();
        }
    }
};