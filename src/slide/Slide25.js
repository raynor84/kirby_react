import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Subtitle from './fields/Subtitle';
import BlockText from './fields/BlockText';
import BlockText2 from './fields/BlockText2';
class Slide25 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
        
        <div class="fix-10-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1 fromCenter"/>
          <div class="ae-2"><Subtitle fields={this.props.slide} addClass="margin-bottom-3 large opacity-8"/></div>
          <ul class="flex fixedSpaces">
            <li class="col-6-12 left ae-3 fromLeft">
              <BlockText fields={this.props.slide} addClass="opacity-8" />
            </li>
            <li class="col-6-12 left ae-4 fromLeft">
              <BlockText2 fields={this.props.slide} addClass="opacity-8" />
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide25;