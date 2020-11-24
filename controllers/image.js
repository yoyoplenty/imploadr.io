var fs = require('fs'),
    path = require('path');
var multer = require('multer')
var upload = multer({ dest: 'public/uploads' })

var viewModel = {
    image: {
        uniqueId: 1,
        title: 'Sample Image 1',
        description: 'This is a sample.',
        filename: 'sample1.jpg',
        views: 0,
        likes: 0,
        timestamp: Date.now()
    },
    comments: [
        {
            image_id: 1,
            email: 'test@testing.com',
            name: 'Test Tester',
            gravatar: 'http://lorempixel.com/75/75/animals/1',
            comment: 'This is a test comment...',
            timestamp: Date.now()
        }, {
            image_id: 1,
            email: 'test@testing.com',
            name: 'Test Tester',
            gravatar: 'http://lorempixel.com/75/75/animals/2',
            comment: 'Another followup comment!',
            timestamp: Date.now()
        }
    ]
};





module.exports = {
    index: function (req, res) {
        res.render('image', viewModel);
    },
    like: function (req, res) {
        res.send('The image:like POST controller');
    },
    comment: function (req, res) {
        res.send('The image:comment POST controller');
    },
    create: function (req, res) {
        console.log(req.body)
        res.send('welcome')
    }
};