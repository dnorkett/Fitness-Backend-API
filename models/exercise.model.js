const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
    calories: {type: Number, required: true}
    }, 
    { timestamps: true});


module.exports = mongoose.model('Exercise', exerciseSchema);