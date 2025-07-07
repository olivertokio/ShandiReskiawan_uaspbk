<template>
  <div class="bg-black text-white min-h-screen px-6 md:px-16 py-12">
    <div class="grid md:grid-cols-2 gap-10 items-center">
      <!-- Deskripsi -->
      <div>
        <h2 class="text-3xl md:text-4xl font-semibold mb-4">Who we are</h2>
        <p class="text-gray-300 mb-6 leading-relaxed">
          At Gym Max, we believe that true strength comes from consistent effort and expert guidance. We’re more than just a gym — we’re your dedicated partner in health, offering state-of-the-art equipment, certified trainers, and personalized programs to help you achieve a stronger, healthier, and more vibrant lifestyle.
        </p>
        <button class="bg-orange-600 hover:bg-green-700 text-white px-5 py-2 rounded">
          View More
        </button>
      </div>

      <!-- Gambar dan Statistik -->
      <div class="relative">
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
          alt="Trainer"
          class="rounded-xl w-full h-96 object-cover"
        />
        <div class="absolute top-4 right-4 text-right space-y-2">
          <div>
            <p class="text-2xl font-bold text-white">121+</p>
            <p class="text-orange-400 text-sm">Members</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-white">20+</p>
            <p class="text-orange-400 text-sm">Trainers</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-white">12+</p>
            <p class="text-orange-400 text-sm">Awards</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Penghargaan -->
    <div class="mt-16 grid md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-lg font-semibold text-white mb-1">2024 Best Gym in Indonesia 🏆</h3>
        <p class="text-gray-400">
          Recognized for outstanding facilities and holistic fitness programs.
        </p>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-white mb-1">2023 Industry Leader Award 🏆</h3>
        <p class="text-gray-400">
          Awarded for pioneering excellence in fitness and member engagement.
        </p>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-white mb-1">2022 Most Supportive Community 🏆</h3>
        <p class="text-gray-400">
          Commended for building a vibrant, encouraging, and highly interactive fitness community.
        </p>
      </div>
    </div>

    <!-- Tombol Bawah -->
    <div class="mt-10 flex justify-end">
      <button class="border border-gray-400 hover:bg-white hover:text-black text-white px-5 py-2 rounded">
        View All Awards
      </button>
    </div>
  </div>
</template>
