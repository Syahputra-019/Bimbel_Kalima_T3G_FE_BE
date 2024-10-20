import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('user',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    no_telepon: DataTypes.STRING,
    alamat: DataTypes.STRING,
    role: DataTypes.ENUM('siswa', 'pengajar', 'admin', 'konsultan')
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync({ alter: true });
})();