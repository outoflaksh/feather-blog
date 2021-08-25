const mongoose = require('mongoose');
const marked = require('marked');
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const dompurify = createDomPurify(new JSDOM().window)

const postSchema = new mongoose.Schema({
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
    },
    bodyHtml : {
        type: String,
        required: true,
    },
    coverImageSource : {
        type : String,
        required : true,
    }
});

postSchema.pre('validate', function(next) {
    if (this.mainBody) {
        this.bodyHtml = dompurify.sanitize(marked(this.mainBody));
    };

    if (!this.coverImageSource) {
        this.coverImageSource = "https://source.unsplash.com/ilVYjf0J378/";
    }
    next();
});

module.exports = mongoose.model('Post', postSchema);