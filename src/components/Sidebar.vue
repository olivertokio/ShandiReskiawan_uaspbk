<template>
  <aside class="w-64 bg-white shadow-md h-screen p-4 fixed">
    <div class="mb-8">
      <h1 class="text-xl font-bold">Admin Panel</h1>
    </div>
    <nav>
      <ul class="space-y-4">
        <li><RouterLink to="/" class="block hover:text-blue-500">Dashboard</RouterLink></li>
        <li><RouterLink to="/member" class="block hover:text-blue-500">Masa Habis Member</RouterLink></li>
        <li><RouterLink to="/produk" class="block hover:text-blue-500">Produk</RouterLink></li>
        <li><RouterLink to="/settings" class="block hover:text-blue-500">Settings</RouterLink></li>
        <li><RouterLink to="/profile" class="block hover:text-blue-500">Profil</RouterLink></li>
      </ul>
    </nav>
  </aside>
</template>
