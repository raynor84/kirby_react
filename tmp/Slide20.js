import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
class Slide20 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-8-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light ae-2"/>
          <ButtonA fields={this.props.slide}/>
        </div>
      
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide20;