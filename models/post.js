const mongoose = require('mongoose');
const marked = require('marked');
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const dompurify = createDomPurify(new JSDOM().window)

function sanitizeMarkdown(post) {
    
    if (post.mainBody) {
        post.bodyHtml = dompurify.sanitize(marked(post.mainBody));
    }
}
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
        required : true,
        default : sanitizeMarkdown(mainBody),
    },
});

module.exports = mongoose.model('Post', postSchema);