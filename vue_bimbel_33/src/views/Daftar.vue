<template>
  <div class="daftar-page">
    <!-- Header with two-tone background -->
    <header class="header">
      <div class="header-section cream-bg"></div> <!-- Change to cream background -->
      <div class="header-section gray-bg">
        <div class="social-icons">
          <!-- Social media icons for login -->
          <img src="https://i.pinimg.com/564x/60/41/99/604199df880fb029291ddd7c382e828b.jpg" alt="Google" @click="loginWithGoogle" />
          <img src="https://i.pinimg.com/564x/2e/a0/d1/2ea0d1bcb2702c62619f82359e8a4650.jpg" alt="Instagram" @click="loginWithInstagram" />
          <img src="https://i.pinimg.com/564x/8e/72/f7/8e72f7331b652b842b0c271ab144d332.jpg" alt="Twitter" @click="loginWithTwitter" />
        </div>
      </div>
    </header>

    <!-- Manual login section -->
    <div class="manual-login-section">
      <h2>Login with Email</h2>
      <input id="login-email" v-model="email" type="email" placeholder="Enter your email" class="login-input" />
      <input id="login-password" v-model="password" type="password" placeholder="Enter your password" class="login-input" />
      <button @click="loginWithEmail" class="login-button">Login</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');

    const loginWithGoogle = () => {
      window.open('https://accounts.google.com/signin', '_blank');
      completeLogin();
    };

    const loginWithInstagram = () => {
      window.open('https://www.instagram.com/accounts/login/', '_blank');
      completeLogin();
    };

    const loginWithTwitter = () => {
      window.open('https://twitter.com/login', '_blank');
      completeLogin();
    };

    const loginWithEmail = async () => {
      if (email.value && password.value) {
        try {
          const response = await axios.post('http://localhost:5000/loginemail', {
            email: email.value,
            password: password.value,
          });

          if (response.status === 200) {
            alert('Login berhasil!');
            completeLogin();
          }
        } catch (error) {
          console.error('Login error:', error);
          alert('Login gagal. Silakan coba lagi.');
        }
      } else {
        alert('Silakan masukkan email dan kata sandi.');
      }
    };

    const completeLogin = () => {
      router.push('/home');
    };

    return {
      email,
      password,
      loginWithGoogle,
      loginWithInstagram,
      loginWithTwitter,
      loginWithEmail,
    };
  },
};
</script>

<style scoped>
.daftar-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.header {
  display: flex;
  width: 100%;
  height: 150px;
}

.header-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Cream background for the first header section */
.cream-bg {
  background-color: #f5f5dc; /* Change to cream color */
}

/* Solid background color for the gray section */
.gray-bg {
  background-color: #f0f0f0; /* Change this to your desired color */
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons img {
  width: 40px;
  cursor: pointer;
  transition: transform 0.2s;
}

.social-icons img:hover {
  transform: scale(1.1);
}

/* Manual login section */
.manual-login-section {
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5dc; /* Change to cream color */
  border-radius: 8px;
  width: 100%; /* Stretch to full width */
  max-width: 600px; /* Set a max-width to avoid it being too large */
  color: black; /* Change text color to black for readability */
}

.login-input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #218838;
}
</style>