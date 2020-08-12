const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');



router.get('/login', (req, res) => res.render('login'));

router.post('/login', (req, res) => res.render('dashboard'));

router.get('/logout', (req, res) => res.render('logout'));




module.exports = router;

