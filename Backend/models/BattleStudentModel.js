import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const BattleStudent = db.define('battlestudent',{
    id_Battle: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_siswa_1: Sequelize.INTEGER,
      id_siswa_2: Sequelize.INTEGER,
      topik_battle: Sequelize.STRING,
      tanggal_battle: Sequelize.STRING,
      skor_siswa_1: Sequelize.INTEGER,
      skor_siswa_2: Sequelize.INTEGER,
    });
({
    freezeTableName:true
});

export default BattleStudent;

(async()=>{
    await db.sync({ alter: true });
})();