const express = require('express');
const app = express();
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const categoryRoute = require('./routes/blogCategoryRoute');
const blogRoute = require('./routes/blogRoute');
const commentRoute = require('./routes/commentRoute');
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/coding/LYblog/ly-blogs-server/uploads')
  },
  filename: function (req, file, cb) {
    const newname = 'myimage.jpg'
    console.log(file)
    cb(null, Date.now() + file.originalname )
  }
})

const upload = multer({ storage: storage })

app.use(express.json())
app.use(cors())
app.use(express.static('uploads'));

app.use('/apiv1', authRoute)
app.use('/apiv1', categoryRoute)
app.use('/apiv1', blogRoute)
app.use('/apiv1', commentRoute)
app.post('/profile', upload.single('blogimage'), function (req, res, next) {
     console.log(req.file)
     res.send({link: req.file.filename})
  })

app.listen(8000, ()=>{
    console.log("listening on port 8000")
})
