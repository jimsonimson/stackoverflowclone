"use strict";
var mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    question: { type: String, required: true },
    tags: [{ type: String, required: true }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }]
});
exports.Question = mongoose.model('Question', QuestionSchema);
