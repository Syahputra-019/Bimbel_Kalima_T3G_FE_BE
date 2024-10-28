<template>
  <div class="container">
    <!-- Payment Details Section in a Card -->
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

    <!-- Total Price Section in a Card -->
    <div class="card total">
      <h3>Total Harga</h3>
      <span>Rp {{ totalAmount.toLocaleString('id-ID') }}</span>
      <button class="payment-button" @click="selectPaymentMethod">Pilih Metode Bayar</button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'PembayaranDasar',
  setup() {
    const itemPrice = ref(50000); // Set item price

    // Calculate total amount based on item price
    const totalAmount = computed(() => itemPrice.value);

    // Handle payment method selection
    const selectPaymentMethod = () => {
      alert('Selamat Pembayaran Sukses!');
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
.container {
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 20px;
}

.card {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.payment-details .item,
.total .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.notes {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #666;
}

.payment-button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
}

.payment-button:hover {
  background-color: #45a049;
}
</style>
