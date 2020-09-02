import React from 'react'
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {Search} from "./pages/Search";



export const App = () => {
  return (
    <BrowserRouter>
    <div className="navigation">
      <Link to="/search">Search</Link>
    </div>
    <Switch>
      <Route path="/search">
        <Search/>
      </Route>
    </Switch>
    </BrowserRouter>
  )
}
export default App;