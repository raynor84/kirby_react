import React from 'react';
import Section from './Section';
import Text from './fields/Text';
import Logo from './fields/Logo';
class Slide38 extends React.Component {

	render() {
		return (
<React.Fragment>
  <Section slide={this.props.slide}>
    <div class="container">
      <div class="wrap">
        
        <div class="fix-7-12">
          <div class="fix-3-12 margin-bottom-2">
            <Logo fields={this.props.slide}/>
          </div>
          <Text fields={this.props.slide} addClass="larger light ae-3"/>

          <form class="slides-form margin-top-2 ae-4" action="#" autocomplete="off">
            <input type="email" class="rounded input-38" name="email" placeholder="Email address"/>
            <button type="submit" class="button rounded blue rounded" name="button">Get Started</button>
          </form>
          <p class="small margin-top-3 ae-5"><span class="opacity-7">Already have an invite code?</span> <a href="#" class="bold">Sign In</a></p>
        </div>
             
      </div>
    </div>
  </Section>
</React.Fragment>

		);
	}
}
export default Slide38;