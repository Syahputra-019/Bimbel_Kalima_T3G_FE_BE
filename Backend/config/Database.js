import {Sequelize} from "sequelize";

const db = new Sequelize('database_bimbel','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;