const dbConfig = require('../../config/db.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases:false,

        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('Success Connect DB ...');
})
.catch(() => {
    console.log('Erro Connect DB ...')
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('./user.js')(sequelize,DataTypes)
db.transaction = require('./transaction.js')(sequelize,DataTypes)
// db.history = require('./history.js')(sequelize,DataTypes)
// db.profile = require('./profile.js')(sequelize,DataTypes)

db.sequelize.sync()
.then(() =>{
    console.log('sync done ... !')
});

module.exports = db;