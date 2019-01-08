import React, { Component } from 'react';
import uuid from 'uuid';

import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";



import './App.css';

class App extends Component {
  state = {
    todos: [
        {
          id: uuid.v4(),
          title: 'Take out the trash',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'Dinner with wife',
          completed: true
        },
        {
          id: uuid.v4(),
          title: 'Meeting with boss',
          completed: false
        }
    ]
  };

  // Toggle Complete
  markComplete = (id) => {
     this.setState({
         todos: this.state.todos.map(todo => {
             if (todo.id === id) {
                 todo.completed = !todo.completed
             }
             return todo;
         })
     });
  };

  // Add Todo
  addTodo = (title) => {
      const newTodo = {
          id: uuid.v4(),
          title: title,
          completed: false
      };
      this.setState({
          todos: [...this.state.todos, newTodo]
      });
  };

  // Delete Todo
  delTodo = (id) => {
      this.setState({
          todos: [...this.state.todos.filter(todo => {
              return todo.id !== id;
          })]
      });
  };

  render() {
    return (
      <div className="App">
          <Header />
          <div className="container">
              <AddTodo
                  addTodo={this.addTodo}
              />
              <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
              />
          </div>
      </div>
    );
  }
}

export default App;