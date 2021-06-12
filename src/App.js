import Navbar from './Components/Home/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './Components/Home/Footer/Footer';
import Body from './Components/Home/Body/Body';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <Body />
          </Route>
          
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
