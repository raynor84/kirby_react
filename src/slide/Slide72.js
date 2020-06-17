import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
class Slide72 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-12-12 left">
          <div class="fix-7-12 toLeft">
            <div class="ae-1 fromRight"><Text fields={this.props.slide} addClass="large opacity-8 margin-bottom-1"/></div>
            <Heading fields={this.props.slide} addClass="margin-bottom-3 ae-2"/>
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
export default Slide72;