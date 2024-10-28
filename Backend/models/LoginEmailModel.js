import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const LoginEmail = db.define('loginemail',{
    id_LoginEmail: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Email: Sequelize.STRING,
      Password: Sequelize.STRING,
    });
({
    freezeTableName:true
});

export default LoginEmail;

(async()=>{
    await db.sync({ alter: true });
})();