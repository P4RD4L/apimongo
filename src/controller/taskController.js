const { v4: uuid } = require("uuid");
const Task = require("../models/task")

module.exports = {
    async index(request, response){
        try {
            const tasks = await Task.find();
            return response.status(200).json({tasks});
        } catch(err){
            response.status(500).json({error: err.message});
        }
    },

    async store(request, response) {
        const { task, owner } = request.body;

        if(!task) {
            return response.status(400).json({ error: "Missing task." });
        }

        if(!owner) {
            return response.status(400).json({ error: "Missing owner." });
        }
        
        const tasks = new Task({
            _id: uuid(),
            task,
            owner
        })
        try{
            await tasks.save();
            return response.status(201).json({message: "Task add sucessfully"});
        } catch(err){
            response.status(400).json({error: err.message});
        }
    },
};