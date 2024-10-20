import BattleStudent from "../models/BattleStudentModel.js";

export const getBattleStudent = async(req, res) =>{
    try {
        const response = await BattleStudent.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getBattleStudentByid_Battle = async(req, res) =>{
    try {
        const response = await BattleStudent.findOne({
            where:{
                id_Battle: req.params.id_Battle
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createBattleStudent = async(req, res) =>{
    try {
        await BattleStudent.create(req.body);
        res.status(201).json({msg: "Battle Student Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateBattleStudent = async(req, res) =>{
    try {
        await BattleStudent.update(req.body,{
            where:{
                id_Battle: req.params.id_Battle
            }
        });
        res.status(200).json({msg: "Battle Student Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBattleStudent = async(req, res) =>{
    try {
        await BattleStudent.destroy({
            where:{
                id_Battle: req.params.id_Battle
            }
        });
        res.status(200).json({msg: "Battle Student Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}