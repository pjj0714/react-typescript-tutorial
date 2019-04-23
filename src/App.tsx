import * as React from 'react';
import './App.css';
// import Profile from './component/Profile';
import Counter from './component/Counter';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter />
        {/* <Profile name="스윙스" job="돈까스" /> */}
      </div>
    );
  }
}

export default App;
