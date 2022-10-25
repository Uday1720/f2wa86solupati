var express = require('express');
var router = express.Router();

/* GET Computation page. */
router.get('/', function(req, res, next) {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    var num3 = Math.floor(Math.random() * 10);
    var atanFunction = Math.atan(num1);
    var expFunction = Math.exp(num2);
    var expm1Function = Math.expm1(num3);
    res.render('computation', 
                { 
                    title: 'Uday Kiran Reddy Solupati computing functions', 
                    num1: num1,
                    num2: num2,
                    num3: num3,
                    atan: atanFunction,
                    exp: expFunction,
                    expm1: expm1Function
                });
});

module.exports = router;