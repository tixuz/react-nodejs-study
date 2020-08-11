const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: "Title is required",
        minLength: 4,
        maxlength:150
    },
    body: {
        type: String,
        required: "Body is required",
        minLength: 4,
        maxlength:1500
    }
});

module.exports = mongoose.model("Post", postSchema);
// The first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model name.
// Thus, for the example above, the model Post is for the posts collection in the database.