<!-- src/views/admin/layout/AdminLayout.vue -->
<template>
  <div class="flex min-h-screen bg-gray-900 text-white">
    <Sidebar />
    <div class="flex-1 p-6">
      <AdminHeader />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue'
import AdminHeader from './AdminHeader.vue'
</script>
