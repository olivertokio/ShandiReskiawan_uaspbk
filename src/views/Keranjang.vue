<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">Keranjang</h1>

    <div v-if="items.length === 0" class="text-gray-500 italic">
      Keranjang masih kosong.
    </div>

    <div
      v-for="item in items"
      :key="item.id"
      class="bg-white p-4 rounded-lg shadow mb-4 flex gap-4 items-center"
    >
      <img :src="item.gambar" class="w-24 h-24 object-cover" />
      <div class="flex-1">
        <h2 class="font-bold">{{ item.nama }}</h2>
        <p class="text-sm text-gray-500">{{ item.kategori }}</p>
        <p class="font-semibold mt-1">${{ item.harga.toFixed(2) }}</p>
      </div>

      <div class="flex items-center gap-2">
        <button @click="kurang(item.id)">-</button>
        <span>{{ item.jumlah }}</span>
        <button @click="tambah(item.id)">+</button>
      </div>

      <button @click="hapus(item.id)" class="text-red-500 text-xl ml-4">🗑️</button>
    </div>

    <!-- Input Nama Pembeli -->
    <div v-if="items.length > 0" class="mb-4">
      <label class="block text-gray-900 mb-2">Nama Pembeli</label>
      <input
        v-model="namaUser"
        type="text"
        placeholder="Masukkan nama kamu"
        class="w-full p-2 border rounded bg-white text-black"
      />
    </div>

    <div class="mt-6 bg-gray-100 p-6 rounded-lg w-full max-w-md">
      <h2 class="text-xl font-bold mb-4">Ringkasan Pesanan</h2>
      <div class="flex justify-between">
        <span>Subtotal</span>
        <span>${{ subtotal.toFixed(2) }}</span>
      </div>
      <div class="flex justify-between">
        <span>Ongkir</span>
        <span>${{ deliveryFee.toFixed(2) }}</span>
      </div>
      <div class="flex justify-between font-bold text-lg mt-4 border-t pt-2">
        <span>Total</span>
        <span>${{ total.toFixed(2) }}</span>
      </div>
      <button
        @click="checkout"
        class="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script>
import { useKeranjangStore } from '@/stores/cart.js';
import { storeToRefs } from 'pinia';
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const keranjang = useKeranjangStore();
    const { items, deliveryFee } = storeToRefs(keranjang);
    const namaUser = ref('');

    onMounted(() => {
      keranjang.fetchKeranjang();
    });

    const checkout = async () => {
      if (items.value.length === 0) {
        alert("Keranjang masih kosong!");
        return;
      }

      if (!namaUser.value.trim()) {
        alert("Mohon masukkan nama pembeli terlebih dahulu.");
        return;
      }

      const konfirmasi = confirm("Apakah kamu yakin ingin checkout?");
      if (!konfirmasi) return;

      try {
        // Siapkan data transaksi
        const transaksiBaru = {
          nama: namaUser.value,
          tanggal: new Date().toISOString().slice(0, 10),
          produk: items.value.map(item => ({
            nama: item.nama,
            jumlah: item.jumlah,
            harga: item.harga
          }))
        };

        // Kirim ke db.json (endpoint transaksi)
        await axios.post('http://localhost:3000/transaksi', transaksiBaru);

        // Kosongkan keranjang
        await keranjang.clearCart();
        await keranjang.fetchKeranjang();
        namaUser.value = ''; // reset nama
        alert("Checkout berhasil! Transaksi telah tercatat.");
      } catch (error) {
        console.error("Gagal saat checkout:", error);
        alert("Terjadi kesalahan saat menyimpan transaksi.");
      }
    };

    return {
      items,
      deliveryFee,
      subtotal: computed(() => keranjang.subtotal),
      total: computed(() => keranjang.total),
      tambah: keranjang.tambahJumlah,
      kurang: keranjang.kurangJumlah,
      hapus: keranjang.hapusProduk,
      checkout,
      namaUser // expose ke template
    };
  }
};
</script>
