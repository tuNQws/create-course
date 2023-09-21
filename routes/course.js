const express = require('express');
const app = express();
const Course = require('../models/Course');

const router = express.Router();

router.get('/course', async (req, res) => {
    try{
        const courses = await Course.find({});
        res.status(200).json(courses);
    } catch(err){
        res.status(400).json({error: "error!!!"});
    }
});

router.post('/course', async (req, res) => {
    try{
        const course = new Course({
            name: req.body.name,
            type: req.body.type,
            price: req.body.price,
            lecturer: req.body.lecturer,
            avg_rating: req.body.avg_rating,
            sectionIds: req.body.sectionIds,
            courseDescriptionId: req.body.courseDescriptionId,
        });
        await course.save();

        res.status(201).json(course);
    } catch(err){
        res.status(400).json({error: "error!!!"});
    }
});

module.exports = router;
