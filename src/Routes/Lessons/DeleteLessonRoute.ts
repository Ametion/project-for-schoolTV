import express from "express";
import {LessonService} from "../../Services/LessonService";

const router = express.Router();

router.delete("/lesson", async (req, res) => {
    try{
         const lessonId = parseInt(req.body.lessonId)

        if(!lessonId){
            res.status(204).send("dont enough parametrs to delete lesson")
            return
        }

        res.status(201).send(await new LessonService().DeleteLesson(lessonId))

        return
    }catch{
        res.status(400).send("cant delete lesson")
    }
})

export {
    router as deleteLessonRouter
}