<template>
  <div class="container">
    <div class="card payment-details">
      <h3>Detail Pembayaran</h3>
      <div class="item">
        <p>Paket Premium</p>
        <span>Rp {{ itemPrice.toLocaleString('id-ID') }}</span>
      </div>
      <div class="notes">
        <p>
          Dengan menekan tombol di bawah ini, kamu menyatakan telah membaca, memahami, dan menyetujui 
          <a href="#" target="_blank">Kebijakan Penukaran dan Garansi.</a>
        </p>
      </div>
    </div>
    <div class="card total">
      <h3>Total Harga</h3>
      <span>Rp {{ totalAmount.toLocaleString('id-ID') }}</span>
      <button class="payment-button" @click="selectPaymentMethod">Pilih Metode Bayar</button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import axios from 'axios';

export default {
  name: 'PembayaranDasar',
  setup() {
    const itemPrice = ref(50000);
    const totalAmount = computed(() => itemPrice.value);

    const selectPaymentMethod = async () => {
      try {
        const response = await axios.post('http://localhost:3000/transaksi', {
          amount: totalAmount.value,
        });
        if (response.status === 201) {
          alert('Selamat Pembayaran Sukses!');
        }
      } catch (error) {
        console.error('Error creating transaction:', error);
        alert('Terjadi kesalahan saat melakukan pembayaran.');
      }
    };

    return {
      itemPrice,
      totalAmount,
      selectPaymentMethod,
    };
  },
};
</script>

<style scoped>
/* Your existing styles */
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.card {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 45%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.payment-details h3,
.total h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.item,
.notes {
  margin-bottom: 15px;
}

.payment-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
}

.payment-button:hover {
  background-color: #0056b3;
}
</style>
