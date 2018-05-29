import courseModel from "../../models/course";


const allCourses = (root, {searchTerm}) => {
    /*return coursesData;*/
    if(searchTerm !== ''){
        return courseModel.find({$text: {$search: searchTerm}}).sort({voteCount: 'desc'});
    }
    else {
        return courseModel.find().sort({voteCount: 'desc'});
    }
};


const course = (root, {id}) => {
    /*return coursesData.filter(course => {
        return course.id === id;
    })[0];*/
    /*return courseModel.findOne({id: id});*/

    return courseModel.findOne({id: id});
};

const upvote = (root, {id}) => {
    /*const course = coursesData.filter(course => {
        return course.id === id;
    })[0];
    course.voteCount++;
    return course;*/

    return courseModel.findOneAndUpdate(
        {id: id},
        { $inc: {"voteCount": 1}},
        { new: true}
    );
};

const  downvote =(root, {id}) => {
    /* const course = coursesData.filter(course => {
         return course.id === id;
     })[0];
     course.voteCount--;
     return course;*/

    return courseModel.findOneAndUpdate(
        {id: id},
        { $inc: {"voteCount": -1}},
        { new: true}
    );
};

const addCourse = (root, {title, author, description, topic, url}) => {
    const course = new courseModel(
        {
            title: title,
            author: author,
            description: description,
            topic: topic,
            url: url
        }
    );
    return course.save();
};

export const courseMutationResolvers = {
    upvote,
    downvote,
    addCourse
};

export const courseQueryResolvers = {
    allCourses,
    course
};