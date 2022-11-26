import express from "express";
import {AccountService} from "../../Services/AccountService";

const router = express.Router();

router.post("/login", async (req, res) => {
    try{
        const {login, password} = req.body

        if(!login || !password){
            res.status(204).send("cant login without login and password")
        }

        res.status(200).send(await new AccountService().Login(login, password))
        return
    }catch{
        res.status(400).send("cant login to account")
    }
})

export {
    router as loginRouter
}