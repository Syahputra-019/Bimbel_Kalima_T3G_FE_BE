<template>
  <div class="container">
    <!-- Intro and Pricing Section in a Row -->
    <div class="intro-pricing">
      <!-- Intro Section -->
      <div class="intro">
        <img
          src="https://i.pinimg.com/736x/f0/86/0b/f0860bdf0beb9cb8d9ef71f5d4d8a523.jpg"
          alt="Berlangganan"
          class="intro-image"
        />
        <h1>Berlangganan</h1>
      </div>

      <!-- Paket Premium Card with router-link to pembayaran-premium -->
      <router-link to="/pembayaran-premium" class="pricing-card-link">
        <div class="pricing-card">
          <h2>Paket Premium</h2>
          <p>Untuk belajar yang menyenangkan.</p>
          <div class="price">Rp 50.000</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Berlangganan',
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.intro-pricing {
  display: flex;
  align-items: center;
  gap: 20px; /* Space between image and pricing card */
}

.intro {
  text-align: center;
}

.intro h1 {
  font-size: 32px;
  color: #343a40;
  margin-top: 20px;
}

.intro-image {
  width: 150px;
  height: auto;
  border-radius: 8px;
}

.pricing-card-link {
  text-decoration: none;
  color: inherit;
}

.pricing-card {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 200px;
}

.pricing-card:hover {
  transform: translateY(-5px);
}

.price {
  font-size: 24px;
  color: #28a745;
  margin: 10px 0;
}
</style>
