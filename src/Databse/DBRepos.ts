import {dbConnection} from "./Connection";
import {User} from "./Entity/User";
import {Teacher} from "./Entity/Teacher";
import {Lesson} from "./Entity/Lesson";
import {Class} from "./Entity/Class";
import {LessonHour} from "./Entity/LessonHour";
import {WeeksDay} from "./Entity/WeeksDay";

export const UsersRepo = dbConnection.getRepository<User>(User)
export const TeachersRepo = dbConnection.getRepository<Teacher>(Teacher)
export const LessonsRepo = dbConnection.getRepository<Lesson>(Lesson)
export const ClassesRepo = dbConnection.getRepository<Class>(Class)
export const LessonHoursRepo = dbConnection.getRepository<LessonHour>(LessonHour)
export const WeekdaysRepo = dbConnection.getRepository<WeeksDay>(WeeksDay)