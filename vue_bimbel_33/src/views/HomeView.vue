<template>
  <div class="home">
    <header>
      <h1>BELA</h1>
      <p>Belajar Bersama, Raih Impian.</p>
    </header>
    <main>
      <section class="features">
        <h2>Gebyar Promo</h2>
        <div class="card-container">
          <div class="card" @mouseover="hoverCard" @mouseleave="leaveCard">
            <img src="@/assets/WhatsAppImage_2024-10-14.jpeg" alt="Feature 1" />
            <div class="card-content">
              <h3 class="small-text">Paket Hemat: Rp. 30.000</h3>
              <p>Video Pembelajaran</p>
            </div>
          </div>
          <div class="card" @mouseover="hoverCard" @mouseleave="leaveCard">
            <img src="@/assets/WhatsAppImage_2024-10-13.jpeg" alt="Feature 2" />
            <div class="card-content">
              <h3 class="small-text">Paket Komplit</h3>
              <p>Video Pembelajaran + Konsultasi</p>
            </div>
          </div>
          <div class="card" @mouseover="hoverCard" @mouseleave="leaveCard">
            <img src="https://i.pinimg.com/564x/c8/45/a8/c845a86269dfc68ea532439729b534fb.jpg" alt="Feature 3" />
            <div class="card-content">
              <h3 class="small-text">Paket Ekslusif</h3>
              <p>Nikmati Semua Layanan Selama Setahun.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="cta">
        <h2>Ayo Mulai</h2>
        <p>Tonton Video Sebanyak Mungkin Untuk Mengukir Prestasi!</p>
        <router-link to="/your-link" class="download-button">Get Started</router-link> <!-- Changed from Download Now to Get Started -->
      </section>
    </main>
    <footer>
      <p>&copy; 2022 Creative Tim. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    hoverCard(event) {
      const card = event.currentTarget;
      card.classList.add('hover');
    },
    leaveCard(event) {
      const card = event.currentTarget;
      card.classList.remove('hover');
    }
  }
}
</script>

<style scoped>
.home {
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  text-align: center;
}

header {
  background-image: url('https://i.pinimg.com/564x/05/cb/0a/05cb0a57ce65ecc7a3cf5790a405cda7.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 20px;
}

.features {
  margin: 20px 0;
}

.card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  margin: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: auto;
}

.card-content {
  padding: 15px;
}

.small-text {
  font-size: 14px;
}

.cta {
  background-image: url('https://i.pinimg.com/originals/41/85/84/418584e1566e9536a8cc76d53b92fd1d.gif');
  background-size: cover;
  background-position: center;
  padding: 20px;
  margin-top: 40px;
  color: white;
}

.download-button {
  display: inline-block;
  background-color: #6200ea;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px;
}

.download-button:hover {
  background-color: #3700b3;
}

footer {
  background-color: navy;
  margin-top: 60px;
  padding: 40px 0;
  font-size: 0.8em;
  color: #fff;
}
</style>
