const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./schema.js");
const requireAuthDirective = require("./directives/requireAuthDirective");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    requireAuth: requireAuthDirective
  }
});

server.listen(3000).then(({ url }) => console.log(`🚀 Server ready at ${url}`));
