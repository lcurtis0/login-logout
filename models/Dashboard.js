const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Dashboard extends Model {}
  
  // all 
  Dashboard.init(
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
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'dashboard',
      }
    );
    
    module.exports = Dashboard;