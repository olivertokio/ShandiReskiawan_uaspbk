<template>
  <div>
    <h2 class="text-2xl font-bold mb-6 text-white">Riwayat Transaksi</h2>

    <div v-if="transaksi.length === 0" class="text-gray-400">Belum ada transaksi.</div>

    <div v-for="trx in transaksi" :key="trx.id" class="bg-white p-4 rounded shadow mb-4 text-gray-800">
      <h3 class="text-lg font-semibold mb-2">Member: {{ trx.member }}</h3>
      <p class="text-sm text-gray-500 mb-2">Tanggal: {{ trx.tanggal }}</p>

      <ul class="mb-2">
        <li v-for="item in trx.produk" :key="item.nama">
          • {{ item.nama }} (x{{ item.jumlah }}) - ${{ item.harga.toFixed(2) }}
        </li>
      </ul>

      <p class="font-bold text-right text-green-600">Total: ${{ trx.total.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const transaksi = ref([])

const loadTransaksi = async () => {
  try {
    const res = await axios.get('http://localhost:3000/transaksi')
    transaksi.value = res.data
  } catch (err) {
    console.error('Gagal mengambil data transaksi:', err)
  }
}

onMounted(() => {
  loadTransaksi()
})
</script>
