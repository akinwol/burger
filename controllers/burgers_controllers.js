var express = require("express");
var router = express.Router();
var burgers = require("../models/burger");

router.get("/", function (req, res) {
    burgers.selectAll(function (data) {
        console.log("------LOGGED DATA-----")
        // console.log(data)
     
        var burgerObject = {
            burger: data
        };
        // how does it know that this index is the handlebars index file 
        res.render("index", burgerObject);
    });

});

router.post("/api/burger",function(req,res){
    // console.log(req.body)
    burgers.insert(["burger_name", "devoured"],[req.body.name, req.body.devour], function(result){
        console.log(result)

    })
});

router.put("/api/burger/:id", function(req,res){
    var condition = "id = " + req.params.id;

    // console.log("condition", condition);
    // console.log(req.body)

    burgers.update({
        devoured: req.body.devour
    }, condition, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
});

router.delete("/api/burger/:id", function(req,res){
    var condition = "id = " + req.params.id;
    burgers.delete(condition, function(result){
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
});

module.exports = router 