import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Pastikan router diimpor

createApp(App)
  .use(router) // Pastikan router digunakan di aplikasi
  .mount('#app');
