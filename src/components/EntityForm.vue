<script setup>
import { reactive } from 'vue'
const props = defineProps({ schema: Array, submitText: { type: String, default: 'Guardar' }})
const emit = defineEmits(['submit'])
const model = reactive(Object.fromEntries(props.schema.map(f => [f.key, f.default ?? ''])))

function onSubmit(e){ e.preventDefault(); emit('submit', JSON.parse(JSON.stringify(model))) }
</script>

<template>
  <form @submit="onSubmit" class="form">
    <div v-for="f in schema" :key="f.key" class="row">
      <label :for="f.key">{{ f.label ?? f.key }}</label>
      <input v-if="!f.type || f.type==='text'" :id="f.key" v-model="model[f.key]" type="text" />
      <input v-else-if="f.type==='number'" :id="f.key" v-model.number="model[f.key]" type="number" step="any" />
    </div>
    <button type="submit">{{ submitText }}</button>
  </form>
</template>

<style scoped>
.form{display:grid;gap:12px;max-width:560px}
.row{display:grid;gap:4px}
input{padding:8px;border:1px solid #ddd;border-radius:8px}
button{padding:10px 14px;border:0;border-radius:10px;background:#0ea5e9;color:#fff;font-weight:600;cursor:pointer}
</style>
