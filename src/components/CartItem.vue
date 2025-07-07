<template>
  <div
    class="flex flex-col md:flex-row items-center justify-between bg-gray-800 text-white p-4 rounded-2xl shadow-md transition hover:scale-[1.01] hover:shadow-lg duration-200"
  >
    <!-- Info Produk -->
    <div class="flex items-center gap-4 w-full md:w-2/3">
      <!-- Gambar Placeholder -->
      <img
        :src="item.gambar || defaultImage"
        alt="Produk"
        class="w-20 h-20 rounded-xl object-cover bg-gray-700"
      />
      <div>
        <h3 class="text-lg font-semibold text-yellow-400">{{ item.nama }}</h3>
        <p class="text-sm text-gray-300">Rp {{ item.harga.toLocaleString('id-ID') }}</p>
      </div>
    </div>

    <!-- Aksi Hapus -->
    <div class="mt-4 md:mt-0 md:w-1/3 flex justify-end">
      <button
        @click="$emit('hapus', item.id)"
        class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all"
      >
        Hapus
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const defaultImage = 'https://via.placeholder.com/80x80.png?text=Gym'
</script>

<style scoped>
/* Sudah cukup dengan Tailwind, tidak perlu style tambahan kecuali custom khusus */
</style>
