const express=require('express');
const {signUp,login,getCompany,getIndividual, postService, deleteapplied}=require('../controllers/user')
const router=express.Router();

router.post('/signup',signUp);
router.post('/login',login);
router.get('/',getCompany)
router.get('/company/:id',getIndividual)
router.post('/company/:id',postService)
router.get('/deleteapplied/:s_id/:c_id',deleteapplied)

module.exports=router;