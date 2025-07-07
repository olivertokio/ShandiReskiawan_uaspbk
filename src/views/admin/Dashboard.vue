<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-white mb-6">Dashboard Admin</h1>

    <!-- Summary Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div class="bg-gray-800 text-white p-4 rounded-2xl shadow-xl">
        <h2 class="text-sm text-gray-400">Total Produk</h2>
        <p class="text-2xl font-bold mt-2">{{ totalProduk }}</p>
      </div>
      <div class="bg-gray-800 text-white p-4 rounded-2xl shadow-xl">
        <h2 class="text-sm text-gray-400">Total Member</h2>
        <p class="text-2xl font-bold mt-2">{{ totalMember }}</p>
      </div>
      <div class="bg-gray-800 text-white p-4 rounded-2xl shadow-xl">
        <h2 class="text-sm text-gray-400">Total Transaksi</h2>
        <p class="text-2xl font-bold mt-2">{{ totalTransaksi }}</p>
      </div>
      <div class="bg-gray-800 text-white p-4 rounded-2xl shadow-xl">
        <h2 class="text-sm text-gray-400">Penghasilan Bulan Ini</h2>
        <p class="text-2xl font-bold mt-2">Rp {{ penghasilan }}</p>
      </div>
    </div>

    <!-- Grafik Dummy Placeholder -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div class="bg-gray-800 text-white p-4 rounded-2xl shadow-xl">
        <h2 class="text-lg font-semibold mb-4">Pertumbuhan Member</h2>
        <div class="h-48 flex items-center justify-center text-gray-400">Grafik Line (Coming Soon)</div>
      </div>

      <div class="bg-gray-800 text-white p-4 rounded-2xl shadow-xl">
        <h2 class="text-lg font-semibold mb-4">Penjualan Produk</h2>
        <div class="h-48 flex items-center justify-center text-gray-400">Grafik Pie (Coming Soon)</div>
      </div>
    </div>

    <!-- Tabel Aktivitas Terbaru -->
    <div class="bg-gray-800 text-white p-4 rounded-2xl shadow-xl">
      <h2 class="text-lg font-semibold mb-4">Transaksi Terbaru</h2>
      <table class="w-full text-left">
        <thead>
          <tr class="border-b border-gray-600 text-gray-400">
            <th class="py-2">Nama</th>
            <th class="py-2">Produk</th>
            <th class="py-2">Tanggal</th>
            <th class="py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="trx in transaksiTerbaru" :key="trx.id" class="border-b border-gray-700">
            <td class="py-2">{{ trx.nama }}</td>
            <td class="py-2">{{ trx.produk }}</td>
            <td class="py-2">{{ trx.tanggal }}</td>
            <td class="py-2">Rp {{ trx.total }}</td>
          </tr>
        </tbody>
      </table>

      <div v-if="transaksiTerbaru.length === 0" class="text-center text-gray-400 py-4">
        Tidak ada transaksi.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const totalProduk = ref(0)
const totalMember = ref(0)
const totalTransaksi = ref(0)
const penghasilan = ref(0)
const transaksiTerbaru = ref([])

onMounted(async () => {
  const produk = await axios.get('http://localhost:3000/produk')
  const members = await axios.get('http://localhost:3000/members')
  const transaksi = await axios.get('http://localhost:3000/transaksi')

  totalProduk.value = produk.data.length
  totalMember.value = members.data.length
  totalTransaksi.value = transaksi.data.length
  transaksiTerbaru.value = transaksi.data.slice(-5).reverse()

  // Hitung total penghasilan dari transaksi
  penghasilan.value = transaksi.data.reduce((acc, curr) => acc + curr.total, 0)
})
</script>

<style scoped>
/* Tambahan jika butuh scroll di tabel */
table {
  border-collapse: collapse;
}
</style>