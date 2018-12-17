import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';

import {todos} from './todos.json';

import TodoForm from './components/TodosForm';
class App extends Component {

  constructor(){
    super();
    this.state = {
      todos
    }
  }

  render() {

    const todos = this.state.todos.map((todo, i) => {
      return (
        
        <div class="col-md-4">
            <div className="card text-center">
              <div className="card-header">
                  { todo.title }
                  <span className="badge badge-pill badge-danger ml-2">
                    {todo.priority}
                  </span>
              </div>

              <div className="card-body">
                  {todo.description}
              </div>

              <div className="card-footer">
                <b>{todo.author}</b>
              </div>
            </div>
        </div>
      )
    })

    return (
      <div className="App">
        <Navigation titulo="Minha Primeira Aplicação"/>
        
        <div className="container">
          <div className="col-md-4">
          
          </div>
          <div className="row mt-4">
          <TodoForm/>
              { todos }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
