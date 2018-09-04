import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './views/Home';
import Buttons from './views/Buttons';
import Typography from './views/Typography';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/typography" component={Typography} />
          <Route exact path="/buttons" component={Buttons} />
        </Switch>
      </div>
    );
  }
}

export default App;



