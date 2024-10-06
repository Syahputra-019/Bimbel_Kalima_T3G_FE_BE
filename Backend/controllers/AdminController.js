import Admin from "../models/AdminModel.js";

export const getAdmin = async(req, res) =>{
    try {
        const response = await Admin.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getAdminByid_admin = async(req, res) =>{
    try {
        const response = await Admin.findOne({
            where:{
                id_admin: req.params.id_admin
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createAdmin = async(req, res) =>{
    try {
        await Admin.create(req.body);
        res.status(201).json({msg: "Admin Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateAdmin = async(req, res) =>{
    try {
        await Admin.update(req.body,{
            where:{
                id_admin: req.params.id_admin
            }
        });
        res.status(200).json({msg: "Admin Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteAdmin = async(req, res) =>{
    try {
        await Admin.destroy({
            where:{
                id_admin: req.params.id_admin
            }
        });
        res.status(200).json({msg: "Admin Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}