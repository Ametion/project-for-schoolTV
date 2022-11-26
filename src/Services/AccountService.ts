import bcrypt from "bcrypt"
import {UsersRepo} from "../Databse/DBRepos";

export class AccountService{
    public async Register(login: string, password: string): Promise<boolean>{
        try{
            if(login == "" && password == ""){
                return false
            }

            const pass = await bcrypt.hash(password, 10)

            const user = UsersRepo.create({
                login: login,
                password: pass
            })

            await user.save()

            return true
        }catch{
            return false
        }
    }

    public async Login(login: string, password: string): Promise<boolean>{
        try{
            if(login == "" && password == ""){
                return false
            }

            const user = await UsersRepo.findOneOrFail({
                where:{
                    login: login
                }
            })

            if(user){
                if(bcrypt.compareSync(password, user.password)){
                    return true
                }
            }

            return false
        }catch{
            return false
        }
    }
}