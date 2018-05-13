import Vue from 'vue'
import Vuex from 'vuex'
import userDetails from './modules/userdetail.js'
import proServices from './modules/proservices.js'
import locDetails from './modules/locdetails.js'
import jobDetails from './modules/jobdetails.js'
import professionals from './modules/professionals.js'


Vue.use(Vuex)


const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
  modules: {
    userDetails,
    proServices,
    locDetails,
    jobDetails,
    professionals
  },
  strict: debug
})