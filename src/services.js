const BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

async function req(path, opts = {}) {
    const res = await fetch(BASE + path, {
        headers: { 'Accept': 'application/json', ...(opts.headers || {}) },
        credentials: 'include',
        ...opts
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const ct = res.headers.get('content-type') || ''
    return ct.includes('application/json') ? res.json() : res.text()
}

export const api = {
    // --- Productos ---
    productos: () => req('/api/productos/list.php'),
    crearProducto: (data) => req('/api/productos/create.php', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
    }),
    // --- Clientes ---
    clientes: () => req('/api/clientes/list.php'),
    crearCliente: (data) => req('/api/clientes/create.php', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
    }),
    // --- Órdenes (solo listado mínimo) ---
    ordenes: () => req('/api/ordenes/list.php')
}
