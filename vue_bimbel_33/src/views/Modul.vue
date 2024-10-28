<template>
  <div class="modul">
    <h1 class="modul-header">Modul</h1>

    <div class="modul-cards">
      <div
        v-for="(modul, index) in modulList"
        :key="index"
        class="modul-card"
      >
        <img :src="modul.image" :alt="modul.title" class="modul-image" />
        <h2>{{ modul.title }}</h2>
        <p>{{ modul.description }}</p>
        <a :href="modul.pdfLink" target="_blank" class="download-btn">Download PDF</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modul',
  data() {
    return {
      modulList: [
        {
          title: 'Modul 1',
          description: 'Deskripsi Modul 1',
          pdfLink: 'https://repositori.kemdikbud.go.id/19446/1/Kelas%20X_Bahasa%20Indonesia_KD%203.1%20(1).pdf',
          image: 'https://i.pinimg.com/564x/55/39/80/5539805f05881a5ef5f3ac0059453f04.jpg',
        },
        {
          title: 'Modul 2',
          description: 'Deskripsi Modul 2',
          pdfLink: 'https://repositori.kemdikbud.go.id/22096/1/XI_Bahasa-Inggris_KD-3.5_4.5_Final.pdf',
          image: 'https://i.pinimg.com/564x/c2/cc/de/c2ccdeefe64771c89ab81050ece9600a.jpg',
        },
        {
          title: 'Modul 3',
          description: 'Deskripsi Modul 3',
          pdfLink: 'https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/kurikulum21/IPA-BS-KLS%20VII.pdf',
          image: 'https://i.pinimg.com/564x/78/79/2c/78792c87ce95fd9854a8df9db91be314.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
.modul {
  text-align: center;
  padding: 20px;
}

.modul-header {
  font-size: 32px;
  margin-bottom: 20px;
  color: #343a40;
}

.modul-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.modul-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  width: 250px;
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.modul-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.modul-image {
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  border-radius: 50%;
}

.download-btn {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  color: white;
  background-color: #007bff;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.download-btn:hover {
  background-color: #0056b3;
}
</style>
