let controller = {
    index(req, res) {
        res.render('home.jade', {
            title: 'Fibonacci'
        });
    }
};

module.exports = controller;