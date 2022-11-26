import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {WeeksDay} from "./WeeksDay"
import {Teacher} from "./Teacher";
import {LessonHour} from "./LessonHour";
import {Class} from "./Class";

@Entity("lessons")
export class Lesson extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    lessonName: string;

    @ManyToOne(() => LessonHour, l => l.lessonHour)
    lessonHours: LessonHour;

    @ManyToOne(() => WeeksDay, w => w.day)
    day: WeeksDay;

    @ManyToOne(() => Teacher, t => t.lessons)
    teacher: Teacher;

    @ManyToOne(() => Class, c => c.className)
    class: Class;
}