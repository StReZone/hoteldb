const db = require('../model');

const Transaction = db.transaction;


const GetAllTrx = async (req, res) => {
  let user =  await Transaction.findAll();
  return user;
}

const postTrx = async (req, res, next) => {
  const payload = req.body;
  try {
    if( Object.keys(payload).length === 0 && payload.constructor === Object){
      res.status(422).json({
        code:422,
        message:'Unprocessable entity'
      })
    }

    await Transaction.create(payload);

    res.status(200).json({
      code:200,
      message:'succes add transaction'
    })
  } catch (error) {
    res.status(400).json({
      code:400,
      message:'error',
      error:error
    })
  }

}

const detailTrxUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    let user =  await Transaction.findAll({
      where:{id_user:id}
    });
    res.status(200).json({
      code:200,
      message:'post auth',
      data:user
    })
  } catch (error) {
    res.status(400).json({
      code:400,
      message:'post auth',
      error:error
    })
  }
}

module.exports= {GetAllTrx, postTrx, detailTrxUser}