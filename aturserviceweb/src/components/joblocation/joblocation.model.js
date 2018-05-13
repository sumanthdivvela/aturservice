import {
    mapState
} from "vuex";


export default {
    computed: Object.assign({
            houseno: {
                set(houseno) {
                    this.$store.dispatch("setHouseno", {
                        houseno
                    });
                },

                get() {
                    return this.$store.state.jobDetails.address.houseno;
                }
            },

            street: {
                set(street) {
                    this.$store.dispatch("setStreet1", {
                        street1: street
                    });
                },

                get() {
                    return this.$store.state.jobDetails.address.street1;
                }
            },

            colony: {
                set(colony) {
                    this.$store.dispatch("setStreet2", {
                        street2: colony
                    });
                },

                get() {
                    return this.$store.state.jobDetails.address.street2;
                }
            },
            /*
      city: {
        set(city) {
          // this.$store.dispatch("setStreet2", { street2 : colony });
        },

        get() {
          return this.$store.state.locDetails.cityName;
        }
      },
*/
            pincode: {
                set() {
                    // this.$store.dispatch("setPincode", { pincode : pincode.value });
                },

                get() {
                    return this.$store.state.jobDetails.address.pincode;
                }
            }
        },
        mapState({
            isLoggedIn : state => state.userDetails.isLoggedIn,
            cityName: state => state.locDetails.cityName,
            pincodes: state => state.locDetails.pincodes,
            displayJobLocation: state => state.jobDetails.displayJobLocation,
            selectedServiceDetails: state => state.proServices.selectedServiceDetails
        })
    ),

    methods: {
        querySearch(queryString, cb) {
            var pincodes = this.pincodes;
            var results = queryString ?
                pincodes.filter(
                    pincode =>
                    pincode.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
                    0
                ) :
                pincodes;
            cb(results);
        },

        handleSelect(item) {
            //console.log(item);
            this.$store.dispatch("setPincode", {
                pincode: item.value
            });
        },

        handleNext() {

            // console.log("On Next of locations : " );
            //this.$store.dispatch("setDisplayProfessionalsList", true);
            if (this.selectedServiceDetails && this.pincode) {
                const cb = ((store, router, selectedServiceDetails, pincode) => success => {
                    if(success){
                        try {
                            store.dispatch("getProfessionalsList", {
                                service_key: selectedServiceDetails.key_name,
                                pincode: pincode
                            });
                        } catch (e) {
                            console.log(e);
                        }
                        store.dispatch("setDisplayJobLocation", false);
                        store.dispatch("setDisplayServiceDetails", false);

                        router.push({ name: 'professionallist' });

                    }else{
                        //TODO: if not logged in not allow further.
                    }
                }) (this.$store,this.$router, this.selectedServiceDetails, this.pincode );

                if(this.isLoggedIn){
                    cb(true);
                }else{
                    this.$store.dispatch("getUserloggedin",  cb );
                    this.$router.push({
                        name: 'login'
                    });
                }
            }


           

        },
        handleCancel() {
            this.$store.dispatch("setDisplayJobLocation", false);
            this.$router.go(-1);
        }
    }
};