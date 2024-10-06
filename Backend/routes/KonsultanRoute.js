import express from "express";
import {
    getKonsultan, 
    getKonsultanByid_Konsultan,
    createKonsultan,
    updateKonsultan,
    deleteKonsultan
} from "../controllers/KonsultanController.js";

const router = express.Router();

router.get('/konsultan', getKonsultan);
router.get('/konsultan/:id_konsultan', getKonsultanByid_Konsultan);
router.post('/konsultan', createKonsultan);
router.patch('/konsultan/:id_konsultan', updateKonsultan);
router.delete('/konsultan/:id_konsultan', deleteKonsultan);

export default router;