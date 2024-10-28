import LoginEmail from "../models/LoginEmailModel.js";

export const getLoginEmail = async(req, res) =>{
    try {
        const response = await LoginEmail.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getLoginEmailByid_LoginEmail = async(req, res) =>{
    try {
        const response = await LoginEmail.findOne({
            where:{
                id_LoginEmail: req.params.id_LoginEmail
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createLoginEmail = async(req, res) =>{
    try {
        await LoginEmail.create(req.body);
        res.status(201).json({msg: "LoginEmail Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateLoginEmail = async(req, res) =>{
    try {
        await LoginEmail.update(req.body,{
            where:{
                id_LoginEmail: req.params.id_LoginEmail
            }
        });
        res.status(200).json({msg: "LoginEmail Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteLoginEmail = async(req, res) =>{
    try {
        await LoginEmail.destroy({
            where:{
                id_LoginEmail: req.params.id_LoginEmail
            }
        });
        res.status(200).json({msg: "LoginEmail Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}