import { Sequelize } from "sequelize";

const db = new Sequelize('uji1', 'root', '',{
    host: "localhost",
    dialect: "mysql",
    logging: false
});


export default db;