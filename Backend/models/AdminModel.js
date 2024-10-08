import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Admin = db.define('admin',{
    id_admin: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_user: Sequelize.INTEGER,
      jabatan: Sequelize.STRING,
    });
({
    freezeTableName:true
});

export default Admin;

(async()=>{
    await db.sync({ alter: true });
})();