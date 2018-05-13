// initial state

const mutationTypes = {
    SET_USERNAME : "SET_USERNAME",
    SET_PASSWORD : "SET_PASSWORD",
    SET_USERINFO : "SET_USERINFO",
    SET_IS_LOGGED_IN : "SET_IS_LOGGED_IN",
    SET_DISPLAY_LOGIN_DETAILS: "SET_DISPLAY_LOGIN_DETAILS",
    SET_LOGIN_CALLBACK: "SET_LOGIN_CALLBACK"

}

const state = {
    isLoggedIn: false,
    displayLogin: false,
    username: "",
    password: null,
    userinfo: {firstname: "First Name " , lastname: " Last Name"},
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


    handleUserLogout({commit}){
        commit(mutationTypes.SET_IS_LOGGED_IN, false);
        commit(mutationTypes.SET_USERINFO, null);
        commit(mutationTypes.SET_PASSWORD, null);
        commit(mutationTypes.SET_USERNAME, "");
        commit(mutationTypes.SET_DISPLAY_LOGIN_DETAILS, true);
    },

    getUserloggedin({commit}, callback){
        commit(mutationTypes.SET_DISPLAY_LOGIN_DETAILS, true);
        commit(mutationTypes.SET_LOGIN_CALLBACK, callback);
    },

    validateUserlogin({commit,state} , callback){

        commit(mutationTypes.SET_IS_LOGGED_IN, true);
        commit(mutationTypes.SET_USERINFO, { username : this.username, phoneNo: "888888888" }  );

        let loggedIn = true;

        if(loggedIn){
            callback(loggedIn);
            state.loginCallback && state.loginCallback(loggedIn);
        }
       
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
}



export default {
    state,
    getters,
    actions,
    mutations
}