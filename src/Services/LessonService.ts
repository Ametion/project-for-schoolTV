import {TeacherService} from "./TeacherService";
import {ClassesRepo, LessonHoursRepo, LessonsRepo, WeekdaysRepo} from "../Databse/DBRepos";
import {Teacher} from "../Databse/Entity/Teacher";

export class LessonService{
    private readonly teacherService: TeacherService;

    constructor(){
        this.teacherService = new TeacherService()
    }

    public async AddLesson(lessonName: string, lessonHoursId: number, dayId: number, teacherId: number, classId: number): Promise<boolean>{
        try{
            if(!lessonName || !lessonHoursId || !dayId || !teacherId || !classId){
                return false;
            }

            const lessonHour = await LessonHoursRepo.findOneOrFail({
                where: {
                    id: lessonHoursId
                }
            })

            const day = await WeekdaysRepo.findOneOrFail({
                where: {
                    id: dayId
                }
            })

            const className = await ClassesRepo.findOneOrFail({
                where: {
                    id: classId
                }
            })

            const teacher = await this.teacherService.GetTeacher(teacherId)

            const oldLesson = await LessonsRepo.findOne({
                //@ts-ignore
                where: {
                    lessonHours: lessonHour,
                    day: day
                }
            })

            if(oldLesson){
                return false
            }

            if(teacher instanceof Teacher){
                const lesson = LessonsRepo.create({
                    lessonName: lessonName,
                    lessonHours: lessonHour,
                    day: day,
                    class: className,
                    teacher: teacher
                })

                await lesson.save()

                return true
            }

            return false;
        }catch{
            return false;
        }
    }

    public async GetLessonByDay(dayId: number): Promise<any>{
        try{
            const day = await WeekdaysRepo.findOneOrFail({
                where: {
                    id: dayId
                }
            })

            const lessons = await LessonsRepo.find({
                //@ts-ignore
                where: {
                    day: day
                },
                relations: {
                    day: true,
                    class: true,
                    lessonHours: true,
                    teacher: true,
                },
                select:{
                    id: true,
                    lessonName: true,
                    teacher:{
                        firstName: true,
                        secondName: true
                    },
                    class: {
                        className: true
                    },
                    day:{
                        day: true
                    }
                }
            })

            return lessons;
        }catch{
            return null
        }
    }
}