const path = require('path');
const User = require('../models/user');

exports.update = async (req, res) =>{

        let userName = req.body.userName;
        let newsId = req.body.newsId;
        let previousReadList = new Array();
        let newReadList = new Array();

        // Get user read list
        const userToUpdate = await User.findOne({userName: userName});
        
        // Set new news read list
        previousReadList = userToUpdate.readNews;
        newReadList = previousReadList;
        newReadList.push(newsId);

        // Set query parameter
        const filter = { userName: userName };
        const update = { readNews: newReadList };

        // Update user read list
        await User.findOneAndUpdate(filter, update).exec(function (err, news) {
                if (err) {
                        return res.send(500, err);
                } else {
                        console.log('Success');
                        res.send(200, 'Updated Successful!');
                }
        });

};
