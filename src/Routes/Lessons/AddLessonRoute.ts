import express from "express";
import {LessonService} from "../../Services/LessonService";

const router = express.Router();

router.post("/lesson", async (req, res) => {
    try{
        let {lessonName, lessonHoursId, dayId, teacherId, classId} = req.body

        if(!lessonName || !lessonHoursId || !dayId || !teacherId || !classId){
            res.status(204).send("dont enough parametrs to add lesson")
            return
        }

        res.status(201).send(await new LessonService().AddLesson(lessonName, lessonHoursId, dayId, teacherId, classId))

        return
    }catch{
        res.status(400).send("cant add lesson")
    }
})

export {
    router as addLessonRouter
}