<template>
  <div class="container">
    <div class="header">
      <span class="title">Siswa Pertempuran</span>
      <div class="language-selector">
        <span>Pilihan Pembelajaran:</span>
        <select v-model="selectedLanguage" @change="updateLanguage">
          <option value="indonesia">Bahasa Indonesia</option>
        </select>
      </div>
    </div>
    <div class="content">
      <div class="center">
        <span class="language">{{ selectedLanguage === 'indonesia' ? 'Bahasa Indonesia' : 'Bahasa Tidak Tersedia' }}</span>
        <img src="https://i.pinimg.com/564x/9c/91/35/9c9135e11c784b5ed4e43af1a5cf1caf.jpg" alt="Bendera Indonesia" class="flag" />
        <div class="question-container">
          <img src="https://i.pinimg.com/originals/11/97/cd/1197cdd40b6487a1685f4dba4031ffe1.gif" alt="Karakter Bingung" class="character" />
          <span class="question">{{ question }}</span>
        </div>
        <button class="start-button" @click="startBattle">MULAI</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: 'indonesia',
      question: 'Apakah kamu sudah siap ?',
    };
  },
  methods: {
    startBattle() {
      // Navigasi ke halaman play-battle
      this.$router.push({ name: 'playBattle' }) // Ubah nama rute di sini
        .catch(err => {
          console.error('Kesalahan navigasi:', err);
        });
    },
    updateLanguage() {
      console.log('Bahasa berubah menjadi:', this.selectedLanguage);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff0b5;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #f09050;
  flex-grow: 1; /* Mengambil ruang yang tersedia */
}

.language-selector {
  display: flex;
  align-items: center;
  margin-left: 20px; /* Memberikan jarak antara judul dan pilih bahasa */
}

.language-selector span {
  margin-right: 10px;
}

.content {
  display: flex;
  flex: 1;
  justify-content: center; /* Memusatkan konten secara horizontal */
  align-items: center; /* Memusatkan konten secara vertikal */
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.question-container {
  display: flex; /* Menyusun gambar dan teks pada satu baris */
  align-items: center; /* Menjajarkan gambar dan teks pada garis yang sama */
}

.flag {
  width: 50px; /* Sesuaikan ukuran bendera */
  height: auto;
  margin-bottom: 10px;
}

.character {
  width: 50px; /* Ubah ukuran karakter GIF untuk menyamakan dengan bendera */
  height: auto; /* Menjaga rasio aspek */
  margin-right: 10px; /* Menambah jarak antara karakter dan teks */
}

.language {
  font-size: 18px;
  color: #333;
}

.question {
  font-size: 20px;
  margin: 20px 0;
  text-align: center;
  color: #343a40;
}

.start-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.start-button:hover {
  background-color: #0056b3;
}
</style>
