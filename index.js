const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

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

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(4000, () => {
    console.log('Create course on 4000');
});
