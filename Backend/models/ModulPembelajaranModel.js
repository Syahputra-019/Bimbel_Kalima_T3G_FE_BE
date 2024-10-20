import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const ModulPembelajaran = db.define('modul_pembelajaran',{
    id_Modul: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_kelas: Sequelize.INTEGER,
      judul_modul: Sequelize.STRING,
      deskripsi_modul: Sequelize.STRING,
      link_modul: Sequelize.STRING,
    });
({
    freezeTableName:true
});

export default ModulPembelajaran;

(async()=>{
    await db.sync({ alter: true });
})();