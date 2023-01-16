import './App.css';
import Signup from 'pages/signup';
import Signin from 'pages/singin';
import Home from 'pages/home';
import ProtectedRoute from 'ProtectedRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/"><Signup /></Route>
      <Route path="/user-signup"> <Signup /></Route>
      <Route path="/user-signin"> <Signin /></Route>
      <ProtectedRoute exact path="/home"><Home /></ProtectedRoute>
    </Switch>
  </Router>
  );
}

export default App;
