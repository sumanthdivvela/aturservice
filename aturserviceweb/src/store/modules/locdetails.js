import locationService from '../../apis/locationservice.js'

// initial state
const mutationTypes = {
    SET_SELECTED_CITY : "SET_SELECTED_CITY",
    SET_PINCODES : "SET_PINCODES"
}

const state = {
    cityName: "Hyderabad",
    cityList: ["Hyderabad", "Bengaluru", "Chennai"],
    locationInfo : {},
    pincodes: null,
    geoLocation : {}
}

// getters
const getters = {}

// actions
const actions = {
    setSelectedCity : function( {commit} , cityName){
        locationService.getPinCodes(cityName).then( result => {
            var pincodes = [];
            result.forEach(element => {
                pincodes.push({value:element});
            });

            commit(mutationTypes.SET_PINCODES, pincodes);
            commit(mutationTypes.SET_SELECTED_CITY, cityName);
        }).catch(e => {
            console.log(e);   
        });
    },
}

// mutations
const mutations = {
    SET_SELECTED_CITY : function(state, cityName){
        state.cityName = cityName;
    },

    SET_PINCODES : function(state, pincodes){
        state.pincodes = pincodes;
    },
}


export default {
    state,
    getters,
    actions,
    mutations
}