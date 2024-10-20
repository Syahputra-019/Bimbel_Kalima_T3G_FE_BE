import express from "express";
import {
    getKonsultasi, 
    getKonsultasiByid_Konsultasi,
    createKonsultasi,
    updateKonsultasi,
    deleteKonsultasi
} from "../controllers/KonsultasiController.js";

const router = express.Router();

router.get('/konsultasi', getKonsultasi);
router.get('/konsultasi/:id_Konsultasi', getKonsultasiByid_Konsultasi);
router.post('/konsultasi', createKonsultasi);
router.patch('/konsultasi/:id_Konsultasi', updateKonsultasi);
router.delete('/konsultasi/:id_Konsultasi', deleteKonsultasi);

export default router;