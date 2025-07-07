import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/main.css'

// ⬅️ Tambahkan plugin persist (jika kamu punya)
import { piniaPersistPlugin } from './plugins/piniaPersist.js'

// 1. Buat app dan pinia
const app = createApp(App)
const pinia = createPinia()

// 2. Pasang plugin persist ke pinia (jika ada)
pinia.use(piniaPersistPlugin)

// 3. Gunakan router & pinia
app.use(router)
app.use(pinia)

// 4. Baru SEKARANG pinia sudah aktif, panggil store
import { useKeranjangStore } from '@/stores/cart.js'
const keranjang = useKeranjangStore()
keranjang.fetchKeranjang()

// 5. Mount aplikasi
app.mount('#app')
