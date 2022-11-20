import express, {request} from 'express'
import {dbConnection} from "./Databse/Connection";
import {loginRouter} from "./Routes/Authorization/LoginRoute";
import {registerRouter} from "./Routes/Authorization/RegisterRoute";
require("dotenv").config()

const app = express()
app.use(express.json());

app.listen(process.env.PORT, () => {
    dbConnection.initialize().then(() => {
        console.log(`server listening on port ${process.env.PORT}`)

        app.use(loginRouter)
        app.use(registerRouter)
    }).catch((err) => {
        console.log(`error\n`, err)
    })
})