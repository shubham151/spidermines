const express = require('express');
const router = express.Router();



router.get('/', (req, res, next) => {
    console.log("In middleware 3");
    res.send('<h1>hello</h1>')
});


module.exports = router;