import express from "express";
import accounts from "./accounts.json" assert {type:"json"};

const router=express.Router();

router.get('/',(req, res)=>{
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(accounts));
});

export default router;