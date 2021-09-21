  
/* Se importan los componentes a usar y se indica a vue que use Router, de forma que las rutas 
definidas en el arreglo routes: [], queden asociadas a una vista del directorio "pages" */
  
import Vue from "vue";
import Router from "vue-router";

import Inicio from "./pages/Inicio.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "", redirect: "/inicio" },
    { path: "/inicio", component: Inicio, alias: ["/home", "/tablero"] },
    { path: "/busquedas", component: () => import("./pages/Busquedas.vue") },
    { path: "/ventas", component: () => import("./pages/Ventas.vue") },
    { path: "/total", component: () => import("./pages/Total.vue") },
    { path: "*", component: () => import("./pages/404.vue") },
  ],
});