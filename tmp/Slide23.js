import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide23 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
        
        <Text fields={this.props.slide} addClass="largest light margin-bottom-1 ae-1"/>
        <Heading fields={this.props.slide} addClass=""/>
      
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide23;