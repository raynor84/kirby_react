import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import RteText from './fields/RteText';
class Slide59 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light ae-2"/>
          <div class="pad padding-4 padding-phablet-3 padding-phone-2 shadow left ae-3 pad-59 margin-top-4">
            <div class="ae-3">
                {this.props.slide.rtetext.map(function(content, index) {
                  if(index===0) {
                    return <RteText content={content} index={index} addClass="margin-top-0 margin-bottom-2 "/>
                  }
                  return <RteText content={content} index={index} addClass="margin-top-3 margin-bottom-2"/>
                })}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide59;