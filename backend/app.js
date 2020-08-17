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
//route middelware
app.use(express.json())
app.use('/annonces', annoncesRoute)
app.use('/users', usersRoute)



mongoose.connect(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('connected'))
app.listen(5000)


app.use(express.static('./public'));


app.get('/', (req, res) => res.send('index'));
// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './public',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});


// Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

// Init Upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 3000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('file');

app.post('/image', (req, res) => {
    console.log()
    upload(req, res, (err) => {
        if (err) {
            res.send({ msg: err });
        } else {
            if (req.file == undefined) {
                res.send({ msg: 'Error: No File Selected!' });
            } else {
                res.send(req.file.filename)
            }
        }

    });
});

