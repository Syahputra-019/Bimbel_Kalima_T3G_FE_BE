import express from "express";
import {
    getModulPembelajaran, 
    getModulPembelajaranByid_Modul,
    createModulPembelajaran,
    updateModulPembelajaran,
    deleteModulPembelajaran
} from "../controllers/ModulPembelajaranController.js";

const router = express.Router();

router.get('/modulpembelajaran', getModulPembelajaran);
router.get('/modulpembelajaran/:id_Modul', getModulPembelajaranByid_Modul);
router.post('/modulpembelajaran', createModulPembelajaran);
router.patch('/modulpembelajaran/:id_Modul', updateModulPembelajaran);
router.delete('/modulpembelajaran/:id_Modul', deleteModulPembelajaran);

export default router;