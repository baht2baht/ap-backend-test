const path = require('path');
const User = require('../models/user');
const News = require('../models/news');

exports.list = async (req, res) =>{

        let userNameToFetch = req.body.userName;

        // Get user project
        const userToFecth = await User.findOne({userName: userNameToFetch});

        // Fetch all news that set to be display to all users or specific project
        await News.find({$or: [{project: "All"}, {project: userToFecth.project}]}).exec(function (err, news) {
                if (err) {
                        return res.send(500, err);
                } else {
                        console.log('Success');
                        res.send(200, news);
                }
        });

};
