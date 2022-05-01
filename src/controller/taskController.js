const { v4: uuid } = require("uuid");
const Task = require("../models/task")

module.exports = {
    async store(request, response) {
        const { task } = request.body;

        if(!task) {
            return response.status(400).json({ error: "Missing task." });
        }
        
        const tasks = new Task({
            _id: uuid(),
            task,
        })
        try{
            await tasks.save();
            return response.status(201).json({message: "Task add sucessfully"});
        } catch(err){
            response.status(400).json({error: err.message});
        }
    },
};