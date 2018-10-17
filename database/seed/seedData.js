const { Todo } = require('../models.js');

const toDoData = [
  {
    name: "todo 1"
  }, 
  {
    name: "todo 2"
  },
  {
    name: "todo 3"
  }
]

toDoData.forEach(function(todo) {
  new Todo(todo).save((err, newTodo) => {
    if (err) {
      console.error(err)
    }
    console.log(`created ${newTodo}`)
  });
})