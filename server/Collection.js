const mongoose = require('mongoose');

const CollectionSchema = new mongoose.Schema({
    greeting: {
        type: String
    }
})

const Collection = mongoose.model("Collection", CollectionSchema);

module.exports = Collection;