const User = (sequelize, DataTypes) =>{
    return sequelize.define('User', {
        username: DataTypes.STRING,
        useremail: DataTypes.STRING,
        password: DataTypes.STRING
    });
}

module.exports = User;