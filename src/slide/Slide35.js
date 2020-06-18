import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Text2 from './fields/Text2';
import Img from './fields/Img';
class Slide35 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-9-12 toCenter">
          <Img fields={this.props.slide} addClass="round margin-bottom-1 ae-1 fromCenter" dataAction=""/>
          <Text fields={this.props.slide} addClass="large margin-bottom-2 ae-2"/>
          <Heading fields={this.props.slide} addClass="margin-bottom-3 ae-3"/>
          <Text2 fields={this.props.slide} addClass="larger light ae-4 opacity-8 "/>
         
        </div>
        <div class="fix-12-12 ae-5">
          <Img fields={this.props.slide} imageField={this.props.slide.image1[0]} addClass="iphone-35 margin-top-2" dataAction="zoom"/>
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide35;