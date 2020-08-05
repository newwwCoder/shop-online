const Article=require('../models/article')
exports.getAddArticle=(req,res,next)=>{
    return res.render('article',{
        title:"Add Article"
    })
}

exports.postArticle=(req,res,next)=>{
  console.log(req.body)
    const {name,email,title,description}=req.body;
   const article= new Article({
        name,
       email,
       title,
       description
   })
     article.save()
   .then((result)=>{
     
      return res.redirect('/');
   })
   .catch((err)=>{
     console.log(err)
   })
    
}