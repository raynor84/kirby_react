import React from 'react';
import Section from './Section';
import Text from './fields/Text';
class Slide93 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="frame-93 rounded ae-1">
          <div class="ae-2"><Text fields={this.props.slide} addClass="larger light cropBottom inline"/></div>
        </div>
                
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide93;