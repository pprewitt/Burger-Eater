const express = require('express');
const burger = require('../models/burger')

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
//create route to display all the burgers using handlebars
router.get("/", (req, res) => {
  burger.all(function(data) {
    console.log(data)
    let object = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", object);

  });
});

//create route to add a burger to the 'not' devoured list
router.post("/api/burger", (req, res) => {
  console.log(req.body)
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.name, false
  ], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

//create route to update the burger to be devoured if the user clicks on the button
router.put("/api/burger/:id", function (req, res) {
  let condition = "id = " + req.params.id;



  burger.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;