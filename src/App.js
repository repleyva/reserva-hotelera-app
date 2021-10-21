import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchPage} />
      </Switch>
			<Footer/>
    </Router>
  );
}

export default App;
