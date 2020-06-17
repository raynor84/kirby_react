import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide75 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-8-12 toCenter">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="large ae-2"/>
        </div>
        <div class="fix-12-12 margin-top-4">
          <ul class="flex flex-75 fixedSpaces ae-3 popupTrigger noText" data-popup-id="75-75">
            <li class="col-3-12 ae-6 fadeIn">
              <Img fields={this.props.slide} addClass="wide rounded margin-bottom-2" dataAction=""/>
              <Img fields={this.props.slide} addClass="wide rounded margin-bottom-2" dataAction=""/>
            </li>
            <li class="col-3-12 ae-3 fadeIn">
              <Img fields={this.props.slide} addClass="wide rounded margin-bottom-2" dataAction=""/>
            </li>
            <li class="col-3-12 ae-2 fadeIn">
              <Img fields={this.props.slide} addClass="wide rounded margin-bottom-2" dataAction=""/>
              <Img fields={this.props.slide} addClass="wide rounded margin-bottom-2" dataAction=""/>
            </li>
            <li class="col-3-12 ae-7 fadeIn">
              <Img fields={this.props.slide} addClass="wide rounded margin-bottom-2" dataAction=""/>
              <Img fields={this.props.slide} addClass="wide rounded margin-bottom-2" dataAction=""/>
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
export default Slide75;