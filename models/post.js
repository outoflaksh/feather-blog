const mongoose = require('mongoose');

const postSchema = new mongoos.Schema({
    title : {
        required : true,
        type : String,
    },
    subtitle : {
        required : true,
        type: String,
    },
    mainBody : {
        required : true,
        type : String,
    },
    createdAt : {
        type : Date,
        default : Date.now,
    }
})