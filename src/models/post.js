const { gql } = require("apollo-server");

const mockPosts = [
  { id: 1, title: "Hello World", ownerId: 1 },
  { id: 2, title: "Hello Bird", ownerId: 2 },
  { id: 3, title: "Hello Turd", ownerId: 1 }
];

module.exports.postDefs = gql`
  extend type Query {
    posts: [Post] @requireAuth(role: ADMIN)
  }
  type Post {
    id: Int
    title: String
  }

`;

module.exports.postResolvers = {
  Query: {
    posts: () => mockPosts
  }
};
