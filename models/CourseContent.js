const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseContent = new Schema({
    name:  {type: String},
    length: {type: Number},
    type: {type: String}, // video / text
    videoSrc: {type: String},
});

module.exports = mongoose.model('CourseContent', CourseContent);
