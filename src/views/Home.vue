<template>
  <section class="min-h-screen bg-white text-black font-poppins">
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
      <!-- Text Section -->
      <div>
        <h4 class="text-sm text-gray-500 uppercase tracking-widest">THE BEST FITNESS CLUB IN THE TOWN</h4>
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mt-4">
          IMPROVE YOUR <br />
          <span class="text-orange-500">FITNESS LEVEL</span><br />
          FOR THE BETTER
        </h1>

        <p class="text-gray-600 mt-6">
          Gym session or brisk walk can help. Physical activity stimulates many chemicals 
          that may leave you feeling happier and more relaxed.
        </p>

        <div class="flex gap-4 mt-8">
          <button class="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
            BE A MEMBER
          </button>
          <button class="border-2 border-orange-500 text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-orange-100 transition">
            LEARN MORE
          </button>
        </div>
      </div>

      <!-- Image Section -->
      <div class="grid grid-cols-2 gap-4">
        <img
          src="https://images.unsplash.com/photo-1604233098531-90b71b1b17a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Squat Training"
          class="rounded-xl shadow-lg object-cover w-full h-60"
        />
        <img
          src="https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3ltJTIwRXF1aXBtZW50fGVufDB8fDB8fHww"
          alt="Gym Equipment"
          class="rounded-xl shadow-lg object-cover w-full h-60"
        />
      </div>
    </div>

    <!-- Stats Section -->
    <div class="bg-black text-white py-10 mt-10">
      <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h2 class="text-3xl font-bold">121+</h2>
          <p class="text-sm text-gray-300 mt-2">Happy Members</p>
        </div>
        <div>
          <h2 class="text-3xl font-bold">30+</h2>
          <p class="text-sm text-gray-300 mt-2">Weekly Classes</p>
        </div>
        <div>
          <h2 class="text-3xl font-bold">20+</h2>
          <p class="text-sm text-gray-300 mt-2">Certified Trainers</p>
        </div>
        <div>
          <h2 class="text-3xl font-bold">99%</h2>
          <p class="text-sm text-gray-300 mt-2">Customer Satisfaction</p>
        </div>
      </div>
    </div>

    <!-- Pricing Section -->
    <div class="bg-[#1E1E1E] text-white py-14">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-yellow-400 mb-10">Membership Pricing</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="border border-yellow-400 rounded-lg p-6 text-center">
            <h3 class="text-xl font-semibold mb-2">VIP</h3>
            <p class="text-3xl font-bold text-yellow-400 mb-2">$32.00</p>
            <p class="text-gray-400">Rp 500.000 / bulan</p>
          </div>
          <div class="border border-yellow-400 rounded-lg p-6 text-center">
            <h3 class="text-xl font-semibold mb-2">Premium</h3>
            <p class="text-3xl font-bold text-yellow-400 mb-2">$19.00</p>
            <p class="text-gray-400">Rp 300.000 / bulan</p>
          </div>
          <div class="border border-yellow-400 rounded-lg p-6 text-center">
            <h3 class="text-xl font-semibold mb-2">Regular</h3>
            <p class="text-3xl font-bold text-yellow-400 mb-2">$10.00</p>
            <p class="text-gray-400">Rp 150.000 / bulan</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section with Icons -->
    <div class="bg-black py-10">
      <div class="max-w-6xl mx-auto text-center text-white">
        <h2 class="text-2xl font-bold text-yellow-400 mb-6">Hubungi Kami</h2>
        <div class="flex justify-center gap-8 text-2xl">
          <!-- Instagram -->
          <a href="https://www.instagram.com/shannn.exee?igsh=MWpzaGxyMmVmbW1xdQ%3D%3D&utm_source=qr" target="_blank" class="hover:text-yellow-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-7 h-7" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.88-.75a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25z"/>
            </svg>
          </a>

          <!-- WhatsApp -->
          <a href="https://wa.me/6282284246539" target="_blank" class="hover:text-yellow-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-7 h-7" viewBox="0 0 24 24">
              <path d="M20.52 3.48a11.89 11.89 0 0 0-16.86 0 11.9 11.9 0 0 0-2.62 12.68L.33 21.67l5.61-1.47a11.9 11.9 0 0 0 14.58-16.72zm-8.33 15.8a9.52 9.52 0 0 1-4.83-1.3l-.35-.21-3.33.88.89-3.24-.23-.34a9.5 9.5 0 0 1 14.57-11.2 9.5 9.5 0 0 1-7.72 15.41zm5.16-6.66c-.28-.14-1.67-.82-1.93-.91s-.45-.14-.63.14-.72.91-.89 1.1-.33.21-.6.07a7.88 7.88 0 0 1-2.3-1.42 8.65 8.65 0 0 1-1.6-2 0.68 0.68 0 0 1 .15-.95c.14-.15.28-.35.42-.53s.18-.28.28-.47a0.53 0.53 0 0 0 0-.49c-.07-.14-.63-1.51-.86-2.07s-.46-.49-.63-.5a0.6 0.6 0 0 0-.56 0.07A2.35 2.35 0 0 0 5 8.84a4.1 4.1 0 0 0 1.4 4.4c.2.28 2.17 3.3 5.26 4.64a18.17 18.17 0 0 0 1.9.7c.8.25 1.53.22 2.1.13a4.15 4.15 0 0 0 2.72-1.88 3.42 3.42 0 0 0 .24-1.88c-.11-.1-.26-.17-.54-.3z"/>
            </svg>
          </a>

          <!-- Gmail -->
          <a href="https://sandipku010808@gmail.com" class="hover:text-yellow-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-7 h-7" viewBox="0 0 24 24">
              <path d="M12 13.065L0 6.44V19a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V6.44l-12 6.625zm11.59-9.15L12 10.935 0.41 3.915A1 1 0 0 1 1 3h22a1 1 0 0 1 .59.915z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <!-- Contact Section with Icons -->
<!-- ... (kode ikon IG, WA, Gmail tadi) ... -->

<!-- Copyright -->
<div class="bg-[#111] text-center py-4 text-gray-400 text-sm">
  &copy; 2025 <span class="text-white font-semibold">Shandi Reskiawan</span>. All rights reserved.
</div>

  </section>
</template>

<script setup>
// Tidak ada logic khusus di halaman Home
</script>

<style scoped>
/* Font Poppins sudah digunakan dari Tailwind config */
</style>
