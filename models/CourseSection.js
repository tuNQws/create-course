const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSection = new Schema({
    name:  {type: String},
    contentIds: {type: Array(String)}, 
});

module.exports = mongoose.model('CourseSection', CourseSection);
