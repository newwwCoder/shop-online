const Article = require('../models/article')
const { roles } = require('../roles');

exports.grantAccess = function (action, resource) {
  return async (req, res, next) => {
    try {
      const permission = roles.can(req.body.role)[action](resources);
      if (!permission.granted) {
        return res.status(401).json({
          error: "You don't have enough permission to perform the action"
        });
      }
      next()
    } catch (error) {
      next(error);
    }
  }
}

exports.getAddArticle = (req, res, next) => {
  return res.render('article', {
    title: "Add Article"
  })
}

exports.postArticle = (req, res, next) => {
  console.log(req.body)
  const { name, email, title, description } = req.body;
  const article = new Article({
    name,
    email,
    title,
    description
  })
  article.save()
    .then((result) => {

      return res.redirect('/');
    })
    .catch((err) => {
      console.log(err)
    })

}

exports.updateArticle = async (req, rers, next) => {
  try {
    const update = req.body
    const articleId = req.params.articleId;
    await Article.findByIdAndUpdate(articleId, update);
    const article = await Article.findById(articleId)
    res.status(200).json({
      data: article,
      message: 'Article has been updated'
    })
  } catch (error) {
    next(error)
  }
}

exports.deleteArticle = async (req, res, next) => {
  try {
    const articleId = req.params.articleId;
    await Article.findByIdAndDelete(articleId);
    res.status(200).json({
      data: null,
      message: 'Article has been deleted'
    });
  } catch (error) {
    next(error)
  }
}