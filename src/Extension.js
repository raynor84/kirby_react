import AnimationLoader from "./class/AnimationLoader";
import DynamicClass from './class/DynamicClass';
// Use Router from react-router, not BrowserRouter.

import React from 'react';



class Home extends React.Component {
    state = {
        page: "",
        settings: {}
      }
    constructor(props) {
      super(props);
      this.receiveMessage = this.receiveMessage.bind(this);
      window.addEventListener("message", this.receiveMessage, false);
      this.slide=React.createRef();
     
    }
    componentDidMount() {
        //Load AnimationsScripts

        new AnimationLoader();
        //window.parent.postMessage(height + "px", "*");
        console.log(this.slide.clientHeight);
      }
      componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            
            new AnimationLoader();
        }
    }
   

    receiveMessage(event) {
     
      this.setState({ page: event.data });

    }

    render() {
      if(this.state.page) {
        let slides;

        const slideTag = this.state.page._key.charAt(0).toUpperCase() + this.state.page._key.slice(1);
        slides = React.createElement(new DynamicClass(slideTag) , {ref: this.slide, key: this.state.page._key, slide: this.state.page}, '');
            return (
                <React.Fragment>
                    {slides }
                </React.Fragment>
            );  

      }
      return null;
    }
}
export default Home;