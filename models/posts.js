'use strict';
module.exports = (sequelize, DataTypes) => {
  var Posts = sequelize.define(
    'Posts',
    {
      PostId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      PostTitle: DataTypes.STRING,
      PostBody: DataTypes.STRING,
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );

  return Posts;
};