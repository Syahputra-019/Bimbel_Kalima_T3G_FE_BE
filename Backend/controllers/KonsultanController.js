import Konsultan from "../models/KonsultanModel.js";

export const getKonsultan = async(req, res) =>{
    try {
        const response = await Konsultan.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getKonsultanByid_Konsultan = async(req, res) =>{
    try {
        const response = await Konsultan.findOne({
            where:{
                id_Konsultan: req.params.id_Konsultan
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createKonsultan = async(req, res) =>{
    try {
        await Konsultan.create(req.body);
        res.status(201).json({msg: "Konsultan Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateKonsultan = async(req, res) =>{
    try {
        await Konsultan.update(req.body,{
            where:{
                id_Konsultan: req.params.id_Konsultan
            }
        });
        res.status(200).json({msg: "Konsultan Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteKonsultan = async(req, res) =>{
    try {
        await Konsultan.destroy({
            where:{
                id_Konsultan: req.params.id_Konsultan
            }
        });
        res.status(200).json({msg: "Konsultan Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}