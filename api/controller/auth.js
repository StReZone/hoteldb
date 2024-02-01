const db = require('../model');
const User = db.user;


const GetAll = async(req, res, next) => {
    let user =  await User.findAll({
        attribute:[`id_user`, `email`]
    });
    res.status(200).json({
        message:'get auth',
        data:user
    })
}

const GetUser = async (payload) => {
    let user =  await User.findOne({
        where:{
            email:payload?.email,
            password:payload?.password
        }
    });
    return user;
}

module.exports= {GetAll, GetUser}