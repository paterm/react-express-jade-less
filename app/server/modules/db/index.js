let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/multitracks');

let db = mongoose.connection;

db.on('error', (err) => {
    console.error('Connection error:', err.message);
});

db.once('open', () => {
    console.log('Connect Database');
});

module.exports = mongoose;