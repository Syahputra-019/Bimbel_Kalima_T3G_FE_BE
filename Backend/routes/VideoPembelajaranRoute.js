import express from "express";
import {
    getVideoPembelajaran, 
    getVideoPembelajaranByid_Video,
    createVideoPembelajaran,
    updateVideoPembelajaran,
    deleteVideoPembelajaran
} from "../controllers/VideoPembelajaranController.js";

const router = express.Router();

router.get('/videopembelajaran', getVideoPembelajaran);
router.get('/videopembelajaran/:id_video', getVideoPembelajaranByid_Video);
router.post('/videopembelajaran', createVideoPembelajaran);
router.patch('/videopembelajaran/:id_video', updateVideoPembelajaran);
router.delete('/videopembelajaran/:id_video', deleteVideoPembelajaran);

export default router;