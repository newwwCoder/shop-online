const express =require('express');
const router = express.Router();
const homeController=require('../../online/shop-online/controllers/index')

router.get('/',homeController.getIndex)


module.exports=router;