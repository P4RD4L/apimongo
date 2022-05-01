const bcrypt = require("bcryptjs/dist/bcrypt");
const { v4: uuid } = require("uuid");
const Client = require("../models/client");

module.exports = {
    async index(request, response){
        try {
            const client = await Client.find();
            return response.status(200).json({client});
        } catch(err){
            response.status(500).json({error: err.message});
        }
    },

    async store(request, response) {
        const { name, email } = request.body;
        const hashPass = await bcrypt.hash(request.body.password, 8);

        if(!name || !email || !hashPass) {
            return response.status(400).json({ error: "Missing name or mail or password" });
        }
        
        const client = new Client({
            _id: uuid(),
            name,
            email,
            password: hashPass
        })
        try{
            await client.save();
            return response.status(201).json({message: "Client add sucessfully"});
        } catch(err){
            response.status(400).json({error: err.message});
        }
    },

    async update (request, response) {
        const {name, email} = request.body;

        if(!name && !email){
            return response.status(400).json({error: "You must inform a new name or a new email"});
        }
        if(name) response.client.name = name;
        if(email) response.client.email = email;

        try{
            await response.client.save();
            return response.status(200).json({message: "Name updated sucessfully"});
        } catch(err){
            response.status(500).json({error: err.message});
        }
    },

    async delete(request, response){
        try{
            await response.client.remove();
            return response.status(200).json({message: "Client deleted sucessfully"});
        } catch(err){
            return response.status(500).json({error: err.message});
        }
    },

    async updateLike(request, response){
        response.client
    }
};