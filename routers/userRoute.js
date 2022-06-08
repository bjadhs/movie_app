const express = require('express');
const {createUser} = require('../controllers/userController');

const router = express.Router();

router.get('/', (req,res)=>res.send('User Routes'));

router.post('/create', createUser);

module.exports = router;