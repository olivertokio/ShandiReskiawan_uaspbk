<template>
  <header class="ml-64 bg-white shadow px-6 py-4 flex items-center justify-between">
    <h1 class="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
    <div class="flex items-center space-x-4">
      <!-- Icon Settings -->
      <RouterLink to="/settings" class="text-gray-600 hover:text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0a1.724 1.724 0 002.592.936c.8-.8 2.097-.237 2.097.936a1.724 1.724 0 002.592.936c.3-.921 1.603-.921 1.902 0a1.724 1.724 0 002.592.936c.8-.8 2.097-.237 2.097.936a1.724 1.724 0 002.592.936c.3-.921 1.603-.921 1.902 0" />
        </svg>
      </RouterLink>

      <!-- Icon Profile -->
      <RouterLink to="/profile" class="text-gray-600 hover:text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M5.121 17.804A7.5 7.5 0 0112 15a7.5 7.5 0 016.879 2.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </RouterLink>
    </div>
  </header>
</template>
