import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import ButtonA from './fields/ButtonA';
import Img from './fields/Img';
class Slide17 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12">
          <ul class="flex fixedSpaces">
            <li class="col-6-12">
              <div class="videoThumbnail rounded shadow popupTrigger ae-1 fromCenter margin-bottom-tablet-4" data-popup-id="17-17">
                <Img fields={this.props.slide} addClass="wide" dataAction=""/>
              </div>
            </li>
            <li class="col-1-12"/>
            <li class="col-5-12 left">
              <Heading fields={this.props.slide} addClass="margin-top-1 margin-bottom-2 ae-2 fromRight"/>
              <Text fields={this.props.slide} addClass="large ae-3 fromRight"/>
              <ButtonA fields={this.props.slide}/>
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
export default Slide17;