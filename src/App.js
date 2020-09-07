import React from 'react';
import './App.css';
import Card from './component/card'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import Main from './container/main/main'
import Info from './container/info/info'
function App() {

  return (
    <div className="App">
      <NavLink to="/">home</NavLink><br />
      <NavLink to="/info">info</NavLink><br />
      <NavLink to="/menu">menu</NavLink><br />
      <Switch>
        <Route path='/' exact render={() => <h1> home</h1>} />
        <Route path='/menu' exact component={Main} />
        <Route path='/info' exact component={Info} />
        <Route render={() => <div><h1>error 404</h1></div>} />
      </Switch>
    </div>
  );
}

export default App;
