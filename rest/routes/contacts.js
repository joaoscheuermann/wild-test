var express = require('express');
var router = express.Router();

var clientsData = require('../db/clients.json');
var Datastore = require('nedb');
var db = new Datastore();
db.insert(clientsData);

// GET (RETURNS ALL THE CONTACTS IN THE API)
router.get('/', function (req, res, next) {
    db.find(req.query, function (err, items) {
        res.json(items);
    });
});

// POST (CREATE A NEW CONTACT IN THE API)
router.post('/', function (req, res, next) {
    db.insert(req.body, function (err, item) {
        res.json(item);
    });
});

// PUT (UPDATES THE ITEM IN THE DB)
router.put('/', function (req, res, next) {
    var item = req.body;
    db.update({ _id: item._id }, item, {}, function (err) {
        res.json(item);
    });
});

// DELETE (EXCLUDE AN CONTACT FROM THE LIST)
router.delete('/', function (req, res, next) {
    var item = req.body;
    db.remove({ _id: item._id }, {}, function (err) {
        res.json(item);
    });
});

module.exports = router;