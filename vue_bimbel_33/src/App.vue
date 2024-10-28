<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <!-- Logo -->
        <RouterLink to="/" class="navbar-brand">BELA</RouterLink>

        <!-- Links -->
        <ul class="nav-links">
          <li><RouterLink to="/" class="nav-link">Home</RouterLink></li>
          <li><RouterLink to="/video-pembelajaran" class="nav-link">Video Pembelajaran</RouterLink></li>
          <li><RouterLink to="/berlangganan" class="nav-link">Berlangganan</RouterLink></li>
          <li><RouterLink to="/battle-student" class="nav-link">Battle Student</RouterLink></li>
          <li><RouterLink to="/modul" class="nav-link">Modul</RouterLink></li>
          <li><RouterLink to="/konsultasi" class="nav-link">Konsultasi</RouterLink></li>
        </ul>

        <!-- Buttons -->
        <div class="nav-buttons">
          <!-- Remove the "Masuk" button -->
          <RouterLink to="/daftar" class="nav-button signup-button">Daftar</RouterLink>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const dropdownOpen = ref(false);
    const toggleDropdown = () => {
      dropdownOpen.value = !dropdownOpen.value;
    };

    return { dropdownOpen, toggleDropdown };
  },
};
</script>

<style scoped>
/* Navbar styling */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px; /* Reduce padding */
  background-color: #343a40;
  color: white;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 10px; /* Reduce gap */
  white-space: nowrap; /* Prevent text wrapping */
}

.nav-link {
  color: #ccc;
  text-decoration: none;
  font-size: 0.9rem; /* Font size adjustment */
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #fff;
}

.nav-buttons {
  display: flex;
  gap: 10px;
}

.nav-button {
  padding: 8px 12px; /* Adjust padding */
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.signup-button {
  background-color: #28a745;
}

.nav-button:hover {
  opacity: 0.8;
}

/* Responsive layout */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>
