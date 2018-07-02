const { gql } = require("apollo-server");
const _ = require("lodash");
const { postDefs, postResolvers } = require("./models/post.js");

module.exports.typeDefs = gql`
  enum Role {
    ADMIN
    USER
  }
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  ${postDefs}
`;

module.exports.resolvers = _.merge(postResolvers);