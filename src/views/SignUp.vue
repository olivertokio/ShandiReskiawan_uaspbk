<template>
  <div class="min-h-screen flex">
    <!-- Left Side: Image -->
    <div
      class="hidden lg:flex lg:w-1/2 bg-cover bg-center relative"
      :style="{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0)'
      }"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
    </div>

    <!-- Right Side: Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 py-12">
      <div class="max-w-md w-full space-y-6">
        <div class="text-center">
          <h1 class="text-3xl font-bold text-gray-800">Create your account</h1>
          <p class="text-gray-500">Start your fitness journey with GymStore</p>
        </div>

        <form @submit.prevent="signUp" class="space-y-5">
          <div>
            <label class="block text-sm text-gray-700 mb-1">Full Name</label>
            <input v-model="form.name" type="text" placeholder="Your name"
              class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-1">Email</label>
            <input v-model="form.email" type="email" placeholder="you@gmail.com"
              class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          </div>

          <div>
            <label class="block text-sm text-gray-700 mb-1">Password</label>
            <input v-model="form.password" type="password" placeholder="••••••••"
              class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          </div>

          <button type="submit"
            class="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition">
            Sign Up
          </button>

          <p class="text-center text-sm text-gray-500">
            Already have an account?
            <router-link to="/signin" class="text-yellow-500 hover:underline">Sign In</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({
  name: '',
  email: '',
  password: ''
})

const signUp = async () => {
  try {
    // Cek apakah email sudah terdaftar
    const res = await axios.get(`http://localhost:3000/users?email=${form.value.email}`)
    if (res.data.length > 0) {
      alert('Email sudah digunakan!')
      return
    }

    // Simpan user baru ke backend
    await axios.post('http://localhost:3000/users', form.value)
    alert('Akun berhasil dibuat!')
    router.push('/signin')
  } catch (err) {
    console.error('Gagal daftar:', err)
    alert('Terjadi kesalahan saat registrasi.')
  }
}
</script>
