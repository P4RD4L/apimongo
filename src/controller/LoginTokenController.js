const Client = require('../models/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('../config/auth');

class LoginTokenController{
    async index(req, res){
        const { token } = req.body;
        const tokenExist = await Client.findOne({ email });

        if(!clientExist){
            return res.status(400).json({
                error: true,
                message: "Usuário não encontrado"
            })
        }
        if(!(await bcrypt.compare(password, clientExist.password,))) {
            return res.status(400).json({
                error: true,
                message: "Senha não confere"
            })
        }
        return res.status(200).json({
            name: clientExist.name,
            email: clientExist.email,
            token: jwt.sign(
                {id: clientExist._id},
                config.secret,
                {expiresIn: config.expireIn}
            )
        })
    }
}

module.exports = new LoginTokenController();