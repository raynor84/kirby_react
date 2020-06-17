import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
import Logo from './fields/Logo';
class Slide86 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">

        <div class="fix-12-12 left">
          <div class="fix-6-12 toLeft">
            <Heading fields={this.props.slide} addClass="margin-bottom-5 ae-1 fromLeft"/>
            <div class="popupTrigger ae-3 fromRight relative margin-top-4" data-popup-id="86-86">
                <span class="button play white button-86 absolute">
                  <Logo fields={this.props.slide}/>
                </span>
                <div class="text-86"><Text fields={this.props.slide} addClass="smaller bold uppercase cropBottom"/><p class="cropBottom small opacity-8">See Slides in action (2:00)</p></div>
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
export default Slide86;