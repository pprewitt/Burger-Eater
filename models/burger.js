const orm = require('../config/orm')

const burger = {
  //show all the burgers
    selectAll: function (cb) {
      orm.selectAll(function (res) {
        cb(res);
      });
    },

    //add a new burger into the to be eaten pile
    insertOne: function (burger_name, cb) {
      orm.insertOne(burger_name, (res) => {
        cb(res);
      });
    },
    
    //update burger to be devoured 
    updateOne: function (objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, (res) => {
        cb(res);
      });
    },
    
  };
  
  // Export the database functions for the controller (burgersController.js).
  module.exports = burger;