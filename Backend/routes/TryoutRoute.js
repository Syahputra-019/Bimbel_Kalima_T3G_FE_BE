import express from "express";
import {
    getTryout, 
    getTryoutByid_Tryout,
    createTryout,
    updateTryout,
    deleteTryout
} from "../controllers/TryoutController.js";

const router = express.Router();

router.get('/tryout', getTryout);
router.get('/tryout/:id_Tryout', getTryoutByid_Tryout);
router.post('/tryout', createTryout);
router.patch('/tryout/:id_Tryout', updateTryout);
router.delete('/tryout/:id_Tryout', deleteTryout);

export default router;