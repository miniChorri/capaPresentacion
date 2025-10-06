<script setup>
defineProps({
  cols: { type: Array, required: true }, // [{key:'Nombre',label:'Nombre'}]
  rows: { type: Array, required: true }
})
</script>

<template>
  <div class="table-wrap">
    <table>
      <thead>
      <tr>
        <th v-for="c in cols" :key="c.key">{{ c.label ?? c.key }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(r,i) in rows" :key="i">
        <td v-for="c in cols" :key="c.key">{{ r[c.key] }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrap{overflow:auto;border:1px solid #eee;border-radius:8px}
table{width:100%;border-collapse:collapse}
th,td{padding:8px 10px;border-bottom:1px solid #f2f2f2;text-align:left}
thead th{background:#fafafa}
</style>
