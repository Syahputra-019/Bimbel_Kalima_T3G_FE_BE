import express from "express";
import {
    getAdmin, 
    getAdminByid_admin,
    createAdmin,
    updateAdmin,
    deleteAdmin
} from "../controllers/AdminController.js";

const router = express.Router();

router.get('/admin', getAdmin);
router.get('/admin/:id_admin', getAdminByid_admin);
router.post('/admin', createAdmin);
router.patch('/admin/:id_admin', updateAdmin);
router.delete('/admin/:id_admin', deleteAdmin);

export default router;