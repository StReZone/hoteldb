module.exports = (sequelize,DataTypes) => {
    const User =  sequelize.define("User",{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        email:{
            type:DataTypes.STRING,
        },
        password:{
            type:DataTypes.STRING,
        },
        nama:{
            type:DataTypes.STRING,
        },
        no_ktp:{
            type:DataTypes.STRING,
        },
        tanggal_lahir:{
            type:DataTypes.DATE,
        },
        tempat_lahir:{
            type:DataTypes.STRING,
        },
        jenis_kelamin:{
            type:DataTypes.STRING,
        },
        nomor_telpn:{
            type:DataTypes.STRING,
        },
        alamat:{
            type:DataTypes.TEXT,
        },
    },{
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        tableName: 'User'
    })
    // User.removeAttribute('id');
    return User;
}