import todoModel from "../models/todo.model.js";
import express from "express";

const router=express.Router();
router.post('/add',async (req,res)=>{
    try{
        const result=await todoModel.add(req.body);
        res.status(202).json({
            message:"Success",
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            error: "Internal Error"
        })
    }
    
})
router.get('/',async (req,res)=>{
    try{
        const result=await todoModel.findAll();
        res.status(202).json({
            message:"Success",
            data: result
        })
    }catch(err){
        res.status(500).json({
            error: "Internal Error"
        })
    }
})
router.get('/:id', async (req,res)=>{
    try{
        const result=await todoModel.findById(req.params.id);
        res.status(201).json({
            message:"Success",
            data: result
        })
    }catch(err){
        res.status(500).json({
            error: "Internal Error"
        })
    }
})
export default router;