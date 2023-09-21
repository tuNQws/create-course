const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Course = require("./models/Course");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const courseRoutes = require("./routes/course");
const courseSectionRoutes = require("./routes/course-section");
const courseContentRoutes = require("./routes/course-content");
const courseDescriptionRoutes = require("./routes/course-description");

// Connect database
const connect = async (isHttpRequest = false) => {
    try {
        await mongoose.connect('mongodb+srv://19522476:adgjm.12345@course-create.cve43ye.mongodb.net/course-create',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to DB");
        if (isHttpRequest) return "connected";
    } catch(error) {
        if (isHttpRequest) {
            return error.message;
        }
        throw error;
    }  
}

connect();

app.get('/', async (req, res) => {
    try{
        const courses = await Course.find({});
        res.status(200).json(courses);
    } catch(err){
        res.status(400).json({error: "error!!!"});
    }
});

app.use('/', courseRoutes);
app.use('/', courseSectionRoutes);
// app.use('/course-content', courseContentRoutes);
// app.use('/course-description', courseDescriptionRoutes);

app.listen(4000, () => {
    console.log('Create course on 4000');
});
