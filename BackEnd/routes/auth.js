const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        name: 'Naziya',
        number : '6387791414'
    }
    res.json(obj);
})

module.exports = router;
