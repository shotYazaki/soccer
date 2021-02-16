import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Main from './components/Main';

class App extends React.Component {
  render() {
    return (
      <div className="App">

       <Navigation />

       <Main />

      </div>
    );
  }
}

export default App;
