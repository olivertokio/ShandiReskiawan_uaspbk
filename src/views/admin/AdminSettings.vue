<template>
  <div class="max-w-md mx-auto p-6 text-white">
    <h2 class="text-xl font-bold mb-4">Ubah Password</h2>

    <div class="mb-4">
      <label>Nama</label>
      <input v-model="admin.nama" class="w-full px-3 py-2 rounded text-black" disabled />
    </div>

    <div class="mb-4">
      <label>Email</label>
      <input v-model="admin.email" class="w-full px-3 py-2 rounded text-black" disabled />
    </div>

    <div class="mb-4">
      <label>Password Baru</label>
      <input v-model="passwordBaru" type="password" class="w-full px-3 py-2 rounded text-black" />
    </div>

    <button @click="simpanPerubahan" class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
      Simpan
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const admin = ref({})
const passwordBaru = ref('')

// Ganti ini ke port yang sesuai kalau kamu pakai selain 3000
const BASE_URL = 'http://localhost:3000/admin/1'

onMounted(async () => {
  const res = await axios.get(BASE_URL)
  admin.value = res.data
})

const simpanPerubahan = async () => {
  if (!passwordBaru.value) {
    alert('Password tidak boleh kosong!')
    return
  }

  try {
    admin.value.password = passwordBaru.value
    await axios.put(BASE_URL, admin.value)
    alert('Password berhasil diubah!')
    passwordBaru.value = ''
  } catch (err) {
    console.error(err)
    alert('Gagal menyimpan perubahan!')
  }
}
</script>
