const { Todo } = require('../database/models.js');
// mongoose doesn't use promises, whereas sequelize does
// this is why we do not seen any calls to .then statements in the code below
// All of these callbacks below are invoked after some async operation!
module.exports = { 
  get: (req, res) => {
    Todo.find({}, (err, todos) => {
      if (err) {
        console.log(err);
      } else {
        console.log(todos);
        res.status(200).send(todos);
      }
    })
  },
post: (req, res) => {
  const { name } = req.body;
  new Todo({
    name
  }).save((err, newTodo) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).send(newTodo)
    }
  })
},
delete: (req, res) => {
                    // we typically use req.query in delete and update requests. 
                    // BC there is 
  const { name } = req.query;
  Todo.deleteOne({ name }, (err, deleted) => {
    if (err) {
      console.log(err);
    } else  {
      res.status(202).send('deleted!')
    }
  })
}
}