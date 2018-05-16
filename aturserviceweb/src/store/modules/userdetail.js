import professionals from '../../apis/professionals.js'
// initial state

const mutationTypes = {
    SET_USERNAME : "SET_USERNAME",
    SET_PASSWORD : "SET_PASSWORD",
    SET_USERINFO : "SET_USERINFO",
    SET_IS_LOGGED_IN : "SET_IS_LOGGED_IN",
    SET_DISPLAY_LOGIN_DETAILS: "SET_DISPLAY_LOGIN_DETAILS",
    SET_LOGIN_CALLBACK: "SET_LOGIN_CALLBACK",
    SET_IS_PROFESSIONAL: "SET_IS_PROFESSIONAL",

}

const state = {
    isLoggedIn: false,
    displayLogin: false,
    isProfessional:false,
    username: "",
    password: null,
    userinfo: {firstname: "First Name " , lastname: " Last Name" , phoneNo: "9876543210"},
    loginCallback:null
}

// getters
const getters = {

}

// actions
const actions = {

    setUsername : function( {commit} , {username}){
        commit(mutationTypes.SET_USERNAME, username);
    },

    setPassword : function( {commit} , {password}){
        commit(mutationTypes.SET_PASSWORD, password);
    },

    setIsLoggedIn : function( {commit} , isLoggedIn){
        commit(mutationTypes.SET_IS_LOGGED_IN, isLoggedIn);
    },

    setDisplayLogin({commit}, display){
        commit(mutationTypes.SET_DISPLAY_LOGIN_DETAILS, display);
    },

    handleUserLogout({commit, dispatch}){
        commit(mutationTypes.SET_IS_LOGGED_IN, false);
        commit(mutationTypes.SET_USERINFO, null);
        commit(mutationTypes.SET_PASSWORD, null);
        commit(mutationTypes.SET_USERNAME, "");
        commit(mutationTypes.SET_IS_PROFESSIONAL, false);
        commit(mutationTypes.SET_DISPLAY_LOGIN_DETAILS, true);
        commit(mutationTypes.SET_LOGIN_CALLBACK, null);
        dispatch('unRegisterForJobChanges');
    },

    getUserloggedin({commit}, callback){
        commit(mutationTypes.SET_DISPLAY_LOGIN_DETAILS, true);
        commit(mutationTypes.SET_LOGIN_CALLBACK, callback);
    },

    validateUserlogin({commit,dispatch, state} , callback){


        let loggedIn = true;

        const  cb = ( ( username , loggedIn, loginCallback, callback) => result => {
            result && commit(mutationTypes.SET_IS_PROFESSIONAL, true);
            if(loggedIn){
                callback({success: loggedIn, isProfessional : !!result} );
                loginCallback && loginCallback(loggedIn);
                commit(mutationTypes.SET_IS_LOGGED_IN, true);
                commit(mutationTypes.SET_USERINFO, { username : username, phoneNo: "888888888" }  );

                dispatch('registerForJobChanges')
            }
        }) (state.username, loggedIn, state.loginCallback, callback);

        professionals.getProfessionalDetailsByName(state.username)
        .then(cb);
       
    }

}

// mutations
const mutations = {


    [mutationTypes.SET_USERNAME] : function(state, username){
        state.username = username;
    },


    [mutationTypes.SET_PASSWORD] : function(state, password){
        state.password = password;
    },

    [mutationTypes.SET_USERINFO] : function(state, userinfo){
        state.userinfo = userinfo;
    },


    [mutationTypes.SET_LOGIN_CALLBACK] : function(state, callback){
        state.loginCallback = callback;
    },

    
    [mutationTypes.SET_DISPLAY_LOGIN_DETAILS] : function(state, display){
        state.displayLogin = !!display;
    },

    [mutationTypes.SET_IS_LOGGED_IN] : function(state, isLoggedIn){
        state.isLoggedIn = !!isLoggedIn;
    },

    [mutationTypes.SET_IS_PROFESSIONAL] : function(state, isProfessional){
        state.isProfessional = !!isProfessional;
    },
}



export default {
    state,
    getters,
    actions,
    mutations
}