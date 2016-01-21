"use strict";
var express = require("express");
var jwt = require('express-jwt');
var mongoose = require("mongoose");
var router = express.Router();
var Question = mongoose.model("Question");
var User = mongoose.model('User');
var auth = jwt({
    userProperty: 'payload',
    secret: 'SecretKey'
});
router.post('/', auth, function (req, res, next) {
    var newQuestion = new Question(req.body);
    newQuestion.createdBy = req['payload'].id;
    newQuestion.save(function (err, question) {
        if (err)
            return next(err);
        User.update({ _id: req['payload'].id }, { $push: { 'books': question._id } }, function (err, result) {
            if (err)
                return next(err);
            res.send(question);
        });
    });
});
module.exports = router;
