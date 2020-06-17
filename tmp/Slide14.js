import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
class Slide14 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-12-12">
          <div class="fix-6-12 left toLeft">
            <Heading fields={this.props.slide} addClass="margin-bottom-2"/>
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
export default Slide14;