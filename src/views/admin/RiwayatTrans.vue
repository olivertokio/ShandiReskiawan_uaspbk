<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-6 text-white">Riwayat Transaksi</h2>

    <div v-if="transaksi.length === 0" class="text-gray-400">Tidak ada riwayat transaksi.</div>

    <div
      v-for="item in transaksi"
      :key="item.id"
      class="mb-6 p-4 bg-white text-black rounded-lg shadow"
    >
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-lg font-semibold">{{ item.nama }}</h3>
        <p class="text-sm text-gray-500">{{ item.tanggal }}</p>
      </div>

      <table class="w-full border text-sm mb-2">
        <thead class="bg-gray-200">
          <tr>
            <th class="py-1 px-2 text-left">Produk</th>
            <th class="py-1 px-2 text-left">Jumlah</th>
            <th class="py-1 px-2 text-left">Harga</th>
            <th class="py-1 px-2 text-left">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in item.produk" :key="p.nama">
            <td class="py-1 px-2"><br>{{ p.nama }}<br></td>
            <td class="py-1 px-2">{{ p.jumlah }}</td>
            <td class="py-1 px-2">Rp {{ p.harga.toFixed(2) }}</td>
            <td class="py-1 px-2">Rp {{ (p.harga * p.jumlah).toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>

      <div class="text-right font-semibold">
        Total: Rp {{ totalHarga(item.produk).toFixed(2) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const transaksi = ref([])

const totalHarga = (produkList) => {
  return produkList.reduce((sum, p) => sum + p.harga * p.jumlah, 0)
}

const loadTransaksi = async () => {
  try {
    const response = await axios.get('http://localhost:3000/transaksi')
    transaksi.value = response.data
  } catch (err) {
    console.error('Gagal mengambil data transaksi:', err)
  }
}

onMounted(() => {
  loadTransaksi()
})
</script>
