///////////// Se importan las herramientas al proyecto, Vue, Componente principal App.vue, router, store y bootstrap /////

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

///// Esta linea previene que aparezca el productionTip al iniciar vue (mucho texto) ////

Vue.config.productionTip = false;

// Se monta el Vue para que funcione en el proyecto //

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");