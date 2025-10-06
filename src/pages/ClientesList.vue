<script setup>
import { onMounted, ref } from 'vue'
import { api } from '../services.js'
import DataTable from '../components/DataTable.vue'
import EntityForm from '../components/EntityForm.vue'

const cols = [
  { key: 'ClienteID', label: 'ID' },
  { key: 'Nombre', label: 'Nombre' },
  { key: 'Correo', label: 'Correo' },
  { key: 'Telefono', label: 'Teléfono' }
]
const rows = ref([])
const error = ref('')

async function load(){
  try { rows.value = await api.clientes() } catch(e){ error.value = e.message }
}
onMounted(load)

async function crear(data){
  try { await api.crearCliente(data); await load() } catch(e){ error.value = e.message }
}
</script>

<template>
  <section>
    <h1>Clientes</h1>
    <p v-if="error" style="color:crimson">{{ error }}</p>

    <EntityForm
        :schema="[
        { key:'Nombre', label:'Nombre' },
        { key:'Correo', label:'Correo' },
        { key:'Telefono', label:'Teléfono' }
      ]"
        submit-text="Crear"
        @submit="crear"
    />

    <h3 style="margin-top:24px">Listado</h3>
    <DataTable :cols="cols" :rows="rows" />
  </section>
</template>

<style scoped>

</style>