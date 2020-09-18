const connection = require("../config/connection.js");


const orm = {
    selectAll: function (cb) {
        connection.query(`SELECT * FROM burgers`, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function (burger_name, cb) {
        connection.query(`INSERT INTO burgers (burger_name, devoured) VALUES (?, false)`, [burger_name], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function (id, cb) {
        connection.query(`UPDATE burgers SET burgers.devoured=true WHERE burgers.id=?`, [id], function(err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    deleteOne: function (id, cb)  {
        connection.query(`DELETE FROM burgers WHERE burgers.id=?`, [id], function(err, res) {
            if (err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;

