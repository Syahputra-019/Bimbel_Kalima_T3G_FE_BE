import ModulPembelajaran from "../models/ModulPembelajaranModel.js";

export const getModulPembelajaran = async(req, res) =>{
    try {
        const response = await ModulPembelajaran.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getModulPembelajaranByid_Modul = async(req, res) =>{
    try {
        const response = await ModulPembelajaran.findOne({
            where:{
                id_Modul: req.params.id_Modul
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createModulPembelajaran = async(req, res) =>{
    try {
        await ModulPembelajaran.create(req.body);
        res.status(201).json({msg: "Modul Pembelajaran Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateModulPembelajaran = async(req, res) =>{
    try {
        await ModulPembelajaran.update(req.body,{
            where:{
                id_Modul: req.params.id_Modul
            }
        });
        res.status(200).json({msg: "Modul Pembelajaran Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteModulPembelajaran = async(req, res) =>{
    try {
        await ModulPembelajaran.destroy({
            where:{
                id_Modul: req.params.id_Modul
            }
        });
        res.status(200).json({msg: "Modul Pembelajaran Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}