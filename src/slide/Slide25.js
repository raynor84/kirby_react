import React from 'react';
import Section from './Section';
import Heading from './fields/Heading';
import Text from './fields/Text';
class Slide25 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
        
        <div class="fix-10-12">
          <Heading fields={this.props.slide} addClass="margin-bottom-2 ae-1 fromCenter"/>
          <div class="ae-2"><Text fields={this.props.slide} addClass="margin-bottom-3 large opacity-8"/></div>
          <ul class="flex fixedSpaces">
            <li class="col-6-12 left ae-3 fromLeft">
              <p class="opacity-8">I like stuff designed by dead people. The old designers. They always got it right because they didn't have to grow up with computers. All of the people that made the spoon and the dishes and the vacuum cleaner didn't have microprocessors and stuff. </p>
            </li>
            <li class="col-6-12 left ae-4 fromLeft">
              <p class="opacity-8">In designing hardware to be used every day, it was important to keep both the human aspects and the machine in mind. What looks good also often feels good. Buildings designed with careful attention.</p>
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
export default Slide25;