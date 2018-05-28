import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers/resolvers';

import Course   from './types/course'
import Post   from './types/post'
import User   from './types/user'


const SchemaDefinition = `

    type Query {
        allCourses(searchTerm: String): [Course]
        course(id: String!): Course
        allUsers(searchTerm: String): [User]
        user(id: String!): User
        posts: [Post!]!
        post(id: ID!): Post
    }
    
    type Mutation {
        addCourse(title: String!, author: String!, description: String, topic: String!, url: String): Course
        addUser(name: String!, age: Int): User
        upvote(id: String!): Course
        downvote(id: String!): Course
    }
    
    schema {
        query: Query
        mutation: Mutation
    }
   
`;

const schema = makeExecutableSchema({
    typeDefs: [SchemaDefinition, User, Post, Course],
    resolvers: resolvers
})

export default schema