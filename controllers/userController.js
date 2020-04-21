const Jwt = require('../helpers/jwt');
const checkPass = require('../helpers/hashPassword')
const User = require('../models/user');
const hash = require('../helpers/hashPassword')

class UserController {
    static async register(req, res, next) {
        try {       
            const result = await User.findOne({
                email: req.body.email
            })
            if(result) {
                res.status(400).json({
                    message: "Your email address has been registered"
                })
            }  else {
                req.body.password = hash.hashPassword(req.body.password)
                const user = new User(
                   req.body
                )
                const result = await user.save()  
                const token = Jwt.generateToken({
                    id: result._id,
                    email: result.email
                })          
                res.status(201).json({
                    token
                })
            }
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async login(req, res, next) {
        try {
            let { email, password } = req.body
            const result = await User.findOne({
                email
            })
            if (result) {
                password = checkPass.comparePassword(password, result.password)
                if(password) {
                    const token = Jwt.generateToken({
                        id: result._id,
                        email: result.email
                    })
                    res.status(200).json({
                        token
                    })
                } else {
                    res.status(404).json({
                        message: "Email or password is wrong"
                    })
                }
            } else {
                res.status(404).json({
                    message: "Your email address is not registered"
                })
            }
        } catch (error) {
            res.status(400).json(error)
        }
    }

}

module.exports = UserController