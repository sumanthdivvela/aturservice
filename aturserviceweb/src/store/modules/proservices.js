import proServices from '../../apis/proservices.js'

const mutationTypes = {
    SET_SELECTED_SERVICE : "SET_SELECTED_SERVICE",
    SET_SERVICE_DETAILS : "SET_SERVICE_DETAILS", 
    SET_SERVICE_CATEGORIES :"SET_SERVICE_CATEGORIES",
    SET_SERVICES_LIST: "SET_SERVICES_LIST",
    SET_DISPLAY_SERVICE_LIST: "SET_DISPLAY_SERVICE_LIST",
    SET_DISPLAY_SERVICE_DETAILS: "SET_DISPLAY_SERVICE_DETAILS"
}
// initial state
const state = {
    serviceCatagories: [],
    servicesList: null,
    recommondations: [],
    serviceName: "",
    selectedServiceDetails: null,
    displayServiceDetails: false,
    displayServiceList: false
}

// getters
const getters = {

    getServiceCatagories(state) {
        return state.serviceCatagories;
    }
    
}

// actions
const actions = {

    setSelectedService ({commit}, payload) {

        commit(mutationTypes.SET_SELECTED_SERVICE, payload.serviceName);

    },


    getServiceDetails({commit}, {key_name : serviceName}  ){
        
        proServices.getServiceDetails(serviceName).then(
             serviceDetails => {
            commit(mutationTypes.SET_SERVICE_DETAILS, serviceDetails);
            commit(mutationTypes.SET_DISPLAY_SERVICE_DETAILS, true);
           // commit(mutationTypes.SET_DISPLAY_SERVICE_LIST, false);


        }).catch(error => {console.log(error)} );
    },

    getProServicesByFilter({
        commit
        }, payload) {
        const cb = payload.cb;
        const qs = payload.queryString || "";

        commit(mutationTypes.SET_SELECTED_SERVICE, qs);

        proServices.getServices(qs).then(result => cb(result))

    },

    initServiceCategories({
        commit
    }) {

        const cb = commit => result => {
            commit(mutationTypes.SET_SERVICE_CATEGORIES, result);
        }
        
        proServices.getServiceCataegories()
        .then(cb(commit))
        .catch(error => {
            console.log(error)
        });
    },

    serviceCatSelection({commit}, payload) {

        const cb = commit => result => {
            commit(mutationTypes.SET_SERVICES_LIST, result);
            commit(mutationTypes.SET_DISPLAY_SERVICE_LIST, true);
        };

        proServices.getServicesByCategory(payload.categoryName)
        .then( cb(commit)  )
        .catch(error => {
            console.log(error)
        });
    },

    setDisplayServiceList({commit}, display){
        commit(mutationTypes.SET_DISPLAY_SERVICE_LIST, display);
    },

    setDisplayServiceDetails({commit}, display){
        commit(mutationTypes.SET_DISPLAY_SERVICE_DETAILS, display);
    },

}

// mutations
const mutations = {

    [mutationTypes.SET_SELECTED_SERVICE]  (state, serviceName) {
        state.serviceName = serviceName;
    },

    [mutationTypes.SET_SERVICE_CATEGORIES] (state, result) {
        if (result && result.length > 0) {
            state.serviceCatagories = result;
        }
    },

    [mutationTypes.SET_SERVICES_LIST]  (state, servicesList) {
        state.servicesList = servicesList;
    },

    [mutationTypes.SET_DISPLAY_SERVICE_LIST]  (state, display) {
        state.displayServiceList = !!display;
    },

    [mutationTypes.SET_SERVICE_DETAILS]  (state, serviceDetails) {
        state.selectedServiceDetails = serviceDetails;
    },

    [mutationTypes.SET_DISPLAY_SERVICE_DETAILS]  (state, display) {
        state.displayServiceDetails = !!display;
    },
}



export default {
    state,
    getters,
    actions,
    mutations
}