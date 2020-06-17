import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Img from './fields/Img';
class Slide22 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
        
      
        <div class="fix-7-12">
          <Heading fields={this.props.slide} addClass=""/>

          
          <ul class="slider rounded margin-top-4 autoHeight clickable shadow ae-1" data-slider-id="22-22">
            <li class="wide selected"><Img fields={this.props.slide} addClass="wide" dataAction=""/></li>
            <li class="wide"><Img fields={this.props.slide} addClass="wide" dataAction=""/></li>
            <li class="wide"><Img fields={this.props.slide} addClass="wide" dataAction=""/></li>
            <li class="wide"><Img fields={this.props.slide} addClass="wide" dataAction=""/></li>
          </ul>
        
          
          <ul class="controller dots ae-3 margin-top-3" data-slider-id="22-22">
            <li class="dot selected"/>
            <li class="dot"/>
            <li class="dot"/>
            <li class="dot"/>
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