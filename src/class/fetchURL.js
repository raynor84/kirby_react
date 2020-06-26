import React from 'react';
import {
    useLocation
  } from "react-router-dom";

class fetchURL extends React.Component {

    getKirbyFetch() {
        console.log(this.props)
        var url_string = window.location.href;
        var currentLocation = window.location.pathname;
        console.log(currentLocation);
        var myurl = new URL(url_string);
        //let location = useLocation();
        //console.log(location.pathname);
        let url ="";
        console.log(myurl);
        url_string = myurl.pathname.slice(myurl.pathname.indexOf("pages"));
        
        if(url_string!=="/") {
          url = "http://"+myurl.hostname+"/kirby/api"+  myurl.pathname;
    
        } else {
          url = "http://"+myurl.hostname+"/kirby/api/pages/test";
        }
        return url
    }
 

}

export default fetchURL