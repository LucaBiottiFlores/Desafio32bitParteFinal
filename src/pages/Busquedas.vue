<!--
En esta vista se encuentra el input en el cual el usuario ingresa su busqueda de juego.
Aquí se muestra la información del juego que busca: código, nombre juego, stock y su valor.

 -->

<template>
  <div class="container my-5">
    <section>
      <h3>Filtro</h3>
      <input
        class="inputGame px-3"
        type="text"
        placeholder="Escriba el nombre del producto"
        :value="$store.state.search"
        @input="$store.dispatch('setSearch', $event.target.value)"
      />

      <Juegos
        v-if="$store.getters.gamesBySearch.length > 0"
        :juegos="$store.getters.gamesBySearch"
      />
      <ul v-else>
        <li>Escribe algo para buscar</li>
      </ul>
    </section>
    <section>
      <h3>Cantidad de juegos totales y de stock total</h3>
      <ul>
        <li>juegos totales: {{ $store.state.games.length }}</li>
        <li>stock total: {{ $store.getters.stockTotal }}</li>
      </ul>
    </section>
    <section>
      <h3>Listado de juegos</h3>

      <Games :games="$store.state.games" />
    </section>
  </div>
</template>

<script>
import Games from '../components/Games.vue'
export default {
  name: 'BusquedasPage',
  components: { Games }
}
</script>

<style>
.inputGame {
  width: 260px;
  -webkit-border-radius: 50px;
  border-radius: 10px;
  background: #d1d8ec;
  -webkit-box-shadow: 6px 6px 12px #b2b8c9, -6px -6px 12px #f0f8ff;
  box-shadow: 6px 6px 12px #b2b8c9, -6px -6px 12px #f0f8ff;
}
</style>
