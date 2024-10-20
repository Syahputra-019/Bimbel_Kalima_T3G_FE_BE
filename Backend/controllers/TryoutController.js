import Tryout from "../models/TryoutModel.js";

export const getTryout = async(req, res) =>{
    try {
        const response = await Tryout.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getTryoutByid_Tryout = async(req, res) =>{
    try {
        const response = await Tryout.findOne({
            where:{
                id_Tryout: req.params.id_Tryout
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createTryout = async(req, res) =>{
    try {
        await Tryout.create(req.body);
        res.status(201).json({msg: "Tryout Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTryout = async(req, res) =>{
    try {
        await Tryout.update(req.body,{
            where:{
                id_Tryout: req.params.id_Tryout
            }
        });
        res.status(200).json({msg: "Tryout Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTryout = async(req, res) =>{
    try {
        await Tryout.destroy({
            where:{
                id_Tryout: req.params.id_Tryout
            }
        });
        res.status(200).json({msg: "Tryout Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}