<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <form @submit.prevent="login" class="bg-gray-800 p-6 rounded shadow-md w-80">
      <h2 class="text-xl font-bold mb-4 text-yellow-400 text-center">Login Admin</h2>

      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="mb-3 w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        autofocus
        required
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="mb-4 w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        required
      />

      <p v-if="errorMsg" class="text-red-400 text-sm mb-3 text-center">
        {{ errorMsg }}
      </p>

      <button
        class="bg-yellow-400 hover:bg-yellow-500 text-black w-full py-2 rounded font-semibold transition duration-300"
        type="submit"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const errorMsg = ref('')
const router = useRouter()

const login = () => {
  if (username.value === 'adminbos' && password.value === 'admin123') {
    localStorage.setItem('admin', 'true')
    router.push('/admin/dashboard')
  } else {
    errorMsg.value = 'Username atau Password salah!'
  }
}
</script>
