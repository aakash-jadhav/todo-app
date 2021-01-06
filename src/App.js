import React, { Component } from 'react'
import Header from './components/Header'
import Todos from './components/Todos'
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
export default class App extends Component {
  state = {
    todos: [
      {
        title: 'Take out the trash',
        id: uuidv4(),
        completed: false
      },
      {
        title: 'Complete assignments',
        id: uuidv4(),
        completed: false
      },
      {
        title: 'Watch a movie',
        id: uuidv4(),
        completed: true
      }
    ]
  }
  //Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  //Add Todo

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo} />
        </div>
      </div>
    )
  }
}
