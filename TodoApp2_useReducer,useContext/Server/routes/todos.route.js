import todoModel from "../models/todo.model.js";
import express from "express";

const router = express.Router();
router.get('/', async (req, res) => {
    console.log(req);
    try {
        const result = await todoModel.findAllByUserID(req.query.id);
        res.status(202).json({
            message: "Success",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            error: "Internal Error"
        })
    }
})
router.post('/', async (req, res) => {
    try {
        const result = await todoModel.add(req.body);
        res.status(202).json({
            message: "Success",
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Internal Error"
        })
    }

})

router.get('/:id', async (req, res) => {
    try {
        const result = await todoModel.findById(req.params.id);
        res.status(201).json({
            message: "Success",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            error: "Internal Error"
        })
    }
})
router.patch('/:id', async (req, res) => {
    try {
        const result = await todoModel.patch(req.params.id, req.body);
        res.status(201).json({
            message: "Success",
            affected: result
        })
    } catch (err) {
        res.status(500).json({
            error: "Internal Error"
        })
    }
})
export default router;