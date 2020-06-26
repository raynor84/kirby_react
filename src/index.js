
import React from 'react';
import ReactDOM from 'react-dom';
import AnimationLoader from './class/AnimationLoader.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";

import "zoom-vanilla.js/dist/zoom-vanilla.min.js"
import './css/styles.scss?509341';


class App extends React.Component {
        
       
 render() {
   //Load Animation-Scripts after it has been loaded
  //new AnimationLoader();
  console.log("test");
    return (
      <Router>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pages/:slug">
        <Home />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
    </Router>
    );
}
}
ReactDOM.render(<App />, document.getElementById('root'));

