import express from "express";
import {LessonService} from "../../Services/LessonService";

const router = express.Router();

router.get("/lesson/:day", async (req, res) => {
    try{
        let {day} = req.params

        if(!day){
            res.status(204).send("dont enough parametrs to get lessons")
            return
        }

        res.status(201).send(await new LessonService().GetLessonByDay(parseInt(day)))

        return
    }catch{
        res.status(400).send("cant login to account")
    }
})

export {
    router as getLessonsByDayRouter
}