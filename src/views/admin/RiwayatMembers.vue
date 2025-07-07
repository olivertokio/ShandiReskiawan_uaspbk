<!-- src/views/admin/RiwayatMembers.vue -->
<template>
  <div>
    <h2 class="text-2xl font-bold text-white mb-6">Riwayat Member Bulanan</h2>

    <div v-for="(group, key) in groupedMembers" :key="key" class="mb-8">
      <h3 class="text-xl font-semibold text-yellow-400 mb-2">{{ key }}</h3>
      <div class="bg-gray-800 rounded-lg p-4 shadow">
        <table class="w-full text-left border border-gray-600 text-white">
          <thead class="bg-gray-700">
            <tr>
              <th class="py-2 px-4">Nama</th>
              <th class="py-2 px-4">Tanggal Gabung</th>
              <th class="py-2 px-4">Kategori</th>
              <th class="py-2 px-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in group" :key="member.id" class="border-t border-gray-600">
              <td class="py-2 px-4">{{ member.nama }}</td>
              <td class="py-2 px-4">{{ member.tanggalGabung }}</td>
              <td class="py-2 px-4">{{ member.kategori }}</td>
              <td class="py-2 px-4 space-x-2">
                <button @click="edit(member)" class="text-blue-400 hover:underline">Edit</button>
                <button @click="hapus(member.id)" class="text-red-400 hover:underline">Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const members = ref([])

const loadMembers = async () => {
  try {
    const res = await axios.get('http://localhost:3000/members')
    members.value = res.data
  } catch (error) {
    console.error('Gagal mengambil data member:', error)
  }
}

const groupedMembers = computed(() => {
  const groups = {}
  members.value.forEach((m) => {
    const [year, month] = m.tanggalGabung.split('-')
    const key = `${month}-${year}`
    if (!groups[key]) {
      groups[key] = []
    }
    groups[key].push(m)
  })
  return groups
})

const hapus = async (id) => {
  if (confirm('Yakin ingin menghapus member ini?')) {
    try {
      await axios.delete(`http://localhost:3000/members/${id}`)
      await loadMembers()
    } catch {
      alert('Gagal menghapus data.')
    }
  }
}

const edit = (member) => {
  alert(`Fitur edit untuk "${member.nama}" belum diimplementasikan.`)
  // Nanti bisa arahkan ke halaman edit, atau tampilkan modal edit
}

onMounted(() => {
  loadMembers()
})
</script>
