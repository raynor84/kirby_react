import React from 'react';
import Section from './Section';
import Text from './fields/Text';
import Logo from './fields/Logo';
class Slide08 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
      
        <div class="fix-7-12">
          <div class="fix-3-12">
            <Logo fields={this.props.slide}/>
          </div>
          <Text fields={this.props.slide} addClass="larger light margin-top-2 ae-2"/>
          <div class="margin-top-3">
            <form class="slides-form" action="#">
              <input type="email" class="rounded input-8 ae-4 fromCenter" name="user-email" placeholder="Email"/>
              <button type="submit" class="button blue rounded ae-7 fromCenter" name="button">Get Started</button>
            </form>
            <p class="large margin-top-3 cropBottom ae-3"><span class="opacity-8">Start now and get <b>free bonus</b> on account</span></p>
          </div>
        </div>
        
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide08;