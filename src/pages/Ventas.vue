<!-- Vista para comprar los juegos -->

<template>
<div class="container my-5">
  <h1 class="mx-5 my-3">Ventas</h1>
  <section>
    <h3 class="mx-5 my-3">Cantidad de juegos con stock</h3>
    <Games :games="$store.getters.stockedGames" />
    <p class="mx-5 my-3">Total:  {{ $store.getters.totalStockedGames }} </p>
  </section>
  <section>
    <h3 class="mx-5 my-3">Venta de juegos</h3>
    <Games :games="$store.state.games" modo="vender" @vender='$store.dispatch("sellGame", $event)' />
  </section>

</div>
  
</template>

<script>
import Games from "../components/Games.vue";



export default {

  components: { Games },
  methods: {
    
  }

};
</script>

<style></style>