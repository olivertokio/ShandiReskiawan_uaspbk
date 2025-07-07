<template>
  <section class="p-8 min-h-screen bg-gray-100 text-black">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-6">Kelola Produk</h1>

      <!-- Tombol Tambah -->
      <button
        @click="bukaForm()"
        class="mb-6 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        + Tambah Produk
      </button>

      <!-- Daftar Produk -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="item in produk"
          :key="item.id"
          class="bg-white p-4 rounded shadow relative"
        >
          <img :src="item.gambar" alt="gambar" class="w-full h-40 object-cover rounded mb-3" />
          <h2 class="text-lg font-bold">{{ item.nama }}</h2>
          <p class="text-sm text-gray-600">Kategori: {{ item.kategori }}</p>
          <p class="text-sm">Harga: Rp{{ item.harga.toLocaleString() }}</p>
          <p class="text-sm">Stok: {{ item.stok }}</p>

          <div class="mt-3 flex gap-2">
            <button @click="bukaForm(item)" class="bg-yellow-500 text-white px-3 py-1 rounded">
              Edit
            </button>
            <button @click="hapusProduk(item.id)" class="bg-red-600 text-white px-3 py-1 rounded">
              Hapus
            </button>
          </div>
        </div>
      </div>

      <!-- Form Tambah/Edit -->
      <div v-if="formTerbuka" class="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
        <div class="bg-white p-6 rounded shadow w-full max-w-md">
          <h2 class="text-xl font-bold mb-4">
            {{ formData.id ? 'Edit Produk' : 'Tambah Produk' }}
          </h2>

          <label class="block mb-2">Nama</label>
          <input v-model="formData.nama" type="text" class="w-full p-2 border rounded mb-4" />

          <label class="block mb-2">Kategori</label>
          <input v-model="formData.kategori" type="text" class="w-full p-2 border rounded mb-4" />

          <label class="block mb-2">Harga</label>
          <input v-model.number="formData.harga" type="number" class="w-full p-2 border rounded mb-4" />

          <label class="block mb-2">Stok</label>
          <input v-model.number="formData.stok" type="number" class="w-full p-2 border rounded mb-4" />

          <label class="block mb-2">Gambar (URL)</label>
          <input v-model="formData.gambar" type="text" class="w-full p-2 border rounded mb-4" />

          <div class="flex justify-between mt-4">
            <button @click="simpanProduk" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Simpan
            </button>
            <button @click="formTerbuka = false" class="text-gray-600 hover:underline">Batal</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  name: 'AdminProduk',
  setup() {
    const produk = ref([])
    const formTerbuka = ref(false)
    const formData = ref({
      id: null,
      nama: '',
      kategori: '',
      harga: 0,
      stok: 0,
      gambar: ''
    })

    // Ambil data produk dari db.json
    const loadProduk = async () => {
      try {
        const res = await axios.get('http://localhost:3000/produk')
        produk.value = res.data
      } catch (err) {
        console.error('❌ Gagal memuat produk:', err)
      }
    }

    // Buka form: untuk tambah (null) atau edit (dengan item)
    const bukaForm = (item = null) => {
      if (item) {
        formData.value = {
          id: Number(item.id), // pastikan ID-nya angka
          nama: item.nama,
          kategori: item.kategori,
          harga: item.harga,
          stok: item.stok,
          gambar: item.gambar
        }
      } else {
        formData.value = {
          id: null,
          nama: '',
          kategori: '',
          harga: 0,
          stok: 0,
          gambar: ''
        }
      }
      formTerbuka.value = true
    }

    // Tambah atau Update produk
    const simpanProduk = async () => {
      try {
        if (formData.value.id !== null) {
          // Mode Edit
          const id = Number(formData.value.id)
          await axios.put(`http://localhost:3000/produk/${id}`, { ...formData.value, id })
        } else {
          // Mode Tambah → biarkan json-server membuat ID
          const dataBaru = { ...formData.value }
          delete dataBaru.id
          await axios.post('http://localhost:3000/produk', dataBaru)
        }

        formTerbuka.value = false
        await loadProduk()
      } catch (err) {
        console.error('❌ Gagal menyimpan produk:', err)
        alert('Gagal menyimpan produk.')
      }
    }

    // Hapus produk
    const hapusProduk = async (id) => {
      if (confirm('Yakin ingin menghapus produk ini?')) {
        try {
          await axios.delete(`http://localhost:3000/produk/${id}`)
          await loadProduk()
        } catch (err) {
          console.error('❌ Gagal menghapus produk:', err)
          alert('Gagal menghapus produk.')
        }
      }
    }

    onMounted(() => {
      loadProduk()
    })

    return {
      produk,
      formTerbuka,
      formData,
      bukaForm,
      simpanProduk,
      hapusProduk
    }
  }
}
</script>

