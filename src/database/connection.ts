import {Sequelize} from "sequelize-typescript";

//postgres connection
const sequelize=new Sequelize({
    database:process.env.DB_NAME,
    dialect:"postgres",
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    port:Number(process.env.DB_PORT),
    models:[__dirname+"/models"]

})

export default sequelize;