import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Konsultan = db.define('konsultan',{
    id_konsultan: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_user: Sequelize.INTEGER,
      bidang_konsultasi: Sequelize.STRING,
      pengalaman: Sequelize.STRING,
      jadwal_konsultasi: Sequelize.STRING,
    });
({
    freezeTableName:true
});

export default Konsultan;

(async()=>{
    await db.sync({ alter: true });
})();