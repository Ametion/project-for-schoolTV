import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Lesson} from "./Lesson";

@Entity("weeksdays")
export class WeeksDay extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    day: string;

    @OneToMany(() => Lesson, l => l.day)
    lessons: Lesson[];
}