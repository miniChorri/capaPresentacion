import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../src/pages/Dashboard.vue'
import ProductosList from '../src/pages/ProductosList.vue'
import ClientesList from '../src/pages/ClientesList.vue'
import OrdenesList from '../src/pages/OrdenesList.vue'

const routes = [
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/productos', name: 'productos', component: ProductosList },
    { path: '/clientes',  name: 'clientes',  component: ClientesList },
    { path: '/ordenes',   name: 'ordenes',   component: OrdenesList }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
