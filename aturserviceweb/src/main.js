import Vue from 'vue'
//import Store from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import App from './App.vue'
import VueRouter from 'vue-router'
import login from "./components/login/login.vue";
import serviceslist from "./components/serviceslist/serviceslist.vue";
import servicedetails from "./components/servicedetails/servicedetails.vue";
import joblocation from "./components/joblocation/joblocation.vue";
import professionallist from "./components/professionallist/professionallist.vue";
import professionaldetails
from "./components/professionallist/professionaldetails/professionaldetails.vue";
import jobslist from "./components/jobslist/jobslist.vue";
import jobdetails from "./components/jobdetails/jobdetails.vue";



Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI);

const routes = [{
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/serviceslist',
    name: 'serviceslist',
    component: serviceslist
  },

  {
    path: '/servicedetails',
    name: 'servicedetails',
    component: servicedetails
  },

  {
    path: '/joblocation',
    name: 'joblocation',
    component: joblocation
  },
  {
    path: '/jobslist',
    name: 'jobslist',
    component: jobslist
  },
  {
    path: '/professionallist',
    name: 'professionallist',
    component: professionallist
  },
  {
    path: '/professionaldetails',
    name: 'professionaldetails',
    component: professionaldetails
  },

  {
    path: '/jobdetails',
    name: 'jobdetails',
    component: jobdetails
  },

];

const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')