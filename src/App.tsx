import * as React from 'react';
import './App.css';
import Profile from './component/Profile';
import Counter from './component/Counter';
import TodoList from './component/TodoList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Profile name="스윙스" job="돈까스" />
        <Counter />
        <TodoList />
      </div>
    );
  }
}

export default App;
