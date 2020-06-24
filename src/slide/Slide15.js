import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
class Slide15 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-12-12">
          <div class="fix-6-12 left toRight">
            <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
            <Text fields={this.props.slide} addClass="ae-2 large"/>
            <ButtonA fields={this.props.slide}/>
          </div>
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide15;