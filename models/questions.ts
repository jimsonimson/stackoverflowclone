"use strict";
import mongoose = require('mongoose');

let QuestionSchema = new mongoose.Schema({
    title: { type: String, required: true},
    question: { type: String, required: true},
    tags: [{ type: String, required: true}],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }]
});

export let Question = mongoose.model('Question', QuestionSchema);
