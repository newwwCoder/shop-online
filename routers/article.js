const express = require('express');
const router = express.Router();
const userController = require('../controllers/article')
//const userController = require('../controllers/user')
router.get('/add-article', userController.grantAccess('readAny', 'article'), userController.getAddArticle);

router.post('/add-article', userController.grantAccess('createAny', 'article'), userController.postArticle);

router.put('/:articleId', userController.grantAccess('updateAny', 'article'), userController.updateArticle);

router.delete('/:articleId', userController.grantAccess('deleteAny', 'article'), userController.deleteArticle);


module.exports = router;