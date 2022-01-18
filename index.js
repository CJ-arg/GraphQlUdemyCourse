const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const PORT = 4000;
const URL = "mongodb://localhost:27017/testDB";

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("data base connection is succesfull");
});
mongoose.connection.on("error", () => {
  console.log("Error while connecting data base ");
});

const server = new ApolloServer({ typeDefs, resolvers });
server.listen(PORT).then(function ({ url }) {
  console.log(`Server started al ${url}`);
});
