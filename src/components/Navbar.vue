<!--Navbar que permite moverse entre vistas -->

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand mx-4 fs-2" href="#">32Bit Store</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/inicio" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/busquedas" class="nav-link">Búsquedas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ventas" class="nav-link">Ventas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/total" class="nav-link">Total</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navbar {
-webkit-border-radius: 50px;
border-radius: 0px;
background: #535c5f;
-webkit-box-shadow: 6px 6px 12px #474e51, -6px -6px 12px #5f6a6d;
box-shadow: 6px 6px 12px #474e51, -6px -6px 12px #5f6a6d;

}

.navbar-brand {
  font-family: 'VT323', monospace;
  
}

.navbar-nav {
  margin-left: auto;
  margin-right: 100px;
}
</style>