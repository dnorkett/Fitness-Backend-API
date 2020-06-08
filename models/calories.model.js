const mongoose = require('mongoose');

const caloriesSchema = new mongoose.Schema({
    activity: {type: String, required: true, unique: true},
    caloriesPerHour: {type: Number, required: true, default: 0}
},
{ timestamps: true });


module.exports = mongoose.model('Calories', caloriesSchema);