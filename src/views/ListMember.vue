<template>
  <div class="min-h-screen bg-[#121212] text-white p-6">
    <div class="max-w-6xl mx-auto bg-[#1E1E1E] shadow-lg rounded-xl p-6">

      <h2 class="text-3xl font-bold mb-6 text-yellow-400">List Member</h2>

      <input
        type="text"
        v-model="search"
        placeholder="Cari nama..."
        class="w-full mb-6 px-4 py-2 bg-[#2A2A2A] border border-gray-600 text-white rounded-md focus:ring-yellow-400"
      />

      <div class="overflow-x-auto rounded-lg">
        <table class="w-full text-left border-collapse">
          <thead class="bg-yellow-400 text-black">
            <tr>
              <th class="py-3 px-4 font-semibold text-sm uppercase">Nama</th>
              <th class="py-3 px-4 font-semibold text-sm uppercase">Tanggal Gabung</th>
              <th class="py-3 px-4 font-semibold text-sm uppercase">Kategori</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="member in filteredMembers"
              :key="member.id"
              class="border-t border-gray-700 hover:bg-[#2A2A2A] transition-colors"
            >
              <td class="py-3 px-4">{{ member.nama }}</td>
              <td class="py-3 px-4">{{ member.tanggalGabung }}</td>
              <td class="py-3 px-4">
                <span
                  :class="[
                    'inline-block px-3 py-1 text-sm rounded-full font-medium',
                    member.kategori === 'VIP' ? 'bg-green-500 text-black' :
                    member.kategori === 'Premium' ? 'bg-blue-500 text-white' :
                    'bg-gray-600 text-white'
                  ]"
                >
                  {{ member.kategori }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="filteredMembers.length === 0" class="text-center mt-6 text-gray-400">
        Tidak ada data ditemukan.
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const members = ref([])
const search = ref('')

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/members')
    members.value = response.data
  } catch (err) {
    console.error('Gagal memuat data member', err)
  }
})

const filteredMembers = computed(() => {
  return members.value.filter((m) =>
    m.nama.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>
