import professionals from '../../apis/professionals.js'

const mutationTypes = {
    SET_SELECTED_PROFESSIONAL : "SET_SELECTED_PROFESSIONAL",
    SET_PROFESSIONAL_DETAILS : "SET_PROFESSIONAL_DETAILS", 
    SET_PROFESSIONALS_LIST: "SET_PROFESSIONALS_LIST",
    SET_DISPLAY_PROFESSIONALS_LIST: "SET_DISPLAY_PROFESSIONALS_LIST",
    SET_DISPLAY_PROFESSIONAL_DETAILS: "SET_DISPLAY_PROFESSIONAL_DETAILS"
}
// initial state
const state = {
    professionalsList: null,
    selectedProfessional: null,
    selectedProfessionalDetails: {},
    displayProfessionalDetails: false,
    displayProfessionalsList: false
}

// getters
const getters = {};


// actions
const actions = {

    setSelectedProfessional ({commit}, payload) {
        const profId = payload.id;

        professionals.getProfessionalDetails(profId).then( (result) => {
            commit(mutationTypes.SET_PROFESSIONAL_DETAILS, result);
            commit(mutationTypes.SET_SELECTED_PROFESSIONAL, profId);
            commit(mutationTypes.SET_DISPLAY_PROFESSIONAL_DETAILS, true);
            commit(mutationTypes.SET_DISPLAY_PROFESSIONALS_LIST, false);
        }).catch(e =>  console.log(e));

    },


    setDisplayProfessionalsList({commit}, display){
        commit(mutationTypes.SET_DISPLAY_PROFESSIONALS_LIST, display);
    },

    setDisplayProfessionalDetails({commit}, display){
        commit(mutationTypes.SET_DISPLAY_PROFESSIONAL_DETAILS, display);
    },

    getProfessionalsList({commit}, payload){
        console.log("getProfessionalsList payload" + payload);

        const service_key = payload.service_key, pincode = payload.pincode;

        professionals.getProfessionalsByService(service_key, pincode ).then(result => {

            
            commit(mutationTypes.SET_PROFESSIONALS_LIST, result);
            commit(mutationTypes.SET_DISPLAY_PROFESSIONALS_LIST, true);


        })

    }

};


// mutations
const mutations = {

    [mutationTypes.SET_DISPLAY_PROFESSIONALS_LIST]  (state, display) {
        state.displayProfessionalsList = !!display;
    },

    [mutationTypes.SET_DISPLAY_PROFESSIONAL_DETAILS]  (state, display) {
        state.displayProfessionalDetails = !!display;
    },

    [mutationTypes.SET_PROFESSIONALS_LIST]  (state, result) {
        state.professionalsList = result;
    },

    [mutationTypes.SET_PROFESSIONAL_DETAILS]  (state, result) {
        state.selectedProfessionalDetails = result;
    },

    [mutationTypes.SET_SELECTED_PROFESSIONAL]  (state, result) {
        state.selectedProfessional = result;
    },

};


export default {
    state,
    getters,
    actions,
    mutations
}

