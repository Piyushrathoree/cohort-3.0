const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.connect("mongodb+srv://01piyush008:D85HDC3IOlfZgSHU@nodebackend.snfot.mongodb.net/todo_db")

const User = new Schema({
  name: String,
  email: {type: String, unique: true},
  password: String
},{ timestamps: true });

const Todo = new Schema({
    userId: ObjectId,
    title: String,
   isCompleted: Boolean
},{ timestamps: true });

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

module.exports = {
    UserModel,
    TodoModel
}