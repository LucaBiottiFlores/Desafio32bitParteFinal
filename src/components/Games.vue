<!--Componente que imprime en la vista información sobre los juegos contenida en la store -->

<template>
  <ul>
    <li
    class="gameLi my-3 py-2 px-5 d-flex justify-content-start align-items-center"
      v-for="game in games"
      :key="game.codigo"
      :style="{ 'background-color': '#D1D8EC' }"
    >
      <img class="gameImg me-2" :src='game.url' /> | {{ game.codigo }} | {{ game.nombre }} | {{ game.stock }} |
      {{ game.precio }} | <div :style="{'background-color': game.color}" class="gameColor"/> | 
      <!-- Este botón es bacán, solo es visible cuando en la vista se especifica el modo === 'vender' -->
      <button
        v-if="modo === 'vender'"
        class="btn btn-info btn-sm m-2"
        @click="$emit('vender', game)"
        :disabled="game.stock <= 0"
      >
        Vender
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Games',
  props: {
    games: { type: Array, require: true },
    modo: { type: String, default: 'mirar' }
  }
}
</script>

<style>
  .gameImg {
    max-width: 160px;
    min-width: 160px;
    min-height: 110px;
    max-height: 110px;
    -webkit-border-radius: 50px;
    border-radius: 30px;
    background: #D1D8EC;
    -webkit-box-shadow: 6px 6px 12px #b2b8c9, -6px -6px 12px #f0f8ff;
    box-shadow: 6px 6px 12px #b2b8c9, -6px -6px 12px #f0f8ff;
  }
  .gameLi {
    -webkit-border-radius: 50px;
    border-radius: 30px;
    background: #D1D8EC;
    -webkit-box-shadow: 6px 6px 12px #b2b8c9, -6px -6px 12px #f0f8ff;
    box-shadow: 6px 6px 12px #b2b8c9, -6px -6px 12px #f0f8ff;
    height: 130px;
  }
  .gameColor {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    
  }
</style>
