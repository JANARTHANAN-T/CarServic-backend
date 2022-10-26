const jwt=  require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User=  require('../models/user.js')
const { json } = require('express')
 
module.exports.signUp = async(req,res)=>{
    const {email,company,year,lat,long,password} = req.body
    try {
        const existinguser=await User.findOne({email})
        if(existinguser){
            return res.status(400).json({message:'User already found..'})
        }
        const hashPassword = await bcrypt.hash(password,12);
        const newUser=new User({email,company,year,lat,long,password:hashPassword})
        await newUser.save();
        const token = jwt.sign({email:newUser.email},'token',{expiresIn:'1h'})
        const c=await User.find({})
        res.status(200).json(c)
    } catch (err) {
        res.status(500).json('Something went worng...')
    }
}

module.exports.login = async(req,res) =>{
    const {email,password} = req.body;
    try{
        const existinguser = await User.findOne({email})
        if(!existinguser){
            return res.status(404).json({message:"User not found..."})
        }
        const isPasswordCrt = await bcrypt.compare(password,existinguser.password)
        if(!isPasswordCrt){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const token = jwt.sign({email:existinguser.email},'token',{expiresIn:'48h'})
        res.status(200).json({result:existinguser,token})
    }catch(err){
        res.status(500).json(err.message)
    }
}

module.exports.getCompany = async(req,res) =>{
    try{
        const company=await User.find({})
        res.status(200),json(company)
    }catch(err){
        res.status(500).json({msg:"Internal Server Error"})
    }
}