<template>
  <div class="w-64 min-h-screen bg-gray-900 text-white flex flex-col justify-between">
    <!-- Bagian atas: Menu -->
    <div class="p-4">
      <h2 class="text-xl font-bold mb-6">Admin Menu</h2>
      <nav class="space-y-2">
        <router-link
          to="/admin/dashboard"
          class="block py-2 px-4 rounded hover:bg-gray-700"
          :class="{ 'bg-gray-700': isActive('/admin/dashboard') }"
        >
          Dashboard
        </router-link>

        <router-link
          to="/admin/produk"
          class="block py-2 px-4 rounded hover:bg-gray-700"
          :class="{ 'bg-gray-700': isActive('/admin/produk') }"
        >
          Kelola Produk
        </router-link>

        <router-link
          to="/admin/members"
          class="block py-2 px-4 rounded hover:bg-gray-700"
          :class="{ 'bg-gray-700': isActive('/admin/members') }"
        >
          Riwayat Transaksi
        </router-link>

        <router-link
          to="/admin/riwayat-members"
          class="block py-2 px-4 rounded hover:bg-gray-700"
          :class="{ 'bg-gray-700': isActive('/admin/riwayat-members') }"
        >
          Riwayat Members
        </router-link>
      </nav>
    </div>

    <!-- Bagian bawah: Profil & Setting -->
    <div class="p-4 border-t border-gray-700 flex items-center gap-3">
      <img
        src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Foto Profil"
        class="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p class="text-sm font-semibold">Bos</p>
        <router-link
          to="/admin/settings"
          class="text-xs text-gray-400 hover:underline"
        >
          Setting
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const isActive = (path) => route.path === path
</script>
