import jobDetails from '../../apis/jobdetails.js'

// initial state
const mutationTypes = {
    SET_HOUSENO : "SET_HOUSENO",
    SET_PINCODE : "SET_PINCODE",
    SET_STREET1 : "SET_STREETNO",
    SET_STREET2 : "SET_STREET2",
    SET_CITY : "SET_CITY",
    SET_DISPLAY_JOB_LOCATION: "SET_DISPLAY_JOB_LOCATION",
    SET_DISPLAY_JOB_DETAILS: "SET_DISPLAY_JOB_DETAILS",
    SET_JOBS_LIST: "SET_JOBS_LIST",
    SET_SELECTED_JOB: "SET_SELECTED_JOB",
    UPDATE_JOB_STATUS: "UPDATE_JOB_STATUS",
    SET_SHOW_NOTIFY: "SET_SHOW_NOTIFY"
}

const state = {
    displayJobLocation: false,
    displayJobDetails: false,
    jobDate : new Date(),
    address : {
        houseno: null,
        street1: null,
        street2: null,
        city: null,
        pincode: null
    },
    selectedJob: null,
    jobsList: null,
    showNotify: false
}

// getters
const getters = {


}

// actions 
const actions = {

    registerForJobChanges({commit, rootState}){

        const userDetails =rootState.userDetails;
        const isProfessional = userDetails.isProfessional;
        const username = userDetails.username;

        jobDetails.registerForJobChanges({username, isProfessional , callback : function(){
            commit(mutationTypes.SET_SHOW_NOTIFY , true);

        }  })
    },

    unRegisterForJobChanges(){
        jobDetails.unRegisterForJobChange();
    },


    getJobsList({commit, rootState}){


        const userDetails =rootState.userDetails;
        const isProf = userDetails.isProfessional;
        const username = userDetails.username;

        const cb = ( commit => result => {
            if(result && result.length == 0){
                result = null;
            }
            commit(mutationTypes.SET_JOBS_LIST, result);
        })(commit)
 
        if(isProf){
            jobDetails.getJobsByProfessional(username).then(cb).catch(e => console.log(e));
        }else{
            jobDetails.getJobsByUser(username).then(cb).catch(e => console.log(e));
        }

        commit(mutationTypes.SET_SHOW_NOTIFY , false);
    },


    prepareJobDetails : function({commit,state, rootState}){
       
        let cityName = rootState.locDetails.cityName;
        commit(mutationTypes.SET_CITY, cityName);

        let jobRequest =  {
            professional: rootState.professionals.selectedProfessionalDetails,
            service: rootState.proServices.selectedServiceDetails,
            location: state.address,
            userdetails: rootState.userDetails.userinfo,
            requestedDate: state.jobDate,
            status:"REQUEST"
        }
        commit(mutationTypes.SET_SELECTED_JOB, jobRequest);
    },

    setSelectedJob: function({commit} , jobRequest){
        commit(mutationTypes.SET_SELECTED_JOB, jobRequest);
    },

    setHouseno : function( {commit} , {houseno}){
        commit(mutationTypes.SET_HOUSENO, houseno);
    },
    setPincode: function( {commit} , {pincode}){
        commit(mutationTypes.SET_PINCODE, pincode);
    },
    setStreet1 : function( {commit} , {street1}){
        commit(mutationTypes.SET_STREET1, street1);
    },
    setStreet2 : function( {commit} , {street2}){
        commit(mutationTypes.SET_STREET2, street2);
    },
    setCity : function( {commit} , {cityName}){
        commit(mutationTypes.SET_CITY, cityName);
    },

    setDisplayJobLocation({commit}, display){
        commit(mutationTypes.SET_DISPLAY_JOB_LOCATION, display);
    },

    setDisplayJobDetails({commit}, display){
        commit(mutationTypes.SET_DISPLAY_JOB_DETAILS, display);
    },

    scheduleNewJob({commit,state}){
       // let job ={};
        commit(mutationTypes.UPDATE_JOB_STATUS, jobDetails.JOB_STATUS.CREATED);
        jobDetails.createJobRequest(state.selectedJob);
        commit(mutationTypes.SET_SELECTED_JOB, null);
    },

    handleJobCancel({commit, state}){
        jobDetails.updateJobStatus(state.selectedJob, jobDetails.JOB_STATUS.CANCELED);

        commit(mutationTypes.SET_SELECTED_JOB, null);
    },
    handleJobAccepted({commit, state}){
        jobDetails.updateJobStatus(state.selectedJob, jobDetails.JOB_STATUS.ACCEPTED);

        commit(mutationTypes.SET_SELECTED_JOB, null);

    },
    handleJobCompleted({commit, state}){
        jobDetails.updateJobStatus(state.selectedJob, jobDetails.JOB_STATUS.COMPLETED);

        commit(mutationTypes.SET_SELECTED_JOB, null);
    },
}

// mutations
const mutations = {
   [mutationTypes.SET_HOUSENO] : function(state, houseno){
        state.address.houseno = houseno;
    },

    [mutationTypes.SET_PINCODE] : function(state, pincode){
        state.address.pincode = pincode;
    },

    [mutationTypes.SET_STREET1] : function(state, street1){
        state.address.street1 = street1;
    },

    [mutationTypes.SET_STREET2] : function(state, street2){
        state.address.street2 = street2;
    },

    [mutationTypes.SET_CITY] : function(state, cityName){
        state.address.city = cityName;
    },

    [mutationTypes.SET_JOBS_LIST] : function(state, jobsList){
        state.jobsList = jobsList;
    },

    [mutationTypes.SET_SELECTED_JOB] : function(state, jobRequest){
        state.selectedJob = jobRequest;
    },

    [mutationTypes.SET_DISPLAY_JOB_LOCATION] : function(state, display){
        state.displayJobLocation = !!display;
    },

    [mutationTypes.SET_SHOW_NOTIFY] : function(state, noftify){
        state.showNotify = !!noftify;
    },

    [mutationTypes.SET_DISPLAY_JOB_DETAILS] : function(state, display){
        state.displayJobDetails = !!display;
        state.jobDate = new Date();
    },

    [mutationTypes.UPDATE_JOB_STATUS] : function(state, status){
        state.selectedJob.status  = status;
    },

}



export default {
    state,
    getters,
    actions,
    mutations
}