import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'

import TodoList from './Todo/TodoList'
class App extends Component {
  render() {
    return (
     <TodoList />
    );
  }
}

export default App;
