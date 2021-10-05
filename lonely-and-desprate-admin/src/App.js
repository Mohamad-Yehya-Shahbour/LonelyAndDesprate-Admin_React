import './App.css';
import login from './views/login.js';
import signup from './views/signup.js';
import home from './views/home.js';
import {Switch, Route} from 'react-router-dom';
import { Container } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
    <Container maxWidth="md">
      <div className="app">
        <Switch>
          <Route path="/signup" exact component={signup}/>
          <Route  path="/" exact component={login}/>
          <Route  path="/home"  component={home}/>
        </Switch>
      </div>
    </Container>
    </>
  );
}

export default App;
