let express        = require('express'),
    app            = express(),
    mongoose       = require('./modules/db'),
    bodyParser     = require('body-parser'),
    cookieParser   = require('cookie-parser'),
    session        = require('express-session'),
    MongoStore     = require('connect-mongo')(session),
    port           = 555,
    router         = require('./modules/router/index'),
    path           = require('path'),
    server         = require('http'),
    http = server.createServer(app);
    //socket         = require('./modules/socket/index'),
    // passport       = require('passport');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cookieParser());
app.use(session({
    secret: 'asdpqkjiio142380jwfbh21uihfh92',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use('/', express.static(path.join(__dirname, '../../public')));
app.use('/', router);
app.use('/font-awesome', express.static(path.join(__dirname, '../../node_modules/font-awesome')));
app.set('view engine', 'jade');

http.listen(port, () => {
    console.log(`listen port: ${port}`);
});

// app.use(passport.initialize());
// app.use(passport.session());
// socket.start(http);

module.exports = app;