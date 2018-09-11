var orm = require("../config/orm.js");


var burgers = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            // console.log(res)
            cb(res)
        });
    },
    insert: function(cols, values, cb){
        // console.log("vals---- value")
        // console.log(values)
        orm.insertOne("burgers",cols,values, function(res){
            console.log("vals value")
            console.log(values)
            cb(res)
        });
    },
    update: function(objColVals, condition, cb){
        orm.updateOne("burgers",objColVals, condition, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb){
        orm.delete("burgers", condition, function(res){
            cb(res)
        });
    }
};


module.exports = burgers;
