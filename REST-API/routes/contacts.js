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
        for (let key in items) {
            let item = items[key]
            console.log(`CONTACTS: RETURNED: Name: ${item.Name}, Telephone: ${item.Telephone}, Adress: ${item.Adress}, Email: ${item.Email}, BirthDate: ${item.BirthDate}`)
        }
    });
});

// POST (CREATE A NEW CONTACT IN THE API)
router.post('/', function (req, res, next) {
    db.insert(req.body, function (err, item) {
        res.json(item);
        console.log(`CONTACTS: CREATED: Name: ${item.Name}, Telephone: ${item.Telephone}, Adress: ${item.Adress}, Email: ${item.Email}, BirthDate: ${item.BirthDate}`)
    });
});

// PUT (UPDATES THE ITEM IN THE DB)
router.put('/', function (req, res, next) {
    var item = req.body;
    db.update({ _id: item._id }, item, {}, function (err) {
        res.json(item);
        console.log(`CONTACTS: UPDATED: Name: ${item.Name}, Telephone: ${item.Telephone}, Adress: ${item.Adress}, Email: ${item.Email}, BirthDate: ${item.BirthDate}`)
    });
});

// DELETE (EXCLUDE AN CONTACT FROM THE LIST)
router.delete('/', function (req, res, next) {
    var item = req.body;
    db.remove({ _id: item._id }, {}, function (err) {
        res.json(item);
        console.log(`CONTACTS: DELETED: Name: ${item.Name}, Telephone: ${item.Telephone}, Adress: ${item.Adress}, Email: ${item.Email}, BirthDate: ${item.BirthDate}`)
    });
});

module.exports = router;