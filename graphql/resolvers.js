const Article = require("../model/article");

const resolvers = {
  Query: {
    articles: async () => {
      return await Article.find({});
    },
    article: async (parent, args) => {
      return await Article.findById(args.id);
    },
  },
  Mutation: {
    createArticle: (parent, args) => {
      let article = new Article(args.articleInput);
      return article.save();
    },
  },
};

module.exports = resolvers;
