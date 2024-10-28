<template>
  <div class="konsultasi">
    <h1 class="konsultasi-judul">Konsultasi</h1>

    <!-- Subscription Check -->
    <div v-if="isSubscribed">
      <div class="konsultasi-form">
        <label for="nama">Nama:</label>
        <input type="text" id="nama" v-model="nama" />

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />

        <label for="pesan">Pesan:</label>
        <textarea id="pesan" v-model="pesan"></textarea>

        <button @click="kirimPesan">Kirim</button>
        <div v-if="pesanTerkirim" class="konsultasi-sukses">Pesan berhasil terkirim!</div>
      </div>
    </div>

    <!-- Locked Content if Not Subscribed -->
    <div v-else class="locked-content">
      <img src="https://i.pinimg.com/564x/2f/a0/6e/2fa06eebc572c7228adaee808d659282.jpg" alt="Locked" class="lock-image" />
      <p>Harus Berlangganan</p>
      <button @click="goToPembayaran" class="subscription-card">
        Berlanggan
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nama: "",
      email: "",
      pesan: "",
      pesanTerkirim: false,
      isSubscribed: false, // Default to not subscribed
    };
  },
  created() {
    // Check if the user has subscribed
    const hasSubscribed = localStorage.getItem('subscribed'); // Retrieve subscription status
    this.isSubscribed = hasSubscribed === 'true';
  },
  methods: {
    kirimPesan() {
      // Check subscription status
      if (!this.isSubscribed) {
        alert("Pesan tidak terkirim. Harus berlangganan terlebih dahulu.");
        return; // Exit the method if not subscribed
      }

      // Logic to send message to backend (if subscribed)
      this.pesanTerkirim = true;

      // Reset form after sending message
      this.nama = "";
      this.email = "";
      this.pesan = "";
    },
    goToPembayaran() {
      this.$router.push({ name: 'pembayaran-premium' }); // Redirect to Pembayaran Premium
    },
  },
};
</script>

<style scoped>
.konsultasi {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url('https://i.pinimg.com/564x/14/cd/c6/14cdc6c80b950d123cdae41e22fac94f.jpg'); /* Replace with your background image URL */
  background-size: cover; /* Ensure the image covers the entire container */
  background-position: center; /* Center the image */
  min-height: 100vh; /* Set a minimum height to ensure the background covers the screen */
}

.konsultasi-judul {
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff; /* Change text color to ensure readability */
}

.konsultasi-form {
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px; /* Add padding for inner spacing */
  background-color: rgba(245, 253, 220, 0.9); /* Semi-transparent cream background color for contrast */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Slight shadow for depth */
}

label {
  margin-bottom: 5px;
  color: #343a40; /* Label color for readability */
}

input,
textarea {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px; /* Complete the border-radius */
}

.lock-image {
  width: 100px; /* Adjust as necessary */
  height: auto;
}

.locked-content {
  text-align: center;
}

.konsultasi-sukses {
  margin-top: 10px;
  color: green;
}

.subscription-card {
  background-color: #4CAF50; /* Green background */
  color: white; /* White text */
  padding: 15px 20px; /* Padding */
  border: none; /* No border */
  border-radius: 8px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s; /* Smooth background color transition */
  text-align: center; /* Centered text */
  margin-top: 20px; /* Spacing above the button */
  display: inline-block; /* Aligns properly */
}

.subscription-card:hover {
  background-color: #45a049; /* Darker green on hover */
}
</style>
