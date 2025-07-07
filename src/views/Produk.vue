<template>
  <section class="py-16 px-4 bg-gray-100 text-black">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold mb-8">Daftar Produk</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="item in produk"
          :key="item.id"
          class="bg-white p-4 rounded shadow"
        >
          <img :src="item.gambar" alt="gambar" class="w-full  object-cover rounded mb-4" />
          <h2 class="text-xl font-semibold">{{ item.nama }}</h2>
          <p class="text-gray-600">Rp{{ item.harga.toLocaleString() }}</p>
          <button
            @click="tambahKeKeranjang(item)"
            class="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useKeranjangStore } from '@/stores/cart.js'

const produk = ref([])
const keranjang = useKeranjangStore()

// Ambil daftar produk dari db.json
const ambilProduk = async () => {
  try {
    const res = await axios.get('http://localhost:3000/produk')
    produk.value = res.data
  } catch (err) {
    console.error('Gagal memuat produk:', err)
  }
}

// Tambah produk ke keranjang
const tambahKeKeranjang = async (item) => {
  const itemKeranjang = {
    id: Date.now(), // ID unik untuk keranjang (tidak bentrok dengan id produk)
    nama: item.nama,
    harga: item.harga,
    gambar: item.gambar
  }

  await keranjang.tambahProduk(itemKeranjang)
}

onMounted(() => {
  ambilProduk()
  keranjang.fetchKeranjang()
})
</script>
