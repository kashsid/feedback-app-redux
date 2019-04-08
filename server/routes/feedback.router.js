const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
// to get data from server
router.get("/", (req, res) => {
  console.log("GET /feedback");
  pool
    .query('SELECT * from "feedback" order by id Desc;')
    
    
    .then(result => {
      console.log("in GET method");
      res.send(result.rows);
    })
    .catch(error => {
      console.log("Error GET /feedback", error);
      res.sendStatus(500);
    });
});
// POST data in Database

// INSERT INTO "feedback"("feeling", "understanding", "support", "comments")
// VALUES(4, 4, 5, 'Doing Great!');
router.post("/", (req, res) => {
  const feedback = req.body;
  console.log(`in router.post...`, feedback);
    // Query to insert data will go here
  let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;

  pool
    .query(sqlText, [
      Number(feedback.feeling),
      Number(feedback.understanding),
      Number(feedback.support),
      feedback.comments
    ])
    .then(response => {
      console.log(`POST successful!`);
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Could not add feedback to DB`, error);
      res.sendStatus(500);
    });
});


router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  const sqlText = `DELETE FROM "feedback" WHERE "id" = $1;`;
console.log('in Delete ');

  pool.query(sqlText, [id])
    .then(() => {
      res.sendStatus(200);
    }).catch((error) => {
      console.log(`Error deleting feedback entry:`, error);
      res.sendStatus(500);
    })
}); // END Delete Route
module.exports = router;
