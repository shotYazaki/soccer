import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
