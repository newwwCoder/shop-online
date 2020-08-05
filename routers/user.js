const express =require('express');
const router = express.Router();
const userController=require('../controllers/user')
router.get('/add-article',userController.getAddArticle)

router.post('/add-article',userController.postArticle)


module.exports=router;