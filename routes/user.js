const express=require('express');
const {signUp,login,getCompany}=require('../controllers/user')
const router=express.Router();

router.post('/signup',signUp);
router.post('/login',login);
router.get('/',getCompany)

module.exports=router;