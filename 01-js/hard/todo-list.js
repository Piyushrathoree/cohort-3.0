/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor(todos) {
        this.todos = [];
    }
    add(todo) {
        if (!todo) {
            throw new error("todo is empty");
        }
        this.todos.push(todo);
    }
    remove(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            this.todos.splice(indexOfTodo, 1);
        }
    }
    update(indexOfTodo, newTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            this.todos[indexOfTodo] = newTodo;
        }
    }
    getAll() {
        return this.todos;
    }
    get(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            return this.todos[indexOfTodo];
        }else{
            return null;
        }
        
    }
    clear() {
        this.todos = [];
    }
}

module.exports = Todo;
