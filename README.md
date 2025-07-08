🏋️‍♂️ GYM MAX - Website Manajemen Gym
GYM MAX adalah aplikasi berbasis web yang dirancang untuk membantu manajemen pusat kebugaran (gym) dalam mengelola member, produk kebugaran, transaksi, dan laporan aktivitas. Proyek ini dikembangkan menggunakan Vue.js 3 dan berbagai teknologi modern untuk menciptakan pengalaman pengguna yang interaktif, ringan, dan efisien.

🚀 Fitur Utama
✅ Landing Page yang informatif dan modern

🛍️ Halaman Produk: menampilkan daftar produk (Whey, Creatine, dll.)

🛒 Keranjang Belanja: menambahkan/menghapus produk dengan total harga otomatis

👤 Manajemen Member: registrasi member berdasarkan kategori (Regular, VIP, Premium)

📋 List Member: pencarian dan tampilan data member

🧑‍💼 Admin Dashboard:

Manajemen Produk (CRUD)

Manajemen Member

Riwayat Transaksi

Laporan Bulanan

Halaman Pengaturan

💾 Data Persisten menggunakan LocalStorage

🔍 Fitur Pencarian & Filter

📊 Statistik dan Laporan (dalam pengembangan)

🛠️ Teknologi yang Digunakan
Teknologi	Keterangan
Vue.js 3	Framework utama frontend
Tailwind CSS	Utility-first CSS framework
Pinia	State management modern untuk Vue
JSON Server	Backend mock API untuk data produk/member/transaksi
Vitest	Framework testing untuk unit test komponen dan logic
Vue Router	Navigasi antar halaman
Vite	Build tool cepat untuk pengembangan Vue

📦 Instalasi
bash
Salin
Edit
# Clone project
git clone (https://github.com/olivertokio/ShandiReskiawan_uaspbk.git)
cd uas

# Install dependencies
npm install

# Jalankan JSON Server (Mock API)
npx json-server --watch db.json --port 3000

# Jalankan proyek Vue
npm run dev
🧪 Testing dengan Vitest
bash
Salin
Edit
# Jalankan unit test
npm run test
📁 Struktur Direktori (Singkat)
pgsql
Salin
Edit
gym-max/
│
├── public/
├── src/
│   ├── components/
│   ├── views/
│   ├── stores/           # Pinia store
│   ├── router/
│   └── assets/
│
├── db.json               # JSON Server mock data
├── vitest.config.ts
├── README.md
└── package.json
📌 Catatan
Proyek ini masih dalam tahap pengembangan. Fitur tambahan seperti autentikasi, integrasi payment gateway, dan statistik lanjutan akan ditambahkan.

JSON Server digunakan untuk keperluan simulasi API selama proses pengembangan.

📄 Lisensi
Proyek ini bersifat open-source dan bebas digunakan untuk keperluan pembelajaran. Untuk penggunaan komersial, silakan hubungi pengembang terlebih dahulu.
