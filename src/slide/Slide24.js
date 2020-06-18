import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Subtitle from './fields/Subtitle';
import BlockText from './fields/BlockText';
class Slide24 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
        
        <div class="fix-8-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1 fromCenter"/>
          <div class="ae-3"><Subtitle fields={this.props.slide} addClass="light margin-bottom-3 opacity-8"/></div>
          <div class="left ae-5 cropBottom">
            <BlockText fields={this.props.slide} addClass="opacity-8" />
          </div>
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide24;