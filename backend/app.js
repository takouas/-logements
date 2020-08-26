const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')
const multer = require('multer')

const cors = require("cors");
//add cors
app.use(cors());
// import routes
const annoncesRoute = require('./routes/annoncesRoute')
const usersRoute = require('./routes/usersRoute')

//middelware that parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json())
//route middelware

app.use('/annonces', annoncesRoute)
app.use('/users', usersRoute)


// connect to DB

mongoose.connect(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('connected'))
app.listen(5000)


// upload image


app.use(express.static('./public'))
const storage = multer.diskStorage({
    destination: "./public",
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage: storage,
}).array('file');

app.post('/image', (req, res) => {

    upload(req, res, (err) => {
        if (err) {
            console.log("ok")
            res.send({ msg: err });
        } else {

            if (req.file == undefined) {
                res.send({ msg: 'Error: No File Selected!' });
            } else {

                res.send(req.file)
            }
        }

    });
});