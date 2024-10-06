import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Admin = db.define('admin',{
    id_user: DataTypes.STRING,
    jabatan: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Admin;

(async()=>{
    await db.sync();
})();