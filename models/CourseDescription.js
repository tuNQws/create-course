const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseDescription = new Schema({
    learnThings: {type: Array(String)},
    requirements: {type: Array(String)},
    description: {type: String},
});

module.exports = mongoose.model('CourseDescription', CourseDescription);
