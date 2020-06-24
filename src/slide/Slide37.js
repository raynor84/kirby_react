import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
class Slide37 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
        
        <div class="fix-8-12">
          <Heading fields={this.props.slide} addClass="ae-1"/>
        </div>
             
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide37;