<template>
  <div class="container">
    <div class="video-pembelajaran">
      <h1 class="section-title">Download Materi Pembelajaran</h1>
      <p class="section-subtitle">Nikmati berbagai video pembelajaran yang dapat diakses kapan saja dan di mana saja</p>
      <div class="card-container">
        <div class="card" v-for="video in videos" :key="video.id">
          <img :src="video.thumbnail" alt="Thumbnail" class="thumbnail" />
          <div class="card-content">
            <h2 class="video-title">{{ video.title }}</h2>
            <p class="video-description">{{ video.description }}</p>
            <a :href="video.link" target="_blank" class="video-link">Tonton Video</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          id: 1,
          title: "Bahasa Indonesia",
          description: "Laporan Hasil Observasi",
          link: "https://youtu.be/mwJeFysblag?si=3JUVo1o4OJYNU7IZ",
          thumbnail: "https://i.pinimg.com/564x/55/39/80/5539805f05881a5ef5f3ac0059453f04.jpg",
        },
        {
          id: 2,
          title: "Bahasa Inggris",
          description: "Passive Voice",
          link: "https://youtu.be/OXAyY6VO_4c?si=up-QkZeSGztZBRio",
          thumbnail: "https://i.pinimg.com/564x/c2/cc/de/c2ccdeefe64771c89ab81050ece9600a.jpg",
        },
        {
          id: 3,
          title: "IPA",
          description: "Manfaat dan Fungsi Reboisasi bagi Lingkungan",
          link: "https://youtu.be/fs3ZlbUtN14?si=Yrv60IwdiQGUXuvG",
          thumbnail: "https://i.pinimg.com/564x/78/79/2c/78792c87ce95fd9854a8df9db91be314.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.video-pembelajaran {
  text-align: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-top: 30px;
}

.section-title {
  font-size: 32px;
  color: #333;
  margin-bottom: 10px;
}

.section-subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.card-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 30%;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 300px;
  text-align: left;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

.thumbnail {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 15px;
}

.card-content {
  text-align: left;
}

.video-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.video-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
}

.video-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.video-link:hover {
  text-decoration: underline;
}
</style>
