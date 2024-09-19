const express = require('express');
const router = express.Router();

//Rutas

router.get('',(req, res) => {
    const locals = {
        title: "blog de nodejs",
        description: "mi primer blog con nodejs y express"
    }

     res.render('index', {locals});
});
router.get('/about',(req, res) => {
    res.render('about');
});
   
module.exports = router;