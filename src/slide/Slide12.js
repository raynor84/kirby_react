import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide12 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-7-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light ae-2"/>
          <div class="margin-top-3">
            <form class="slides-form" action="#" autocomplete="off">
              <input type="email" class="input-12 rounded ae-5 fromLeft" name="email" placeholder="Email address"/>
              <button type="submit" class="button blue rounded ae-7 fromCenter" name="button">Get Started</button>
            </form>
            <p class="large margin-top-3 ae-3"><span class="opacity-8">Start now and get <b>free bonus</b> on account</span></p>
          </div>
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide12;