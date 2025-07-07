import { defineStore } from 'pinia'
import axios from 'axios'

const api = 'http://localhost:3000/keranjang'

export const useKeranjangStore = defineStore('keranjang', {
  state: () => ({
    items: [],
    deliveryFee: 0
  }),

  getters: {
    subtotal: (state) =>
      state.items.reduce((total, item) => total + item.harga * item.jumlah, 0),
    total: (state) =>
      state.items.reduce((total, item) => total + item.harga * item.jumlah, 0) + state.deliveryFee
  },

  actions: {
    async fetchKeranjang() {
      try {
        const res = await axios.get(api)
        this.items = res.data
      } catch (err) {
        console.error('❌ Gagal memuat keranjang:', err)
      }
    },

    async tambahProduk(produk) {
      const existing = this.items.find((item) => item.id === produk.id)
      if (existing) {
        existing.jumlah++
        await this.syncItem(existing)
      } else {
        const newItem = { ...produk, jumlah: 1 }
        this.items.push(newItem)
        await axios.post(api, newItem)
      }
    },

    async tambahJumlah(id) {
      const item = this.items.find((i) => i.id === id)
      if (item) {
        item.jumlah++
        await this.syncItem(item)
      }
    },

    async kurangJumlah(id) {
      const item = this.items.find((i) => i.id === id)
      if (item && item.jumlah > 1) {
        item.jumlah--
        await this.syncItem(item)
      }
    },

    async hapusProduk(id) {
      try {
        this.items = this.items.filter((i) => i.id !== id)
        await axios.delete(`${api}/${id}`)
      } catch (err) {
        console.error('❌ Gagal menghapus produk:', err)
      }
    },

    async clearCart() {
      try {
        for (const item of this.items) {
          await axios.delete(`${api}/${item.id}`)
        }
        this.items = []
      } catch (err) {
        console.error('❌ Gagal menghapus semua isi keranjang:', err)
      }
    },

    async syncItem(item) {
      try {
        await axios.put(`${api}/${item.id}`, item)
      } catch (err) {
        console.error('❌ Gagal update item:', err)
      }
    }
  }
})
