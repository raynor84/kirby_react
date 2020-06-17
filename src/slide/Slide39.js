import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide39 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
        
        <div class="fix-8-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-3 ae-1"/>
          <Img fields={this.props.slide} addClass="round margin-bottom-1 margin-top-4 ae-2 fromCenter" dataAction=""/>
          <Text fields={this.props.slide} addClass="ae-3"/>
        </div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide39;