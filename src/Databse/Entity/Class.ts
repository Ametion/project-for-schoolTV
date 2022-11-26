import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Lesson} from "./Lesson";

@Entity("classes")
export class Class extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    className: string;

    @OneToMany(() => Lesson, l => l.class)
    lessons: Lesson[];
}