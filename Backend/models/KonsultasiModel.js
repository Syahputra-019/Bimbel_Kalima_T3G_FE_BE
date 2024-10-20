import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Konsultasi = db.define('konsultasi',{
    id_Konsultasi: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_siswa: Sequelize.INTEGER,
      id_pengajar: Sequelize.INTEGER,
      topik_konsultasi: Sequelize.STRING,
      tanggal_Konsultasi: Sequelize.STRING,
      status_Konsultasi: Sequelize.STRING
    });
({
    freezeTableName:true
});

export default Konsultasi;

(async()=>{
    await db.sync({ alter: true });
})();