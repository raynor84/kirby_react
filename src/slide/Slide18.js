import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide18 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12 left">
          <div class="fix-5-12 toLeft">
            <Heading fields={this.props.slide} addClass="margin-bottom-2"/>
            <Text fields={this.props.slide} addClass="ae-2 fromRight large"/>
            <div class="videoThumbnail rounded shadow small video-18 popupTrigger ae-3 fromRight" data-popup-id="18-18">
              <Img fields={this.props.slide} addClass="" dataAction=""/>
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
export default Slide18;