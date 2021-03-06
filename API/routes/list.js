let express = require ('express');
let router = express.Router ();

let mongooes = require ('../mongodb/operations/UserOperation');
/* GET home page. */
router.get ('/', function (req, res, next) {
    res.header ("Access-Control-Allow-Origin", "*");
    res.header ("Access-Control-Allow-Headers", "X-Requested-With");
    res.header ("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header ("X-Powered-By", ' 3.2.1');
    res.header ("Content-Type", "application/json;charset=utf-8");
    let mongodb = new mongooes ();

    mongodb.findUsers ((err, results) => {
        console.log (results);
        res.json (results);
    });
});

module.exports = router;
