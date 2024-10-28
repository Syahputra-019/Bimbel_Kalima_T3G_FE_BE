import express from "express";
import {
    getLoginEmail, 
    getLoginEmailByid_LoginEmail,
    createLoginEmail,
    updateLoginEmail,
    deleteLoginEmail
} from "../controllers/LoginEmailController.js";

const router = express.Router();

router.get('/loginemail', getLoginEmail);
router.get('/loginemail/:id_LoginEmail', getLoginEmailByid_LoginEmail);
router.post('/loginemail', createLoginEmail);
router.patch('/loginemail/:id_LoginEmail', updateLoginEmail);
router.delete('/loginemail/:id_LoginEmail', deleteLoginEmail);

export default router;