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
    createArticle: async (parent, args) => {
      let article = new Article(args.articleInput);
      return await article.save();
    },
    updateArticle: async (parent, args) => {
      return await Article.findByIdAndUpdate(args.id, args.articleInput, {
        new: true,
      });
    },
    deleteArticle: async (parent, args) => {
      return await Article.findByIdAndDelete(args.id);
    },
  },
};
module.exports = resolvers;
