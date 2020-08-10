const express = require('express');
const router = express.Router();
const path = require('path');
const news = require('../controllers/news');
const user = require('../controllers/user');
const verify = require('../utilities/verify');

// Render index.html for documentation
router.get('/', async (req, res) => {
    res.sendFile(path.resolve('views/index.html'));
});

// POST request to fetch news
router.post('/getnews', async (req, res) => {
    if(verify(req)) {
        news.list(req, res);
    } else {
        res.send(200, 'Invalid Request!');
    }
});

// POST request to update user read list
router.post('/updatereadlist', async (req, res) => {
    if(verify(req)) {
        user.update(req, res);
    } else {
        res.send(200, 'Invalid Request!');
    }
});

module.exports = router;
