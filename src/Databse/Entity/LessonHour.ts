import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Lesson} from "./Lesson";

@Entity("lessonshours")
export class LessonHour extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    lessonHour: string;

    @OneToMany(() => Lesson, l => l.lessonHours)
    lessons: Lesson[];
}