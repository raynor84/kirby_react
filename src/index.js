
import React from 'react';
import ReactDOM from 'react-dom';
import AnimationLoader from './class/AnimationLoader.js'
import base64 from 'base-64';
import DynamicClass from './class/DynamicClass';
import './css/styles.scss?509341';
import offlinedata from './data.json';

class App extends React.Component {
  state = {
    page: [],
    example: []
  }
  


  componentDidMount() {
    //const proxyurl = "https://cors-anywhere.herokuapp.com/";

    var url_string = window.location.href;
    var myurl = new URL(url_string);
    console.log(myurl);
    let url ="";
    if(myurl.pathname!=="/") {
      url = "http://localhost/kirby/api"+  myurl.pathname;

    } else {
      url = "http://localhost/kirby/api/pages/test";
    }
  

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
  	headers.append('Authorization', 'Basic ' + base64.encode('rest@restapi.com:VHQxdcEFiPQhXiutcmtn4wpf'));
    headers.append('Origin','http://localhost:3000');
    fetch(url, {
      mode: 'cors',
      credentials: 'include',
      headers: headers,
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({ page: data.data.content.slides });
      this.setState({example: data});

    })
    .catch((error) => {
      
      this.setState({ page: offlinedata.data.content.slides });
    })
    

    //Load Animation-Scripts after it has been loaded
    new AnimationLoader();
  }
  render() {
    console.log(this.state);
    let slides;
    if(Array.isArray(this.state.page)) {
       slides = this.state.page.map(function(slide) {
        const slideTag = slide._key.charAt(0).toUpperCase() + slide._key.slice(1);
        return React.createElement(new DynamicClass(slideTag) , {key: slide._key, slide: slide}, '');
    });

    }

    return (
      <React.Fragment>
        {slides}
      </React.Fragment>
    );
}
}
ReactDOM.render(<App />, document.getElementById('root'));

