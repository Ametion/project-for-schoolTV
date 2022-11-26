import express from "express";
import {TeacherService} from "../../Services/TeacherService";

const router = express.Router();

router.post("/teacher", async (req, res) => {
    try{
        const {firstName, secondName} = req.body

        if(!firstName || !secondName){
            res.status(204).send("dont enought parameters")
            return
        }

        res.status(201).send(await new TeacherService().AddTeacher(firstName, secondName))
        return
    }catch{
        res.status(400).send("cant login to account")
    }
})

export {
    router as addTeacherRouter
}