import React from 'react';
import Example from './Example';
import ExampleFun from './ExampleFun';
import ExampleHook from './ExampleHook';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
      <br />
      <Example />
      <br />
      <ExampleFun />
      <br />
      <ExampleHook />
    </div>
  );
}

export default App;
