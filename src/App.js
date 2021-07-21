import Navbar from './Components/Home/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Body from './Components/Home/Body/Body';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import WatchByBrand from './Components/Home/BodyWatchCollection/WatchByBrand/WatchByBrand';
import SingleWatch from './Components/Home/BodyWatchCollection/SingleWatch/SingleWatch';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([])
  const [isAdmin, setIsAdmin] = useState({})
  const [selectedService, setSelectedService] = ([])
  const [cart , setCart] = useState([]);

  const cartHandler = (data) => {
    const alreadyAdded = cart.find(crt => crt.id == data.id );
    const newCart = [...cart,data]
    setCart(newCart);
    if(alreadyAdded){
      const reamingCarts = cart.filter(crt => cart.id != data);
      setCart(reamingCarts);
    }else{
      const newCart = [...cart,data]
      setCart(newCart);
    }
   
  }
const cartNumber = cart.length
  return (

  <UserContext.Provider value={[loggedInUser, setLoggedInUser,isAdmin, setIsAdmin, selectedService, setSelectedService ]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route path="/navbar">
            <Navbar/>
          </Route>
          <Route path="/brand/:brandName">
            <Navbar cart={cart}/>
            <WatchByBrand />
          </Route>
          <Route path="/watch/:watchId">
            <Navbar />
            <SingleWatch cartHandler={cartHandler}/>
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
