const express = require('express');
const app = express();
const CourseSection = require('../models/CourseSection');

const router = express.Router();

router.get('/course-section', async (req, res) => {
    try{
        const courseSections = await CourseSection.find({});
        res.status(200).json(courseSections);
    } catch(err){
        res.status(400).json({error: "error!!!"});
    }
});

router.post('/course-section', async (req, res) => {
    try{
        const courseSection = new CourseSection({
            name: req.body.name,
            contentIds: req.body.contentIds,
        });
        await courseSection.save();
        res.status(201).json(courseSection);
    } catch(err){
        res.status(400).json({error: "error!!!"});
    }
});

module.exports = router;
