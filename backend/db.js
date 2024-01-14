const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://kppankaj1843:12345@cluster0.aydmlax.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  // completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
