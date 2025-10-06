<script setup>
import TopBar from './components/TopBar.vue'
</script>

<template>
  <TopBar />
  <main class="container">
    <router-view />
  </main>
</template>

<style>
:root { --fg:#222; --muted:#666; --brand:#0ea5e9; }
*{box-sizing:border-box} body{margin:0;font-family:system-ui,Segoe UI,Roboto,sans-serif;color:var(--fg)}
.container{max-width:1024px;margin:24px auto;padding:0 16px}
a{color:var(--brand);text-decoration:none}
</style>
