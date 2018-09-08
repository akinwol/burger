var express = require("express");
var router = express.Router();
var burgers = require("../models/burger");

router.get("/", function (req, res) {
    burgers.selectAll(function (data) {
        console.log("------LOGGED DATA-----")
        // console.log(data)
        // data.forEach(function(element, index){
        //     if(element.devoured === 0){
               
        //     }
        //     else {
        //         console.log(index)
        //         console.log("--eaten-----")
        //         console.log(element)
        //     }
           
        // });
        var burgerObject = {
            burger: data
        };
        // how does it know that this index is the handlebars index file 
        res.render("index", burgerObject);
    });

});

module.exports = router 