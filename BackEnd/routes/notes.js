const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        name: 'Naziya Parveen',
        number : '7985084736'
    }
    res.json(obj);
})

module.exports = router;

