import express from "express";
import {
    getBattleStudent, 
    getBattleStudentByid_Battle,
    createBattleStudent,
    updateBattleStudent,
    deleteBattleStudent
} from "../controllers/BattleStudentController.js";

const router = express.Router();

router.get('/battlestudent', getBattleStudent);
router.get('/battlestudent/:id_Battle', getBattleStudentByid_Battle);
router.post('/battlebtudent', createBattleStudent);
router.patch('/battlestudent/:id_Battle', updateBattleStudent);
router.delete('/battlestudent/:id_Battle', deleteBattleStudent);

export default router;