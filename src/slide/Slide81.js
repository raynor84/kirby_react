import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide81 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1 fromLeft"/>
          <div class="ae-2 fromLeft"><Text fields={this.props.slide} addClass="large opacity-8"/>
          </div>
          <div class="margin-top-4">
            <div class="videoThumbnail rounded shadow popupTrigger ae-6" data-popup-id="81-81">
            <Img fields={this.props.slide} addClass="wide" dataAction=""/></div>
          </div>
        </div>

      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide81;