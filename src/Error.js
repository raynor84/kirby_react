import React from 'react';
import { Link } from "react-router-dom";

import AnimationLoader from './class/AnimationLoader'

class Error extends React.Component {
  componentDidMount() {
    new AnimationLoader();
  }
  
    render() {
            return (
<section class="slide fade-6 kenBurns fromRight selected active animate">
  <div class="content">
    <div class="container">
      <div class="wrap">
      
        <div class="fix-12-12">
          <div class="fix-6-12 left toLeft">
            <h1 class="ae-1 smallest margin-bottom-2">Error</h1>
            <p class="ae-2 large"><span class="opacity-8">The Page you are looking for can't be found</span></p>
            <Link to="/" class="button blue rounded crop margin-top-1 ae-3">Go Back</Link>
          </div>
        </div>
            
      </div>  
    </div>
  </div>
  
</section>
            );  
    }
}
export default Error;