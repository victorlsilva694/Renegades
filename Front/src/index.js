import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/index';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import DashBoard from './Pages/Dashboard/DashBoard';
import Games from './Pages/Games/games'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/login" exact={true} component={Login}/>
        <Route path="/register" exact={true} component={Register}/>
        <Route path="/DashBoard" exact={true} component={DashBoard}/>
        <Route path="/DashBoard/Games" exact={true} component={Games}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
