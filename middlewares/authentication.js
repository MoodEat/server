const jwt = require('jsonwebtoken');
const User = require('../models/user');

function authentication(req, res, next) { 
    try {   
        const token = req.headers.token
        const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    if(token){
        User.findOne({
            email: decoded.email
        })
            .then(result => {
                req.decoded = decoded
                next()
            })
            .catch(err => {                
                res.status(404).json({
                    message: "You are not authenticated"
                })
            })
        } 

    } catch(err) {                
        res.status(404).json({
            message: "Please login first"
        })
    }
     
}

module.exports = authentication