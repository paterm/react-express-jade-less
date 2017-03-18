let router          = require('express').Router(),
    homeCtrl        = require('../controller/home');

router.get('/', homeCtrl.index);

module.exports = router;