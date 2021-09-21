<!--////////// APP.VUE, COMPONENTE PRINCIPAL QUE SE ENCARGA DE MOSTRAR OTROS COMPONENTES EN LA VISTA ///////// -->
<!-- Dentro del div se muestra el componente Navbar, que contiene la barra de navegación conectada al router-view que está dentro del <main>
</main>, este se ocupa de mostrar las vistas configuradas en router.js   -->
<template>
  <div>
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<!-- Dentro del script se importa el componente Navbar para que funcione -->

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  name: "App",
};
</script>

<style scoped></style>