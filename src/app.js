const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./schema.js");
const requireAuthDirective = require("./directives/requireAuthDirective");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    requireAuth: requireAuthDirective
  },
  //Comment or Uncomment to test the hard coded authorization
  context: ({ req }) => ({
    req: Object.assign({}, req, {
      user: {
        id: 1,
        email: "bill.adama@battlestargalactica.space",
        role: ["USER"]
      }
    })
  })
});

server.listen(3000).then(({ url }) => console.log(`🚀 Server ready at ${url}`));
