import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("user")
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true
    })
    login: string;

    @Column({
        nullable: false
    })
    password: string;
}