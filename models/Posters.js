module.exports = (sequelize, DataTypes) => {
    const Poster = sequelize.define('Poster', {
        userId: DataTypes.STRING,
        poster: DataTypes.STRING,
        gameName: DataTypes.STRING
    }, {});
    Poster.associate = function (models) {
        Poster.belongsTo(models.User, { foreignKey: 'userId' })
    };
    return Poster;
};