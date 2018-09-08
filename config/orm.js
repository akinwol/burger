var connection = require("./connection.js");

const burgerTable = "burgers";

var orm = {
    selectAll: function(table, callback){
        var query = "SELECT * FROM " + table;
        connection.query(query, function(err, result) {
          callback(result);
        });
    },
    insetOne: function(value, cb){
        var query = "INSERT INTO burgers (burger_name, devoured)"

    },

    updateOne: function(){

    }
}

module.exports = orm;