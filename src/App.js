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
import { createContext, useState } from 'react';
import WatchByBrand from './Components/Home/BodyWatchCollection/WatchByBrand/WatchByBrand';
import SingleWatch from './Components/Home/BodyWatchCollection/SingleWatch/SingleWatch';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([])
  const [isAdmin, setIsAdmin] = useState({})
  const [selectedService, setSelectedService] = ([])
  return (

  <UserContext.Provider value={ [loggedInUser, setLoggedInUser,isAdmin, setIsAdmin, selectedService, setSelectedService ]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route path="/navbar">
            <Navbar />
          </Route>
          <Route path="/brand/:brandName">
            <Navbar />
            <WatchByBrand />
          </Route>
          <Route path="/watch/:watchId">
            <Navbar />
            <SingleWatch />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
