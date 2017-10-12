import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  handleClick = () => {
    this.props.dispatch({ type: 'ADD_TASK', payload: 'milk' });
  };
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {this.props.todos.todos.map((todo, index) => (
            <p key={index}>{todo}</p>
          ))}
        </div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(App);
