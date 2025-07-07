<template>
  <button
    @click="$emit('click')"
    class="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-xl 
           transition duration-200 ease-in-out flex items-center justify-center gap-2 
           hover:scale-[1.03] shadow-md"
  >
    <!-- Icon keranjang -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
         viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.293 4.293a1 
            1 0 00.293.707L7 19h10l1-1M10 21a1 1 0 100-2 
            1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
    Tambah ke Keranjang
  </button>
</template>

<script setup>
/*
Emit event 'click' saat tombol ditekan.
Parent component (ProductCard, DetailProduk, dll) akan menangani logika tambah ke keranjang.
*/
</script>

<style scoped>
/* Tidak diperlukan tambahan karena styling sudah diatur dengan Tailwind */
</style>
