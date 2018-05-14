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
        userinfo: state => state.userDetails.userinfo,
    }),
    methods: {
        handleConfirm() {

            this.$store.dispatch("scheduleNewJob", {
                professional: this.selectedProfessionalDetails,
                service: this.selectedServiceDetails,
                location: this.locationDetails,
                userdetails: this.userinfo,
                requestedDate: this.jobdate
            });

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
        }
    },
    filters: {
        datefilter: function (date) {
            if (!date) return ''
            return date.toLocaleString();
        }
    }
};