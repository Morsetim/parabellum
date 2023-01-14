import './App.css';
import Signup from 'pages/signup';
import Signin from 'pages/singin';
import Home from 'pages/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/user-signup"> <Signup /></Route>
      <Route path="/user-signin"> <Signin /></Route>
    </Switch>
  </Router>
  );
}

export default App;
