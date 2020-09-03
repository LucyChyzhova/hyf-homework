import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Search } from "./pages/Search";
import { About } from "./pages/About";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="navigation">
        <div className="link">
          <Link to="/search">Search</Link>
        </div>
        <div className="link">
          <Link to="/about">About</Link>
        </div>
      </div>
       
        <Link to="/">
        <img
          className="github-logo"
          src="https://live.staticflickr.com/65535/50294062736_72e0ed96b4_c.jpg"
          alt="github_logo"
          width="25%"
        />
      </Link>
      


      <Switch>

        <Route path="/search">
        <div className="searchForm">   
          <Search />
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
