const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema({
    name:  {type: String},
    type: {type: String}, // Online / "On-live" / Offline 
    price: {type: Number},
    lecturer: {type: String},
    avg_rating: {type: Number},
    sectionIds: {type: Array(String)},
    // sections: {type: Array({
        // sectionName: {type: String},
        // contentIds: {type: Array(String)},
    // })},
    courseDescriptionId: {type: String},
});

module.exports = mongoose.model('Course', Course);
