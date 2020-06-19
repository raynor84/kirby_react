import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import RteText from './fields/RteText';
var parse = require('html-react-parser');
class Slide58 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12 left">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light ae-2"/>
          <div class="ae-3">
              {this.props.slide.rtetext.map(function(content, index) {
                return <RteText content={content} index={index} addClass="smallest margin-top-4 margin-bottom-2"/>
              })}
          </div>
          
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide58;