const userController = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/************Read User***************/
exports.readUser = async(req, res) => {
    try{
        const user = await userController.find({});
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

/*************Create User**************/
exports.createUser = async(req, res) =>{
    try{
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
            isAdmin: req.body.isAdmin
        }
        await userController.create(data);
        res.status(200).json('Created With Success!!');
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

/***************Update User*************/
exports.updateUser = async(req, res) =>{
    try{
        const {id} = req.params;
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
            isAdmin: req.body.isAdmin
        }
        await userController.findByIdAndUpdate(id, data);
        res.status(200).json('Update With Success!!');
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

/**************Delete User*************/
exports.deleteUser = async(req, res) =>{
    try{
        const {id} = req.params;
        await userController.findByIdAndDelete(id);
        res.status(200).json('Deleted With Success!!');
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

/*************Login User***********/
exports.login = async(req, res) =>{
    const username = req.body.name;
    const password = req.body.password;

    const users = await userController.find({});

    for(vl of users){
        if(vl.name === username){
            const passwordMatch = await bcrypt.compare(password, vl.password);
            if(passwordMatch){
                const token = jwt.sign({
                    id: vl._id, 
                    name: vl.name,
                    email: vl.email,
                    password: vl.password,
                    isAdmin: vl.isAdmin
                }, 'secret', {expiresIn: '1h'});
                return res.status(200).json({ token });
            }
            else
                console.log('password is not match');
        }
    }

    return res.status(500).json({message: 'Username Or Password Is Wrong!!'});
}