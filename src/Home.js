import fetchURL from './class/fetchURL';
import base64 from 'base-64';
import DynamicClass from './class/DynamicClass';
import AnimationLoader from './class/AnimationLoader.js';
// Use Router from react-router, not BrowserRouter.

import React from 'react';



class Home extends React.Component {
    state = {
        page: [],
        settings: {}
      }

    componentDidMount() {
        //Load AnimationsScripts
        
        new AnimationLoader();
        this.fetchState();
      }
      componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            
            this.fetchState();
            new AnimationLoader();
        }
    }
   
    fetchState() {
        let fetchurl = new fetchURL();
        let url = fetchurl.getKirbyFetch();

    
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
          this.setState({ settings: data.data.content});
    
        })
        .catch((error) => {
          console.log(error);
        })
    }
    render() {
        if(this.state.settings.animation) {
          document.body.classList.add(this.state.settings.animation);
        }
        if(this.state.settings.speed) {
          document.body.classList.add(this.state.settings.speed);
        }
        if(this.state.settings.easing) {
          document.body.classList.add(this.state.settings.easing);
        }
        if(this.state.settings.animate_elements) {
          document.body.classList.add(this.state.settings.animate_elements);
        }
        if(this.state.settings.direction) {
          document.body.classList.add(this.state.settings.direction);
        }
        if(this.state.settings.scrolltype) {
          document.body.classList.add(this.state.settings.scrolltype);
        }
        let slides;
        if(Array.isArray(this.state.page)) {
           slides = this.state.page.map(function(slide, index) {
            const slideTag = slide._key.charAt(0).toUpperCase() + slide._key.slice(1);
            return React.createElement(new DynamicClass(slideTag) , {key: slide._key+index, slide: slide}, '');
          });
    
        }
            return (
                <React.Fragment>
                    {slides}
                </React.Fragment>
            );  
    }
}
export default Home;