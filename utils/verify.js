const express = require('express');
const jwt = require("jsonwebtoken")

const verifyJwt = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if(bearerHeader !== undefined){
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    jwt.verify(bearerToken,'123123tt',(err,data) => {
      if(err){
        return res.status(401).json({success:false, message:'token expired, please re login', error:err})
      }
      req.user = data;
      next();
    })
  }else{
    const response ={message:'token not found!'};
    return res.status(401).json(response)
  }
  
}

module.exports = {verifyJwt}