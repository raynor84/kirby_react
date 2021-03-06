import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
import ButtonB from './fields/ButtonB';
class Slide19 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-7-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="largest light ae-2"/>
          <ButtonA fields={this.props.slide}/><ButtonB fields={this.props.slide}/>
        </div>
      
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide19;