const express =require('express');

const router= express.Router();

const apiroutes= require('./v1/index');
router.use('/v1', apiroutes);

module.exports = router;