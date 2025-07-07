<template>
  <div>
    <h2 class="text-xl font-bold text-white mb-4">Riwayat Transaksi</h2>

    <div class="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
      <input
        type="date"
        v-model="filterTanggal"
        class="p-2 rounded bg-gray-800 text-white"
      />
      <input
        type="text"
        v-model="cariNama"
        placeholder="Cari nama pembeli..."
        class="p-2 rounded bg-gray-800 text-white"
      />
      <button @click="loadTransaksi" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        🔄 Muat Ulang
      </button>
      <button @click="cetakPDF" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        🖨️ Cetak PDF
      </button>
    </div>

    <table class="w-full text-left border border-gray-600 text-white">
      <thead class="bg-gray-700 text-yellow-300">
        <tr>
          <th class="py-2 px-4">Nama Pembeli</th>
          <th class="py-2 px-4">Tanggal</th>
          <th class="py-2 px-4">Produk</th>
          <th class="py-2 px-4">Total Harga</th>
          <th class="py-2 px-4">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="transaksi in transaksiTersaring"
          :key="transaksi.id"
          class="border-t border-gray-700"
        >
          <td class="py-2 px-4">{{ transaksi.nama }}</td>
          <td class="py-2 px-4">{{ transaksi.tanggal }}</td>
          <td class="py-2 px-4">
            <ul>
              <li
                v-for="(item, index) in transaksi.produk"
                :key="index"
              >
                {{ item.nama }} ({{ item.jumlah }} x Rp{{ item.harga.toLocaleString('id-ID') }})
              </li>
            </ul>
          </td>
          <td class="py-2 px-4">
            Rp {{ hitungTotalHarga(transaksi.produk).toLocaleString('id-ID') }}
          </td>
          <td class="py-2 px-4">
            <button @click="hapus(transaksi.id)" class="text-red-400 hover:underline">Hapus</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="transaksiTersaring.length === 0" class="text-gray-500 mt-4">Tidak ada transaksi ditemukan.</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'

const transaksiList = ref([])
const filterTanggal = ref('')
const cariNama = ref('')

const loadTransaksi = async () => {
  try {
    const response = await axios.get('http://localhost:3000/transaksi')
    transaksiList.value = response.data
  } catch (err) {
    console.error('Gagal mengambil data transaksi:', err)
  }
}

const hapus = async (id) => {
  if (confirm('Yakin ingin menghapus transaksi ini?')) {
    try {
      await axios.delete(`http://localhost:3000/transaksi/${id}`)
      await loadTransaksi()
    } catch (err) {
      alert('Gagal menghapus transaksi.')
    }
  }
}

const hitungTotalHarga = (produkList) => {
  return produkList.reduce((total, item) => {
    return total + item.jumlah * item.harga
  }, 0)
}

const transaksiTersaring = computed(() => {
  return transaksiList.value.filter((t) => {
    const cocokNama = t.nama.toLowerCase().includes(cariNama.value.toLowerCase())
    const cocokTanggal = !filterTanggal.value || t.tanggal === filterTanggal.value
    return cocokNama && cocokTanggal
  })
})

const cetakPDF = () => {
  const doc = new jsPDF()
  doc.text("Riwayat Transaksi", 14, 10)

  const rows = transaksiTersaring.value.map((t) => [
    t.nama,
    t.tanggal,
    t.produk.map(p => `${p.nama} (${p.jumlah} x Rp${p.harga})`).join(', '),
    `Rp${hitungTotalHarga(t.produk).toLocaleString('id-ID')}`
  ])

  autoTable(doc, {
    head: [['Nama', 'Tanggal', 'Produk', 'Total']],
    body: rows,
    startY: 20
  })

  doc.save("riwayat-transaksi.pdf")
}

onMounted(() => {
  loadTransaksi()
})
</script>
