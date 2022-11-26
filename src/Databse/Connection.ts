import {DataSource} from "typeorm";
import {User} from "./Entity/User";
import {Teacher} from "./Entity/Teacher";
import {Lesson} from "./Entity/Lesson";
import {WeeksDay} from "./Entity/WeeksDay";
import {LessonHour} from "./Entity/LessonHour";
import {Class} from "./Entity/Class";
require("dotenv").config()

export const dbConnection = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: process.env.DBName?.toString(),
    entities: [User, Teacher, Lesson, WeeksDay, LessonHour, Class],
    synchronize: true,
})