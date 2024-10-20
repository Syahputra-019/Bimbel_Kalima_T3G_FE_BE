import Konsultasi from "../models/KonsultasiModel.js";

export const getKonsultasi = async(req, res) =>{
    try {
        const response = await Konsultasi.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getKonsultasiByid_Konsultasi = async(req, res) =>{
    try {
        const response = await Konsultasi.findOne({
            where:{
                id_Konsultasi: req.params.id_Konsultasi
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createKonsultasi = async(req, res) =>{
    try {
        await Konsultasi.create(req.body);
        res.status(201).json({msg: "Konsultasi Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateKonsultasi = async(req, res) =>{
    try {
        await Konsultasi.update(req.body,{
            where:{
                id_Konsultasi: req.params.id_Konsultasi
            }
        });
        res.status(200).json({msg: "Konsultasi Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteKonsultasi = async(req, res) =>{
    try {
        await Konsultasi.destroy({
            where:{
                id_Konsultasi: req.params.id_Konsultasi
            }
        });
        res.status(200).json({msg: "Konsultasi Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}