
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import Extension from "./Extension";

import "zoom-vanilla.js/dist/zoom-vanilla.min.js"
import './css/styles.scss?509341';


class App extends React.Component {
        
       
 render() {
   //Load Animation-Scripts after it has been loaded

    return (

      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pages/:slug" component={Home} />
      <Route exact path="/extension" component={Extension} />
      <Route component={Error} />
    </Switch>

    );
}
}
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

