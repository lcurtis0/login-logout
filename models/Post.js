const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// This is meant for Post to be made 

Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING, //Need to add description limit
        allowNull: false,
      }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
      }
    );
    
    module.exports = Post;