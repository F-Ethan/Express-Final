

module.exports = function(models) {
    models.post.belongsToMany(models.user,
        {
            through: models.userId,
            foreignKey: 'userId'
        });
}