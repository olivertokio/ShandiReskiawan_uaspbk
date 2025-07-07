<template>
  <div
    class="bg-gray-900 text-white rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 flex flex-col justify-between"
  >
    <!-- Gambar Produk -->
    <img
      :src="produk.gambar || defaultImage"
      alt="Produk"
      class="w-full h-48 object-cover rounded-t-2xl"
    />
    <!-- Tambahkan di dalam card -->
<div v-if="produk.diskon" class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
  On Sale
</div>
<!-- Tambahkan rating dummy -->
<div class="flex items-center mt-2 text-yellow-500 text-sm">
  ⭐⭐⭐⭐⭐ <span class="ml-2 text-gray-400 text-xs">124k Reviews</span>
</div>

    <!-- Info Produk -->
    <div class="p-4 flex-1 flex flex-col justify-between">
      <div>
        <h2 class="text-xl font-semibold text-yellow-400 mb-1">{{ produk.nama }}</h2>
        <p class="text-sm text-gray-300 mb-4">Rp {{ produk.harga.toLocaleString('id-ID') }}</p>
      </div>

      <!-- Tombol Tambah ke Keranjang -->
      <button
        @click="$emit('tambah', produk)"
        class="mt-auto bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded-xl font-semibold transition-all duration-200"
      >
        Tambah ke Keranjang
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  produk: {
    type: Object,
    required: true,
  },
})

const defaultImage = 'https://via.placeholder.com/300x200.png?text=Produk+Gym'
</script>

<style scoped>
/* Tidak diperlukan tambahan karena Tailwind sudah cukup */
</style>
