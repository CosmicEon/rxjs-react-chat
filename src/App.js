import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FirstPerson, SecondPerson, PersonSwitcher } from './components';

const App = () => (
  <BrowserRouter>
    <>
      <PersonSwitcher />
      <Switch>
        <Route exact path="/" component={FirstPerson} />
        <Route exact path="/first-person" component={FirstPerson} />
        <Route exact path="/second-person" component={SecondPerson} />
      </Switch>
    </>
  </BrowserRouter>
)

export default App;
