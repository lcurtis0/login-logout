const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Dashboard extends Model {}
  
  Dashboard.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'dashboard',
      }
    );
    
    module.exports = Dashboard;