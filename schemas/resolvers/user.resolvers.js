import userModel from "../../models/user";


const allUsers = (root, {searchTerm}) => {
    /*return coursesData;*/
    if(searchTerm !== ''){
        return userModel.find({$text: {$search: searchTerm}}).sort({age: 'desc'});
    }
    else {
        return userModel.find().sort({age: 'desc'});
    }
};

const user =  (root, {id}) => {
    /*return coursesData.filter(course => {
        return course.id === id;
    })[0];*/
    /*return courseModel.findOne({id: id});*/

    return userModel.findOne({id: id});
};

const addUser = (root, {name, age}) => {
    const user = new userModel(
        {
            name: name,
            age: age
        }
    );
    return user.save();
}


export const userMutationResolvers = {
    addUser
};

export const userQueryResolvers = {
    allUsers,
    user
};