import {TeachersRepo} from "../Databse/DBRepos";
import {Teacher} from "../Databse/Entity/Teacher";

export class TeacherService{
    public async AddTeacher(firstName: string, secondName: string): Promise<boolean>{
        try{
            if(!firstName || !secondName){
                return false;
            }

            const teacher = TeachersRepo.create({
                firstName: firstName,
                secondName: secondName
            })

            await teacher.save()

            return true
        }catch{
            return false
        }
    }

    public async RemoveTeacher(teacherId: number): Promise<boolean>{
        try{
            const teacher = await TeachersRepo.findOneOrFail({
                where: {
                    id: teacherId
                }
            })

            await teacher.remove()

            return true
        }catch{
            return false
        }
    }

    public async GetTeacher(id: number): Promise<Teacher | never>{
        try{
            return await TeachersRepo.findOneOrFail({
                where: {
                    id: id
                }
            })
        }catch{
            throw new Error("some error")
        }
    }
}