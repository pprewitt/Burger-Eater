const express = require("express");
const burger = require('../models/burger.js');
const router = express.Router();

router.get("/", (req, res) =>{
    burger.selectAll((data)=>{
        let object = {
            burgers: data
        };
        console.log(object)
        res.render("index", object);
    })
});


module.exports = router;