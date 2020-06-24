import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import BlockText from './fields/BlockText';
class Slide40 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
        
        <div class="fix-6-12 toLeft left ae-1">
          <BlockText fields={this.props.slide} addClass="opacity-7 large margin-bottom-2"/>
          <Heading fields={this.props.slide} addClass="crop ae-1"/>
        </div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide40;