import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import VideoPembelajaran from '../views/VideoPembelajaran.vue';
import Berlangganan from '../views/Berlangganan.vue';
import PembayaranPremium from '../views/PembayaranPremium.vue';
import BattleStudent from '../views/BattleStudent.vue';
import PlayBattle from '../views/PlayBattle.vue';
import Konsultasi from '../views/Konsultasi.vue';
import Modul from '../views/Modul.vue';
import Daftar from '../views/Daftar.vue';




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/video-pembelajaran',
    name: 'videoPembelajaran',
    component: VideoPembelajaran,
  },
  {
    path: '/berlangganan',
    name: 'berlangganan',
    component: Berlangganan,
  },
  {
    path: '/pembayaran-premium',
    name: 'pembayaranPremium',
    component: PembayaranPremium,
  },
  {
    path: '/battle-student',
    name: 'battleStudent',
    component: BattleStudent,
  },
  {
    path: '/play-battle',
    name: 'playBattle',
    component: PlayBattle,
  },
  {
    path: '/konsultasi',
    name: 'konsultasi',
    component: Konsultasi,
  },
  {
    path: '/modul',
    name: 'modul',
    component: Modul,
  },
  {
    path: '/daftar',
    name: 'daftar',
    component: Daftar,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
