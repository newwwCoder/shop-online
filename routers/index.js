const express =require('express');
const router = express.Router();
const homeController=require('../controllers/index')
router.get('/',homeController.getIndex)
router.use('/user',require('./user'));

module.exports=router;