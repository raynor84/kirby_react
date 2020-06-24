import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Img from './fields/Img';
class Slide22 extends React.Component {

	render() {
    let dots = [];
    for(let i=0; i<this.props.slide.gallery.length; i++) {
      if(i===0) {
        dots.push(<li class="dot selected"></li>);
      } else {
        dots.push(<li class="dot"></li>);
      }
    }
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
        
      
        <div class="fix-7-12">
          <Heading fields={this.props.slide} addClass="ae-1"/>

          
          <ul class="slider rounded margin-top-4 autoHeight clickable shadow ae-1" data-slider-id="22-22">
            {
           
            this.props.slide.gallery.map(function(image, index) {
            return <li class={index== 0 ? "wide selected": "wide"}><Img key={index} imageField={image} addClass="wide" dataAction=""/></li>
            })}
          </ul>
        
          
          <ul class="controller dots ae-3 margin-top-3" data-slider-id="22-22">
           
           {dots}
            
          </ul>
      	</div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide22;