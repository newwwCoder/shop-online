const Article=require('../models/article')

exports.getIndex=(req,res,next)=>{
    Article.find({})
    .then(articles=>{
        console.log(articles);
        res.render('home',{
            title:"shop|home",
             articles:articles
        })
    })
    .catch((err)=>{
        console.log(err);
    })
   
}


