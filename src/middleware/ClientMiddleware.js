const res = require("express/lib/response");
const { validate: isUuid } = require("uuid");
const Client = require("../models/client");

module.exports = {
    async validateId(request, response, next) {
        const { id } = request.params;

        if(!isUuid(id)){
            return response.status(400).json({error: "Invalid ID"});
        }
        try{
            const client = await Client.findById(id);
            response.client = client;
            if(!client){
                return response.status(404).json({error: "Client not found"});
            }
        } catch(err){
            return response.status(500).json({error: err.message});
        }
        next();
    }
}