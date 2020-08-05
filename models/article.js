const mongoose =require('mongoose');

const Schema= mongoose.Schema;
const ArticleSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    title:{
       type:String,
       required:true
    },
    description:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
module.exports=mongoose.model('Article',ArticleSchema);