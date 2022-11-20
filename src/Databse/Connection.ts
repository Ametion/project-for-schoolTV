import {DataSource} from "typeorm";
import {User} from "./Entity/User";
require("dotenv").config()

export const dbConnection = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: process.env.DBName?.toString(),
    entities: [User],
    synchronize: true,
})