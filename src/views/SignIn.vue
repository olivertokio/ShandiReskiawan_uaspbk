<template>
  <div class="min-h-screen flex">
    <!-- Left Section: Form -->
    <div class="flex-1 bg-black text-white flex flex-col justify-center items-center p-8">
      <div class="max-w-md w-full space-y-8">
        <h2 class="text-3xl font-bold text-orange-500 text-center">Welcome Back</h2>
        <p class="text-gray-400 text-center">Sign in to continue to GymStore</p>

        <form @submit.prevent="handleSignIn" class="space-y-6">
          <div>
            <label class="block text-sm font-medium mb-1">Email</label>
            <input
              v-model="email"
              type="email"
              class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Password</label>
            <input
              v-model="password"
              type="password"
              class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <!-- Role selector -->
          <div>
            <label class="block text-sm font-medium mb-1">Login Sebagai</label>
            <select
              v-model="role"
              class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-400">Don't have an account?</span>
            <router-link to="/signup" class="text-orange-500 hover:underline font-medium">
              Sign Up
            </router-link>
          </div>

          <button
            type="submit"
            class="w-full bg-orange-600 hover:bg-white hover:text-black py-2 rounded font-semibold transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>

    <!-- Right Section: Image -->
    <div
      class="hidden md:block md:w-1/2 bg-cover bg-center relative"
      :style="{
        backgroundImage: 'url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0)'
      }"
    >
      <div class="absolute inset-0 bg-black opacity-60"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const role = ref('user') // default: user

const handleSignIn = async () => {
  const endpoint = role.value === 'admin'
    ? 'http://localhost:3000/admins'
    : 'http://localhost:3000/users'

  try {
    const res = await axios.get(`${endpoint}?email=${email.value}&password=${password.value}`)

    if (res.data.length > 0) {
      const user = res.data[0]
      localStorage.setItem(role.value, JSON.stringify(user))
      authStore.setUser(user)

      alert('Login berhasil!')

      // Redirect sesuai role
      if (role.value === 'admin') {
        router.push('/admin/dashboard')
      } else {
        router.push('/')
      }
    } else {
      alert('Email atau password salah!')
    }
  } catch (err) {
    console.error('Login error:', err)
    alert('Terjadi kesalahan saat login.')
  }
}
</script>
