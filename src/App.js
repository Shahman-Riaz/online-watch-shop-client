import Navbar from './Components/Home/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './Components/Home/Footer/Footer';
import Body from './Components/Home/Body/Body';
import Login from './Components/Login/Login';
import Header from './Components/Home/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route path="/navbar">
            <Navbar />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
