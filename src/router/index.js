import { createRouter, createWebHistory } from "vue-router";

// User Pages
import Home from "../views/Home.vue";
import Produk from "../views/Produk.vue";
import Keranjang from "../views/Keranjang.vue";
import About from "../views/About.vue";
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import DaftarMember from '@/views/DaftarMember.vue'
import ListMember from '@/views/ListMember.vue'

// Admin Pages
import LoginAdmin from '@/views/LoginAdmin.vue'
import AdminLayout from '@/views/admin/layout/AdminLayout.vue'
import Dashboard from '@/views/admin/Dashboard.vue'
import ManageMembers from '@/views/admin/RiwayatTransaksi.vue'
import AdminProduk from '@/views/admin/AdminProduk.vue'
import RiwayatMembers from '@/views/admin/RiwayatMembers.vue'
import AdminSettings from '@/views/admin/AdminSettings.vue'
import RiwayatTrans from '@/views/admin/RiwayatTrans.vue'


const routes = [
  // ================= User Routes =================
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/produk", name: "Produk", component: Produk },
  { path: "/keranjang", name: "Keranjang", component: Keranjang },
  { path: '/signin', name: 'SignIn', component: SignIn },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/daftar-member', name: 'DaftarMember', component: DaftarMember },
  { path: '/list-member', name: 'ListMember', component: ListMember },

  // ================= Admin Routes =================
  { path: '/admin/login', name: 'AdminLogin', component: LoginAdmin },
  { path: '/admin/produk', name: 'AdminProduk', component: AdminProduk }, // <-- route admin

  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: 'dashboard', name: 'AdminDashboard', component: Dashboard },
      { path: 'members', component: ManageMembers },
      { path: 'transaksi', name: 'AdminTransaksi', component: () => import('@/views/admin/AdminTransaksi.vue') },
      { path: 'riwayat-members', component: RiwayatMembers },
      { path: 'settings', component: AdminSettings },
      { path: 'riwayat', name: 'RiwayatTransaksi', component: RiwayatTrans } ,
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ================= Route Guard (Auth Check for Admin) =================
router.beforeEach((to, from, next) => {
  const isAdminLoggedIn = localStorage.getItem('admin') === 'true'

  if (to.meta.requiresAuth && !isAdminLoggedIn) {
    next('/admin/login')
  } else {
    next()
  }
})

export default router;
