<template>
  <div class="min-h-screen bg-gray-100 text-black font-poppins">
    <!-- Navbar selalu tampil -->
    <Navbar />

    <!-- Konten halaman berubah-ubah -->
    <router-view />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'

</script>

<style>
/* Font sudah global via Tailwind */
</style>
