const express = require('express');
const router = express.Router();
// <<<<<<< ayushi
// const homeController=require('../controllers/index')
// router.get('/',homeController.getIndex)
router.use('/user', require('./article'));
// =======
const homeController = require('../controllers/index')

router.get('/', homeController.getIndex)

// >>>>>>> master

module.exports = router;