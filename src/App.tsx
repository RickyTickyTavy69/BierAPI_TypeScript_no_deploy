import React, {useEffect, useState} from 'react';
import useRequest from "./hooks/useRequest";
import {BrowserRouter as Router} from "react-router-dom";
import useRoutes from "./hooks/useRoutes";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";

function App() {

  const routes = useRoutes();

  return (
      <Router>
        <div className="App">
          {routes}
        </div>
        <Navbar/>
      </Router>
  );
}

export default App;
