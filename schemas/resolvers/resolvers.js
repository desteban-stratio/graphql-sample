import {courseQueryResolvers, courseMutationResolvers} from "./course.resolvers";
import {userQueryResolvers, userMutationResolvers} from "./user.resolvers";
import {postQueryResolvers} from "./post.resolvers";

const resolvers = {
    Query: {
        allCourses: courseQueryResolvers.allCourses,
        course: courseQueryResolvers.course,
        allUsers: userQueryResolvers.allUsers,
        user: userQueryResolvers.user,
        posts: postQueryResolvers.posts,
        post: postQueryResolvers.post,
    },
    Mutation: {
        upvote: courseMutationResolvers.upvote,
        downvote: courseMutationResolvers.downvote,
        addCourse: courseMutationResolvers.addCourse,
        addUser: userMutationResolvers.addUser
    }
}


export default resolvers;

