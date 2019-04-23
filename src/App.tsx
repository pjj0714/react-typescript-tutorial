import * as React from 'react';
import './App.css';
import Profile from './component/Profile';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Profile name="스윙스" job="돈까스" />
      </div>
    );
  }
}

export default App;
