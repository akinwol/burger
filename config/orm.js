var connection = require("./connection.js");

const burgerTable = "burgers";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
        arr.push("?");
      }
    
      return arr.toString();
    };

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  };

var orm = {
    selectAll: function(table, callback){
        var query = "SELECT * FROM " + table;
        connection.query(query, function(err, result) {
          callback(result);
        });
    },
    insertOne: function(table, cols,values, cb){
        console.log("This is the values")
        console.log(values)
        var valsLength = printQuestionMarks(values.length)
        var query = `INSERT INTO ${table} (${cols.toString()}) VALUES (${valsLength})`;
       
        console.log(query)
        connection.query(query, values, function(err, result){
            if(err) {
                throw err;
            }
            cb(result)
        })

    },

    updateOne: function(table, objColVals, condition, cb){
        var query = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`
        console.log(query)
        connection.query(query, function(err, result){
            if (err) throw err;
            cb(result)
        })

    },
    delete: function(table,condition,cb){
        var query = `DELETE FROM ${table} WHERE ${condition}`
        connection.query(query, function(error, result){
            if(error) throw error 
            cb(result)
        })
    }
};

module.exports = orm;