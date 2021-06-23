import React from 'react';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import { Switch, Route,useLocation } from 'react-router-dom';
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Animation
import { AnimatePresence } from "framer-motion";
const App = () => {
  
  const location = useLocation();

  return (
    <div >
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/"><AboutUs /></Route>
          <Route exact path="/work"><OurWork /></Route>
          <Route path="/work/:id"><MovieDetail /></Route>
          <Route exact path="/contact"><ContactUs /></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
