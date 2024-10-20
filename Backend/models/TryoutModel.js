import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Tryout = db.define('tryout',{
    id_Tryout: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_kelas: Sequelize.INTEGER,
      judul_tryout: Sequelize.STRING,
      deskripsi_tryout: Sequelize.STRING,
      tanggal_tryout: Sequelize.STRING,
    });
({
    freezeTableName:true
});

export default Tryout;

(async()=>{
    await db.sync({ alter: true });
})();