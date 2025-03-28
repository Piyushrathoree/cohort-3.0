const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Import cors

const app = express();

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i;
  }
  return -1;
}

function removeAtIndex(arr, index) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i]);
  }
  return newArray;
}

app.get('/todos', (req, res) => {
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    if (data.length === 0) {
      res.send("You don't have any todos");
      return;
    }

    res.json(JSON.parse(data));
  });
});

app.get('/todos/:id', (req, res) => {
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      res.json(todos[todoIndex]);
    }
  });
});

app.post('/todos', (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), // unique random id
    title: req.body.title,
    description: req.body.description,
    done: false
  };

  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) throw err;
    let todos = [];
    if (data.length > 0) {
      todos = JSON.parse(data);
    }
    todos.push(newTodo);

    fs.writeFile('todos.json', JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo);
    });
  });
});


app.put('/todos/:id', (req, res) => {
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));

    if (todoIndex === -1) {
      res.status(404).send();
    } else {
        todos[todoIndex].done = !todos[todoIndex].done
     

      fs.writeFile('todos.json', JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).json("Todo updated successfully");
      });
    }
  });
});
app.delete('/todos/:id', (req, res) => {
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) throw err;
    let todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));

    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      todos = removeAtIndex(todos, todoIndex);

      fs.writeFile('todos.json', JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).send();
      });
    }
  });
});

// For all other routes, return 404
app.use((req, res, next) => {
  res.status(404).send();
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

module.exports = app;
