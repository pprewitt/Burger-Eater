const orm = require('../config/orm')

const burger = {
  //show all the burgers
    all: function (cb) {
      orm.all("burgers", function (res) {
        cb(res);
      });
    },

    //add a new burger into the to be eaten pile
    create: function (cols, vals, cb) {
      orm.create("burgers", cols, vals, function (res)  {
        cb(res);
      });
    },
    
    //update burger to be devoured 
    update: function (objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, (res) => {
        cb(res);
      });
    },
    
  };
  
  // Export the database functions for the controller (burgersController.js).
  module.exports = burger;