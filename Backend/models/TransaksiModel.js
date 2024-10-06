import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Transaksi = db.define('transaksi',{
    id_transaksi: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_user: Sequelize.INTEGER,
      jumlah_pembayaran: Sequelize.STRING,
      metode_pembayarab: Sequelize.STRING,
      tanggal_transaksi: Sequelize.STRING,
      status_transaksi: Sequelize.STRING
    });
({
    freezeTableName:true
});

export default Transaksi;

(async()=>{
    await db.sync({ alter: true });
})();