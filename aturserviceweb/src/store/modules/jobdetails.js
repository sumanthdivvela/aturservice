//import jobDetails from '../../apis/jobdetails.js'

// initial state
const mutationTypes = {
    SET_HOUSENO : "SET_HOUSENO",
    SET_PINCODE : "SET_PINCODE",
    SET_STREET1 : "SET_STREETNO",
    SET_STREET2 : "SET_STREET2",
    SET_CITY : "SET_CITY",
    SET_DISPLAY_JOB_LOCATION: "SET_DISPLAY_JOB_LOCATION",
    SET_DISPLAY_JOB_DETAILS: "SET_DISPLAY_JOB_DETAILS"

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
    }
}

// getters
const getters = {}

// actions
const actions = {
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

    [mutationTypes.SET_DISPLAY_JOB_LOCATION] : function(state, display){
        state.displayJobLocation = !!display;
    },

    [mutationTypes.SET_DISPLAY_JOB_DETAILS] : function(state, display){
        state.displayJobDetails = !!display;
        state.jobDate = new Date();
    },

}



export default {
    state,
    getters,
    actions,
    mutations
}