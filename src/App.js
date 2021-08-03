import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/index';
import Login from './Pages/Login/Login' 

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
