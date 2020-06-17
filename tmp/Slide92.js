import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
class Slide92 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-9-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-4 ae-1"/>
          <ButtonA fields={this.props.slide}/>
          <div class="ae-3 margin-top-2"><Text fields={this.props.slide} addClass=""/></div>
        </div>
                
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide92;