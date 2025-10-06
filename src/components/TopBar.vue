<script setup>

</script>

<template>
  <header class="topbar">
    <strong>Tienda</strong>
    <nav>
      <router-link to="/">Dashboard</router-link>
      <router-link to="/productos">Productos</router-link>
      <router-link to="/clientes">Clientes</router-link>
      <router-link to="/ordenes">Órdenes</router-link>
    </nav>
  </header>
</template>

<style scoped>
.topbar{display:flex;gap:16px;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid #eee}
nav a{margin-left:12px}
.router-link-active{font-weight:600}
</style>
