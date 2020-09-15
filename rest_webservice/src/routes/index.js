const { Router } = require('express');
const router = Router();

const demo = require('../demo.json');

router.get('/', (req, res) => {
    res.json({"title": "hello everyone"});
});

module.exports = router;