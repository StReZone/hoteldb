const express = require('express');
const router = express.Router();
const {postTrx, detailTrxUser} =  require('../controller/transaction');
const {verifyJwt} = require('../../utils/verify')


router.post('/add',verifyJwt,postTrx)

router.get('/history/:id',verifyJwt, detailTrxUser)

// router.delete('/:id', verifyJwt, detailTrxUser)

module.exports = router;