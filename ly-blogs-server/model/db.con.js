const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/LYblogs').then(() =>{
    console.log('connected to db')
}).catch(err => console.log(err));