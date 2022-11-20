import {dbConnection} from "./Connection";
import {User} from "./Entity/User";

export const UserRepo = dbConnection.getRepository<User>(User)