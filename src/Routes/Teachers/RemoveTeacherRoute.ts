import express from "express";
import {TeacherService} from "../../Services/TeacherService";

const router = express.Router();

router.delete("/teacher", async (req, res) => {
    try{
        const teacherId = parseInt(req.body.teacherId)

        if(!teacherId){
            res.status(204).send("dont enought parameters")
            return
        }

        res.status(201).send(await new TeacherService().RemoveTeacher(teacherId))
        return
    }catch{
        res.status(400).send("cant remove teacher")
    }
})

export {
    router as removeTeacherRouter
}