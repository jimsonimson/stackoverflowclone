"use strict";

import express = require("express");
import jwt = require('express-jwt');
let mongoose = require("mongoose");
let router = express.Router();
let Question = mongoose.model("Question");
let User = mongoose.model('User');
let auth = jwt({
  userProperty: 'payload',
  // secret must match the one on the User model, in the genJWT()
  secret: 'SecretKey'
});

// POST: /questions
router.post('/', auth, (req, res, next)=> {
    let newQuestion = new Question(req.body);
    newQuestion.createdBy = req['payload'].id;
    newQuestion.save((err, question) => {
        if (err) return next(err);
        User.update({ _id: req['payload'].id}, { $push: { 'books': question._id } }, (err, result) => {
            if (err) return next(err);
            res.send(question);
        });
    });
});

export = router;
