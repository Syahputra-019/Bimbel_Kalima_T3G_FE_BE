import express from "express";
import {
    getTransaksi, 
    getTransaksiByid_transaksi,
    createTransaksi,
    updateTransaksi,
    deleteTransaksi
} from "../controllers/TransaksiController.js";

const router = express.Router();

router.get('/transaksi', getTransaksi);
router.get('/transaksi/:id_transaksi', getTransaksiByid_transaksi);
router.post('/transaksi', createTransaksi);
router.patch('/transaksi/:id_transaksi', updateTransaksi);
router.delete('/transaksi/:id_transaksi', deleteTransaksi);

export default router;