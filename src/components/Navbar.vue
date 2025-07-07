<template>
  <header class="bg-black text-white shadow-md sticky top-0 z-50 transition-all duration-300 ease-in-out">
    <nav class="container mx-auto flex justify-between items-center p-4">
      <!-- Logo -->
      <router-link
        to="/"
        class="text-2xl font-bold text-orange-500 hover:scale-105 transition-transform duration-200"
      >
        GymStore
      </router-link>

      <!-- Desktop Menu -->
    <ul class="hidden md:flex gap-6 font-medium items-center">
      <li>
        <router-link to="/" class="hover:text-yellow-400 transition-colors duration-200">Home</router-link>
      </li>
      <li v-if="auth.isLoggedIn">
        <router-link to="/about" class="hover:text-yellow-400 transition-colors duration-200">About</router-link>
      </li>
      <li v-if="auth.isLoggedIn">
        <router-link to="/produk" class="hover:text-yellow-400 transition-colors duration-200">Produk</router-link>
      </li>
      <li v-if="auth.isLoggedIn">
        <router-link to="/keranjang" class="hover:text-yellow-400 transition-colors duration-200 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.293 4.293a1 1 0 00.293.707L7 19h10l1-1M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
          </svg>
          Keranjang
        </router-link>
      </li>

      <!-- ⬇️ Dropdown Member -->
      <li v-if="auth.isLoggedIn" class="relative">
        <button @click="toggleMemberDropdown" class="hover:text-yellow-400 flex items-center gap-1 focus:outline-none">
          Member
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Dropdown -->
        <ul
          v-show="memberDropdownOpen"
          class="absolute bg-black shadow-md mt-2 w-40 rounded-md"
        >
          <li>
            <router-link @click="closeDropdown" to="/daftar-member" class="block px-4 py-2 hover:bg-yellow-400 hover:text-black">Daftar Member</router-link>
          </li>
          <li>
            <router-link @click="closeDropdown" to="/list-member" class="block px-4 py-2 hover:bg-yellow-400 hover:text-black">List Member</router-link>
          </li>
        </ul>
      </li>


      <!-- Sign In / Sign Up -->
      <li v-if="!auth.isLoggedIn">
        <router-link to="/signin" class="px-3 py-1 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">Sign In</router-link>
      </li>
      <li v-if="!auth.isLoggedIn">
        <router-link to="/signup" class="px-3 py-1 bg-orange-600 text-white rounded-full hover:bg-white hover:text-black transition duration-300">Sign Up</router-link>
      </li>

  <!-- Logout -->
  <li v-if="auth.isLoggedIn">
    <button @click="logout" class="px-3 py-1 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">Logout</button>
  </li>
</ul>


      <!-- Mobile Menu Toggle -->
      <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div v-if="menuOpen" class="md:hidden bg-black px-6 pb-4 animate-fade-in">
        <ul class="space-y-4 font-medium">
          <li><router-link to="/" @click="toggleMenu" class="block hover:text-yellow-400">Home</router-link></li>
          <li v-if="auth.isLoggedIn"><router-link to="/about" @click="toggleMenu" class="block hover:text-yellow-400">About</router-link></li>
          <li v-if="auth.isLoggedIn"><router-link to="/produk" @click="toggleMenu" class="block hover:text-yellow-400">Produk</router-link></li>
          <li v-if="auth.isLoggedIn"><router-link to="/keranjang" @click="toggleMenu" class="block hover:text-yellow-400">Keranjang</router-link></li>
          <li v-if="!auth.isLoggedIn"><router-link to="/signin" @click="toggleMenu" class="block hover:text-yellow-400">Sign In</router-link></li>
          <li v-if="!auth.isLoggedIn"><router-link to="/signup" @click="toggleMenu" class="block hover:text-yellow-400">Sign Up</router-link></li>
          <li v-if="auth.isLoggedIn"><button @click="logout" class="block w-full text-left text-red-400 hover:text-white">Logout</button></li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const menuOpen = ref(false)
const router = useRouter()
const auth = useAuthStore()
const memberDropdownOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const toggleMemberDropdown = () => {
  memberDropdownOpen.value = !memberDropdownOpen.value
}

const closeDropdown = () => {
  memberDropdownOpen.value = false
}

const logout = () => {
  auth.logout()
  router.push('/signin')
}
</script>


<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>