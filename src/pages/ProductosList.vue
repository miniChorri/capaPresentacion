<script setup>
import { onMounted, ref } from 'vue'
import { api } from '../services.js'
import DataTable from '../components/DataTable.vue'
import EntityForm from '../components/EntityForm.vue'

const cols = [
  { key: 'ProductoID', label: 'ID' },
  { key: 'Nombre', label: 'Nombre' },
  { key: 'Precio', label: 'Precio' },
  { key: 'Cantidad', label: 'Cantidad' }
]
const rows = ref([])
const error = ref('')

async function load(){
  error.value=''
  try { rows.value = await api.productos() } catch(e){ error.value = e.message }
}
onMounted(load)

async function crear(data){
  try {
    await api.crearProducto(data)
    await load()
  } catch(e){ error.value = e.message }
}
</script>

<template>
  <section>
    <h1>Productos</h1>
    <p v-if="error" style="color:crimson">{{ error }}</p>

    <h3>Nuevo producto</h3>
    <EntityForm
        :schema="[
        { key:'Nombre', label:'Nombre' },
        { key:'Precio', label:'Precio', type:'number', default:0 },
        { key:'Cantidad', label:'Cantidad', type:'number', default:0 }
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