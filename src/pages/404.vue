<!--Página que se muestra cuando no se encuentra el path de la url-->

<template>
  <div
    class="pageContent container d-flex flex-column justify-content-center my-5"
  >
    <h1 class="text">Tu pagina no existe</h1>
  </div>
</template>

<script>
export default {}
</script>

<style>
.text {
  text-align: center;
}

.pageContent {
  -webkit-border-radius: 50px;
  border-radius: 30px;
  background: #d1d8ec;
  -webkit-box-shadow: 12px 12px 24px #b2b8c9, -12px -12px 24px #f0f8ff;
  box-shadow: 12px 12px 24px #b2b8c9, -12px -12px 24px #f0f8ff;
  width: 400px;
  height: 300px;
  margin-right: auto;
  margin-left: auto;
}
</style>
