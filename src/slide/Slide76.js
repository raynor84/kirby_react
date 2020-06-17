import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Logo from './fields/Logo';
import Img from './fields/Img';
class Slide76 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12">
          <ul class="flex reverse verticalCenter">
            <li class="col-6-12 left">
              <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
              <Text fields={this.props.slide} addClass="ae-2"/>
              <div class="popupTrigger ae-3 fromRight relative verticalCenter margin-top-3" data-popup-id="76-76">
                <span class="button play white button-76 absolute">
                  <Logo fields={this.props.slide}/>
                </span>
                <div class="text-76"><p class="smaller bold uppercase cropBottom">Watch video</p><p class="small opacity-8 cropBottom">See Slides in action (2:00)</p></div>
              </div>
            </li>
            <li class="col-6-12 left ae-1 fromAbove">
              <Img fields={this.props.slide} addClass="iphone-76" dataAction="zoom"/>
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
export default Slide76;