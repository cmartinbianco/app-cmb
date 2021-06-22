const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    descr:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    dateOfBirth:{
        type:Date,
        default:Date.now
    },
    locations:{
        type:[String],
        require:true
    },
    onSite:{
        type:Boolean,
        require:true
    }
});

module.exports = mongoose.model('Products', PostSchema);