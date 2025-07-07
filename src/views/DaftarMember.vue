<template>
  <div class="min-h-screen flex items-center bg-[#121212] text-white">
    <div class="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl mx-auto bg-[#1E1E1E] shadow-xl rounded-xl overflow-hidden">

      <!-- Form Pendaftaran -->
      <div class="p-10">
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-yellow-400">Daftar Member</h2>
          <p class="text-gray-400 mt-2">Isi formulir berikut untuk menjadi bagian dari gym kami.</p>
        </div>

        <form @submit.prevent="submitMember" class="space-y-5">
          <div>
            <label class="block mb-1 text-gray-300 font-medium">Nama</label>
            <input
              v-model="nama"
              type="text"
              class="w-full px-4 py-2 border border-gray-600 bg-[#2A2A2A] text-white rounded-md focus:ring-yellow-400"
              required
            />
          </div>
          <div>
            <label class="block mb-1 text-gray-300 font-medium">Kategori</label>
            <select
              v-model="kategori"
              class="w-full px-4 py-2 border border-gray-600 bg-[#2A2A2A] text-white rounded-md focus:ring-yellow-400"
              required
            >
              <option disabled value="">Pilih Kategori</option>
              <option>Regular</option>
              <option>VIP</option>
              <option>Premium</option>
            </select>
          </div>
          <div class="flex items-start space-x-2 text-sm text-gray-400">
            <input id="terms" type="checkbox" class="mt-1 accent-yellow-400" required />
            <label for="terms">
              Saya telah membaca dan menyetujui <span class="underline text-white">syarat & ketentuan</span>.
            </label>
          </div>
          <button
            type="submit"
            class="w-full py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md transition"
          >
            Daftarkan
          </button>
        </form>
      </div>

      <!-- Gambar Kanan -->
      <div class="hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gym"
          class="w-full h-full object-cover grayscale"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const nama = ref('')
const kategori = ref('')
const router = useRouter()

const submitMember = async () => {
  const tanggalGabung = new Date().toISOString().split('T')[0]
  const newMember = { nama: nama.value, kategori: kategori.value, tanggalGabung }

  try {
    await axios.post('http://localhost:3000/members', newMember)
    alert('Pendaftaran berhasil!')
    router.push('/list-member')
  } catch (err) {
    alert('Gagal mendaftarkan member.')
    console.error(err)
  }
}
</script>
