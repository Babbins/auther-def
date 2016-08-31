'use strict';

var Sequelize = require('sequelize');
var uri = require('./auth/.databseSecrets.json')["uri"]
var databaseURI = uri;
var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
});

module.exports = db;
