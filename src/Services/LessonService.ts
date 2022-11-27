import {TeacherService} from "./TeacherService";
import {ClassesRepo, LessonHoursRepo, LessonsRepo, WeekdaysRepo} from "../Databse/DBRepos";

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

            const lesson = LessonsRepo.create({
                lessonName: lessonName,
                lessonHours: lessonHour,
                day: day,
                class: className,
                teacher: teacher
            })

            await lesson.save()

            return true
        }catch{
            return false;
        }
    }

    public async GetLessonByDay(dayId: number): Promise<any>{
        try{
            return await LessonsRepo.find({
                where: {
                    day: {
                        id: dayId
                    }
                },
                relations: {
                    day: true,
                    class: true,
                    lessonHours: true,
                    teacher: true,
                },
                select: {
                    id: true,
                    lessonName: true,
                    teacher: {
                        firstName: true,
                        secondName: true
                    },
                    class: {
                        className: true
                    },
                    day: {
                        day: true
                    },
                    lessonHours:{
                        lessonHour: true
                    }
                }
            });
        }catch{
            return null
        }
    }

    public async DeleteLesson(lessonId: number): Promise<boolean>{
        try{
            const lesson = await LessonsRepo.findOneOrFail({
                where: {
                    id: lessonId
                }
            })

            await lesson.remove()

            return true
        }catch{
            return false
        }
    }
}