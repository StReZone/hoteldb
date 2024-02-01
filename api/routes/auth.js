const express = require('express');
const router = express.Router();
const {GetAll, GetUser} =  require('../controller/auth');
var jwt = require('jsonwebtoken');
const {verifyJwt} = require('../../utils/verify')

router.get('/profile', verifyJwt, GetAll)

router.post('/login', async(req, res, next) => {
  if(!req.body.email || !req.body.password){
    res.status(422).json({
      code:422,
      message:'Bad Format',
      error:error
    })
  }
  const payload = {
    email :req.body.email,
    password :req.body.password,
  }
  try {
    const user = await GetUser(payload);
    console.log('user', user)
    if(!user){
      res.status(200).json({
        code:200,
        message:'User Not Found'
      })
    }
    var token = jwt.sign({ foo: user }, '123123tt');
    res.status(200).json({
      code:200,
      message:'Success Login',
      data:{
        token:token
      }
    })
  } catch (error) {
    res.status(400).json({
      code:400,
      message:'error auth',
      error:error
    })
  }

});

router.post('/add', (req, res, next) => {

  try {
    res.status(200).json({
      message:'post auth'
    })
  } catch (error) {
    res.status(400).json({
      message:'post auth',
      error:error
    })
  }

})

router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message:`patch auth id: ${id}`
  })
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message:`delete auth id: ${id}`
  })
})

module.exports = router;