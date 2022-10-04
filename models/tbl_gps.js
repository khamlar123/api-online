'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_gps extends Model {}
  tbl_gps.init({
    lat: DataTypes.DOUBLE,
    lng: DataTypes.DOUBLE,
    active: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tbl_gps',
  });
  return tbl_gps;
};