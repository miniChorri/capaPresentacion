<script setup>
import { onMounted, ref } from 'vue'
import { api } from '../services.js'
import DataTable from '../components/DataTable.vue'

const cols = [
  { key: 'OrdenID', label: 'ID' },
  { key: 'Fecha', label: 'Fecha' },
  { key: 'Cliente', label: 'Cliente' },
  { key: 'TotalNeto', label: 'Total' }
]
const rows = ref([])
const error = ref('')

onMounted(async () => {
  try { rows.value = await api.ordenes() } catch(e){ error.value = e.message }
})
</script>

<template>
  <section>
    <h1>Órdenes</h1>
    <p v-if="error" style="color:crimson">{{ error }}</p>
    <DataTable :cols="cols" :rows="rows" />
  </section>
</template>

<style scoped>

</style>