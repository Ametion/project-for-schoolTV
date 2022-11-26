import express from "express";
import {AccountService} from "../../Services/AccountService";

const router = express.Router();

router.post("/register", async (req, res) => {
    try{
        const {login, password} = req.body

        if(!login || !password){
            res.status(204).send("cant register without login and password")
        }

        res.status(200).send(await new AccountService().Register(login, password))
        return
    }catch{
        res.status(400).send("cant register account")
    }
})

export {
    router as registerRouter
}