import mongoose from 'mongoose';
import uuid from 'uuid';


const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {type: String, default: uuid.v1},
    name: String,
    age: {type: Number, default: 0}
});

userSchema.index({'$**': 'text'});

const model = mongoose.model('user', userSchema);

export default model;