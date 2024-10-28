<template>
  <div class="container">
    <header class="header">
      <h1 class="header-title">Battle Student</h1>
    </header>

    <div class="content">
      <div class="image-container">
        <img 
          src="https://i.pinimg.com/564x/31/74/9d/31749d2312e4afddce2c1c99bb52043a.jpg" 
          alt="Student Battle"
        />
      </div>

      <div class="user-info">
        <div class="user-info-item">
          <p class="user-id">User 111</p>
        </div>
        <div class="user-info-item">
          <p class="user-id">User 333</p>
        </div>
      </div>

      <div class="question-container">
        <h2 class="question-title">Soal 1</h2>
        <p class="question-text white-text">
          Identifikasi Unsur Pembentuk Kalimat Bacalah kalimat berikut: 
          "Anita pergi ke pasar untuk membeli sayur." 
          Unsur pembentuk kalimat yang mana yang menjadi keterangan tujuan?
        </p>
        <ul class="options">
          <li 
            class="option" 
            @click="isAnswered ? null : selectOption('a')" 
            :class="{ 'selected': selectedOption === 'a' }"
          >
            a) Anita 
            <span v-if="selectedOption === 'a' && !isCorrect('a')" class="checkmark wrong">❌</span>
            <span v-if="selectedOption === 'a' && isCorrect('a')" class="checkmark correct">✔️</span>
          </li>
          <li 
            class="option" 
            @click="isAnswered ? null : selectOption('b')" 
            :class="{ 'selected': selectedOption === 'b' }"
          >
            b) pergi 
            <span v-if="selectedOption === 'b' && !isCorrect('b')" class="checkmark wrong">❌</span>
            <span v-if="selectedOption === 'b' && isCorrect('b')" class="checkmark correct">✔️</span>
          </li>
          <li 
            class="option" 
            @click="isAnswered ? null : selectOption('c')" 
            :class="{ 'selected': selectedOption === 'c' }"
          >
            c) ke pasar 
            <span v-if="selectedOption === 'c' && !isCorrect('c')" class="checkmark wrong">❌</span>
            <span v-if="selectedOption === 'c' && isCorrect('c')" class="checkmark correct">✔️</span>
          </li>
          <li 
            class="option" 
            @click="isAnswered ? null : selectOption('d')" 
            :class="{ 'selected': selectedOption === 'd' }"
          >
            d) untuk membeli sayur 
            <span v-if="selectedOption === 'd' && !isCorrect('d')" class="checkmark wrong">❌</span>
            <span v-if="selectedOption === 'd' && isCorrect('d')" class="checkmark correct">✔️</span>
          </li>
        </ul>
      </div>

      <div class="navigation">
        <button class="navigation-button" @click="nextQuestion" :disabled="!isAnswered">Selanjutnya</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BattleStudent',
  data() {
    return {
      correctAnswer: 'c', // Jawaban yang benar
      selectedOption: null, // Pilihan yang dipilih
      isAnswered: false, // Menunjukkan apakah pertanyaan sudah dijawab
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option; // Set pilihan yang dipilih
      this.isAnswered = true; // Menandakan bahwa pertanyaan telah dijawab
    },
    isCorrect(option) {
      return option === this.correctAnswer; // Memeriksa apakah pilihan benar
    },
    nextQuestion() {
      if (this.isCorrect(this.selectedOption)) {
        alert('Selamat, kamu menang!'); // Notifikasi jika jawaban benar
      } else {
        alert('Maaf, coba lagi!'); // Notifikasi jika jawaban salah
      }

      // Logika untuk navigasi ke soal berikutnya (jika ada)
      console.log('Navigasi ke soal berikutnya');
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.header-title {
  font-size: 24px;
  color: #343a40;
  background-color: #f5f5dc;
  padding: 10px;
  border-radius: 5px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://i.pinimg.com/564x/0c/0f/da/0c0fda724b91b3132d02fbf28eeca0b1.jpg');
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 8px;
}

.image-container img {
  width: 200px; /* Ukuran gambar diperkecil */
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

.user-info {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.user-info-item {
  background-color: rgba(248, 249, 250, 0.8);
  padding: 10px;
  border-radius: 5px;
}

.question-container {
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
}

.question-title {
  font-size: 20px;
  color: #495057;
}

.question-text {
  margin: 10px 0;
  color: white;
}

.options {
  list-style: none;
  padding: 0;
}

.option {
  background-color: #e9ecef;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;
}

.option:hover {
  background-color: #ced4da;
}

.selected {
  background-color: #d4edda;
}

.checkmark {
  position: absolute;
  right: 10px;
}

.correct {
  color: green;
}

.wrong {
  color: red;
}

.navigation {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.navigation-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.navigation-button:hover {
  background-color: #0056b3;
}
</style>
