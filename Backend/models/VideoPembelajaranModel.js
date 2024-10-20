import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const VideoPembelajaran = db.define('videoPembelajaran',{
    id_video: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
        id_kelas: Sequelize.INTEGER,
        judul_video: DataTypes.STRING,
        deskripsi_video: DataTypes.TEXT,
        link_video: DataTypes.STRING,
},{
    freezeTableName:true
});

export default VideoPembelajaran;

(async()=>{
    await db.sync({alter: true});
})();