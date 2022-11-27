import express, {request} from 'express'
import {dbConnection} from "./Databse/Connection";
import {loginRouter} from "./Routes/Authorization/LoginRoute";
import {registerRouter} from "./Routes/Authorization/RegisterRoute";
import {addLessonRouter} from "./Routes/Lessons/AddLessonRoute";
import {addTeacherRouter} from "./Routes/Teachers/AddTeacherRoute";
import {getLessonsByDayRouter} from "./Routes/Lessons/GetLessonByDayRoute";
import cors from 'cors';
import {deleteLessonRouter} from "./Routes/Lessons/DeleteLessonRoute";
import {removeTeacherRouter} from "./Routes/Teachers/RemoveTeacherRoute";
require("dotenv").config()

const corsConfig = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"]
}

const app = express()
app.use(express.json());
app.use(cors(corsConfig))

app.listen(process.env.PORT, () => {
    dbConnection.initialize().then(() => {
        console.log(`server listening on port ${process.env.PORT}`)

        app.use(loginRouter)
        app.use(registerRouter)
        app.use(addLessonRouter)
        app.use(addTeacherRouter)
        app.use(getLessonsByDayRouter)
        app.use(deleteLessonRouter)
        app.use(removeTeacherRouter)

    }).catch((err) => {
        console.log(`error\n`, err)
    })
})