import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './views/Home';
import Buttons from './views/Buttons';
import Typography from './views/Typography';
import Checkout from './views/Checkout';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/typography" component={Typography} />
        <Route exact path="/buttons" component={Buttons} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    );
  }
}

export default App;



