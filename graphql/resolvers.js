const Article = require('../model/article');


const resolvers = {
Query : {
articles: async () => await{return Article.find({})}
article: async (parent, args) => await{ return Article.findById(args.id)}
 
},
Mutation: {
createArticle: async (parent, args) =>
 { let article = new Article(arguments.articleInput) 
await 
return article.save() }


}
}

module.exports = resolvers 