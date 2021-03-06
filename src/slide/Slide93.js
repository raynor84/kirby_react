import React from 'react';
import Section from './Section';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
class Slide93 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="frame-93 rounded ae-1">
          <div class="ae-2"><Text fields={this.props.slide} addClass="larger light cropBottom margin-top-2 inline-block"/><ButtonA fields={this.props.slide} addClass="button rounded middle margin-top-1 margin-left-2 margin-right-2 ae-3 wideForTablet margin-tablet-0 margin-top-tablet-2"/></div>
        </div>
                
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide93;