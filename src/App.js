import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
