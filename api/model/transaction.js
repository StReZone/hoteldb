module.exports = (sequelize,DataTypes) => {
    const Transaction =  sequelize.define("t_pesan",{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement: true,
        },
        id_tamu:{
            type:DataTypes.STRING,
        },
        nama:{
            type:DataTypes.STRING,
        },
        telp:{
            type:DataTypes.INTEGER,
        },
        no_ktp:{
            type:DataTypes.STRING,
        },
        id_kategori_kamar:{
            type:DataTypes.STRING,
        },
        no_kamar:{
            type:DataTypes.STRING,
        },
        tgl_cekout:{
            type:DataTypes.DATE,
        },
        tgl_cekin:{
            type:DataTypes.DATE,
        },
        lama:{
            type:DataTypes.STRING,
        },
        total:{
            type:DataTypes.STRING,
        },
        id_user:{
            type:DataTypes.INTEGER,
        },
        kode_transaksi:{
            type:DataTypes.TEXT,
        },
    },{
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        tableName: 't_pesan'
    })
    // User.removeAttribute('id');
    return Transaction;
}