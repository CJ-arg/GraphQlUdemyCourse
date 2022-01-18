const { gql } = require("apollo-server");

const typeDefs = gql(`
type Article{
id:ID!,
title : String!
content: String!
}
type Query {
articles: [Article]
article(id:ID!): Article
}
`);
module.exports = typeDefs;