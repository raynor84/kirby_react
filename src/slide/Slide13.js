import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide13 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-8-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1"/>
          <Text fields={this.props.slide} addClass="larger light ae-2"/>
          <form class="slides-form" action="#" autocomplete="off">
            <input type="email" class="rounded ae-5 fromLeft" name="email" placeholder="Email address"/>
            <button type="submit" class="button blue rounded ae-5 fromRight" name="button">Get Started</button>
          </form>
        </div>
                
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide13;