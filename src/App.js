import "./App.css";

//pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
//components
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/room" component={Rooms} />
          <Route path="/rooms/:thot" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
