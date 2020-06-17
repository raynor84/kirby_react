import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Img from './fields/Img';
class Slide33 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
          
        <div class="fix-12-12">
          <ul class="flex">
            <li class="col-6-12 left cell-33">
              <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1 fromLeft"/>
              <Text fields={this.props.slide} addClass="large ae-2 fromLeft"/>
              <ul class="tabs controller uppercase bold ae-3 fromCenter" data-slider-id="31">
                <li class="selected">Projects</li>
                <li>Community</li>
                <li>Learn</li>
              </ul>
            </li>
            <li class="col-6-12 left ae-4 fromRight">
              <ul class="slider animated" data-slider-id="31">
                <li class="selected fromRight">
                  <Img fields={this.props.slide} addClass="ipad-33" dataAction="zoom"/>
                </li>
                <li class="fromRight" data-action="zoom">
                  <Img fields={this.props.slide} addClass="ipad-33" dataAction="zoom"/>
                </li>
                <li class="fromRight" data-action="zoom">
                  <Img fields={this.props.slide} addClass="ipad-33" dataAction="zoom"/>
                </li>
              </ul>
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
export default Slide33;