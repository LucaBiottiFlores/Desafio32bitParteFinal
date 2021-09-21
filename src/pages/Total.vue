<!--Vista similar a un carrito de compras, aquí se muestran los juegos vendidos en la vista de ventas y el costo
total de todos estos juegos -->

<template>
  <div class="container my-5">
    <h1>Total</h1>

    <section>
      <h3>Listado total de ventas (carrito de compras)</h3>
      <Games :games="$store.state.sales"></Games>
    </section>
    <section>
      <h3>Monto total de ventas</h3>
      <p>Total: ${{ $store.getters.totalSalesAmount }}</p>
    </section>
  </div>
</template>

<script>
import Games from '../components/Games.vue'

export default {
  components: { Games }
}
</script>

<style></style>
